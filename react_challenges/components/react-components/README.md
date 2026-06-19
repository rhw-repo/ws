### Credits

Photo by <a href="https://unsplash.com/@jaehunpark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jae Park</a> on <a href="https://unsplash.com/photos/brown-tabby-cat-7GX5aICb5i4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>Ç

Photo by <a href="https://unsplash.com/@ejleusink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik-Jan Leusink</a> on <a href="https://unsplash.com/photos/selective-focus-photo-of-gray-tabby-cat-IbPxGLgJiMI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@timmykp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim van der Kuip</a> on <a href="https://unsplash.com/photos/calico-cat-on-gray-textile-mdRJhxlsuGM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@alexmeier19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Meier</a> on <a href="https://unsplash.com/photos/siamese-cat-KGiQFgF7dkc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@cyrus_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cyrus Chew</a> on <a href="https://unsplash.com/photos/brown-and-white-cat-sitting-beside-of-glass-window-during-daytime-Dl39g6QhOIM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@cyrus_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cyrus Chew</a> on <a href="https://unsplash.com/photos/brown-and-white-cat-sitting-beside-of-glass-window-during-daytime-Dl39g6QhOIM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@jusdevoyage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jusdevoyage</a> on <a href="https://unsplash.com/photos/brown-tabby-cat-in-close-up-photography-gQvW5-yazj4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
