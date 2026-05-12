// https://socket.io/docs/v4/server-initialization/

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

httpServer.listen(3000, "0.0.0.0", () => {
  console.log("Server is connected");
});
