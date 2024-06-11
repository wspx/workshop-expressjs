module.exports = class TodoService {

  async getAllTodos() {
    try {
      console.log('Buscando todos os TODO List Cadastrados')
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const resultado = await response.json();
      console.log('TODOS encontrados com sucesso!');
      return resultado;
    } catch (error) {
      console.error(error);
      console.error('Erro ao buscar todos os TODO List Cadastrados');
    }
  }

  async getTodoById(idTodo) {
    try {
      console.log(`Buscando TODO Cadastrados pelo ID: ${idTodo}`)
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idTodo}`);
      const resultado = await response.json();
      console.log(`TODO ${idTodo} encontrado com sucesso`);
      return resultado;
    } catch (error) {
      console.error(error);
      console.error(`Erro ao buscar o TODO pelo ID: ${idTodo}`)
    }
  }

  async createNewTodo(requestBody) { 
    try {
      console.log(`Criar um TODO - ${JSON.stringify(requestBody)}`)
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: 'POST',
        body: requestBody
      });

      const resultado = await response.json();
      console.log(`TODO ${resultado.id} criado com sucesso`);
      return resultado;
    } catch (error) {
      console.error(error);
      console.error(`Erro ao criar o TODO : ${JSON.stringify(requestBody)}`)
    }
  }

  async updateTodoById(idTodo, requestBody) {
    try {
      console.log(`Atualizar um TODO - ${JSON.stringify(requestBody)}`)
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idTodo}`, {
        method: 'PUT',
        body: requestBody
      });

      const resultado = await response.json();
      console.log(`TODO ${resultado.id} atualizado com sucesso`);
      return resultado;
    } catch (error) {
      console.error(error);
      console.error(`Erro ao atualizar o TODO : ${JSON.stringify(requestBody)}`)
    }
  }

  async deleteTodoById(idTodo) { 
    try {
      console.log(`Deletar o TODO cadastrado - ${idTodo}`)
      
      await fetch(`https://jsonplaceholder.typicode.com/todos/${idTodo}`, {
        method: 'DELETE',
      });

      console.log(`TODO ${idTodo} deletado com sucesso`);
      return;
    } catch (error) {
      console.error(error);
      console.error(`Erro ao deletar o TODO : ${idTodo}`)
    }
  }
}