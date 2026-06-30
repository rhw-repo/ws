# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code style

Use comments sparingly. Only comment complex code.

## Repository layout

The repo contains a single Next.js application in the `uigen/` subdirectory. All development commands must be run from there.

## Dev Container

This project is configured for VS Code Dev Containers (`mcr.microsoft.com/devcontainers/typescript-node:4-24-trixie`). The container auto-runs `pnpm run setup` on creation and forwards port 3000. Always develop inside the container.

## Commands (run from `uigen/`)

```bash
# First-time setup: install deps + generate Prisma client + run migrations
pnpm run setup

# Development server (Turbopack)
pnpm run dev

# Production build
pnpm run build

# Lint
pnpm run lint

# Run all tests
pnpm test

# Run a single test file
pnpm vitest src/lib/transform/__tests__/jsx-transformer.test.ts

# Reset database (destructive)
pnpm run db:reset
```

> **Do not run `npm audit fix`.** Dependencies are intentionally pinned. Bumping them to fix audit warnings has previously broken the app. Address vulnerabilities by directly updating the pinned version.

## Architecture

### Virtual File System

The core abstraction is `VirtualFileSystem` ([src/lib/file-system.ts](uigen/src/lib/file-system.ts)) — an in-memory tree of `FileNode` objects that tracks all AI-generated component files. No generated code is ever written to disk. The VFS serializes to a plain `Record<string, FileNode>` for API requests and Prisma persistence.

### AI code generation flow

1. The user submits a chat message via `ChatProvider` ([src/lib/contexts/chat-context.tsx](uigen/src/lib/contexts/chat-context.tsx)), which uses `useAIChat` from `@ai-sdk/react`. On every request, the full serialized VFS is sent as part of the request body.
2. `POST /api/chat` ([src/app/api/chat/route.ts](uigen/src/app/api/chat/route.ts)) reconstructs the VFS from the payload, then calls `streamText` with two tools:
   - `str_replace_editor` — creates files or performs in-place string replacement
   - `file_manager` — renames or deletes files
3. Tool calls stream back to the client. `FileSystemProvider.handleToolCall` ([src/lib/contexts/file-system-context.tsx](uigen/src/lib/contexts/file-system-context.tsx)) interprets each tool call and mutates the in-memory VFS, triggering re-renders via `refreshTrigger`.

### AI provider

`getLanguageModel()` ([src/lib/provider.ts](uigen/src/lib/provider.ts)) returns `anthropic("claude-haiku-4-5")` when `ANTHROPIC_API_KEY` is set to a real key. If the env var is missing or still the placeholder `"your-api-key-here"`, it returns `MockLanguageModel` — a canned implementation that simulates tool calls without hitting the API. The model and mock live entirely in this file.

The system prompt for generation is in [src/lib/prompts/generation.tsx](uigen/src/lib/prompts/generation.tsx). Key constraints it enforces: every project must have a root `/App.jsx` default-export; non-library imports must use the `@/` alias; Tailwind CSS only (no inline styles).

### Live preview

`PreviewFrame` ([src/components/preview/PreviewFrame.tsx](uigen/src/components/preview/PreviewFrame.tsx)) renders an `<iframe>` whose `srcdoc` is regenerated on every VFS change. The JSX transformer ([src/lib/transform/jsx-transformer.ts](uigen/src/lib/transform/jsx-transformer.ts)) uses `@babel/standalone` to transpile each `.jsx`/`.tsx` file in-browser into a blob URL. An [import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) wires the blob URLs together; third-party packages are loaded from `esm.sh`. Missing local imports get stub placeholder modules so the preview doesn't crash.

### Database schema

The database schema is defined in [uigen/prisma/schema.prisma](uigen/prisma/schema.prisma). Reference it anytime you need to understand the structure of data stored in the database.

### Authentication & persistence

- Auth is JWT-based via `jose`, stored in an httpOnly cookie (`auth-token`, 7-day expiry). Server-only helpers are in [src/lib/auth.ts](uigen/src/lib/auth.ts).
- Anonymous users can generate components without signing in; their in-progress work is held in `sessionStorage` via [src/lib/anon-work-tracker.ts](uigen/src/lib/anon-work-tracker.ts).
- Authenticated users get projects auto-created/redirected on `/`. Projects persist chat `messages` (JSON string) and VFS `data` (JSON string) in SQLite via Prisma.
- The Prisma schema is at [uigen/prisma/schema.prisma](uigen/prisma/schema.prisma); the generated client outputs to `src/generated/prisma/`.
- Middleware ([src/middleware.ts](uigen/src/middleware.ts)) guards `/api/projects` and `/api/filesystem` routes.
