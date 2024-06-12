const express = require('express');
const app = express();

const TodoController = require('./controller/todoController');
const AlbumControler = require('./controller/albumController');
const CustomerController = require('./controller/customerController');

app.use(express.json());

app.all('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hello/:nome', (req, res) => {
  res.send(`Hello World ${req.params.nome}`);
});

app.get('/todos/', TodoController.getAllTodos);
app.get('/todos/:idTodo', TodoController.getTodoById);
app.post('/todos', TodoController.createNewTodo);
app.put('/todos/:idTodo', TodoController.updateTodoById);
app.delete('/todos/:idTodo', TodoController.deleteTodoById);

app.get('/albums/', AlbumControler.getAllAlbums);
app.get('/albums/:idAlbum', AlbumControler.getAlbumById);
app.get('/albums/:idAlbum/tracks', AlbumControler.getAllMusicFromAlbumId);

app.get('/customers/', CustomerController.getAllCustomer);
app.get('/customers/:idCustomer', CustomerController.getCustomerById);
app.post('/customers/', CustomerController.createNewCustomer);
app.put('/customers/:idCustomer', CustomerController.updateCustomerById);
app.delete('/customers/:idCustomer', CustomerController.deleteCustomerById);


app.listen(3000, () => {
  console.log("Workshop Express.js - 04. Express - Servidor HTTP com Express.js está online: http://localhost:3000/");
})