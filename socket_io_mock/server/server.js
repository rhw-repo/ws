import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Serve static frontend files
app.use(express.static(join(__dirname, "../client")));

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

// Port 3000 forwarded in devcontainer.json
httpServer.listen(3000, "0.0.0.0", () => {
  console.log("Server running at http://localhost:3000");
});
