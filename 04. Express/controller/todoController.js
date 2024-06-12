const TodoService = require('../services/todoService');

class TodoController {

  async getAllTodos(req, res) {
    const resultado = await TodoService.getAllTodos();
    res.send(resultado);
  }
  async getTodoById(req, res) {
    const resultado = await TodoService.getTodoById(req.params.idTodo);
    res.send(resultado);
  }
  async createNewTodo(req, res) {
    const resultado = await TodoService.createNewTodo(req.body);
    res.status(201).send(resultado);
  }
  async updateTodoById(req, res) {
    const resultado = await TodoService.updateTodoById(req.params.idTodo, req.body);
    res.send(resultado);
  }

  async deleteTodoById(req, res) {
    await TodoService.updateTodoById(req.params.idTodo);
    res.status(204).send();
  }

}

module.exports = new TodoController();
