// Required to run a local server to avoid cors issues
// Uses node built in apis
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework

import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;
const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "text/javascript",
  css: "text/css",
};

// Adjusted to serve the current folder instead of a "./static" folder
const STATIC_PATH = process.cwd();

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const urlAsPath = decodeURI(url);
  const paths = [STATIC_PATH, urlAsPath];
  if (url.endsWith("/")) paths.push("index.html");

  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;

  // Adjusted to prevent crashes if a file is missing
  const ext = found ? path.extname(filePath).substring(1).toLowerCase() : "";
  const stream = found ? fs.createReadStream(filePath) : null;

  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;

    res.writeHead(statusCode, { "Content-Type": mimeType });

    if (file.stream) {
      file.stream.pipe(res);
    } else {
      res.end("404: File Not Found"); // Simple text fallback
    }

    console.log(`${req.method} ${req.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
