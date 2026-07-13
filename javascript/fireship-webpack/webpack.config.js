import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const entry = "./src/index.js";
export const output = {
  filename: "awesome.js",
  path: resolve(__dirname, "dist"),
};
