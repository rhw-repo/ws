import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // unneccessary to end in Express
  //res.statusCode = 404;
  res.writeHead(200, "Content-Type", "application/json");
  res.end(JSON.stringify({ message: "change" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
