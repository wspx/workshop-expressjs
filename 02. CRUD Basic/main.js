const http = require('http');
const { getRequestBody } = require('./utils');

const TodoService = require('./services/todoService');

const todoServiceImpl = new TodoService();

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello World');
    return;
  }

  if (req.url.startsWith('/todos/')) {
    if (req.method === 'GET') {
      const param = req.url.split('/todos/')[1] || null;
      const resultado = param ? await todoServiceImpl.getTodoById(param) : await todoServiceImpl.getAllTodos();
      
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'POST') {
      const body = await getRequestBody(req);

      const resultado = await todoServiceImpl.createNewTodo(body);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'PUT') {
      const param = req.url.split('/todos/')[1] || null;
      const body = await getRequestBody(req);

      const resultado = await todoServiceImpl.updateTodoById(param, body);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'DELETE') {
      const param = req.url.split('/todos/')[1] || null;

      const resultado = await todoServiceImpl.deleteTodoById(param);

      res.statusCode = 204;
      res.end();
      return;
    }
  }

  res.statusCode = 404;
  res.end('Nenhum endpoint acionado!!!');
});

server.listen(3000, () => {
  console.log("Workshop Express.js - 02. CRUD Basic - Servidor HTTP com Node.js está online: http://localhost:3000/");
});