const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  if (req.url === '/') {
    res.end('Hello World');
    return;
  }

  if (req.url.startsWith('/hello/')) {
    const param = req.url.split('/hello/')[1] || 'Vazio';
    res.end(`Hello World ${param}!!!`);
    return;
  }

  if (req.method === 'POST') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ msg: 'Endpoint POST acionado com SUCESSO' }));
    return;
  }

  res.statusCode = 404;
  res.end('Nenhum endpoint acionado!!!');
});

server.listen(3000, () => {
  console.log("Workshop Express.js - 01. Hello World Advanced - Servidor HTTP com Node.js está online: http://localhost:3000/");
});