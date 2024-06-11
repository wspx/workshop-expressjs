const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  res.end('Hello World');
});

server.listen(3000, () => {
  console.log("Workshop Express.js - 00. Hello World - Servidor HTTP com Node.js está online: http://localhost:3000/");
});