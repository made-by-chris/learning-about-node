const http = require("http");

const database = {
  aaa: ["aaaa", "aaaa", "aaaa", "aaaa", "aaaa", "aaaa", "aaaa"],
};

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  // res = response, end = "send and then end connection"
  res.end(JSON.stringify(database));
});

server.listen(7070);

// server is a program that is always listening and waiting
// for a request to come in.
