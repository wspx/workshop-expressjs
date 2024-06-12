const CustomerService = require('../services/customerService')

class CustomerController {
  
  async getAllCustomer(req, res) {
    const result = await CustomerService.getAllCustomer();
    res.send(result);
  }

  async getCustomerById(req, res) {
    const result = await CustomerService.getCustomerById(req.params.idCustomer);
    res.send(result);
  }

  async createNewCustomer(req, res) {
    await CustomerService.createNewCustomer(req.body);
    res.status(201).send();
  }

  async updateCustomerById(req, res) {
    const result = await CustomerService.updateCustomerById(req.params.idCustomer, req.body);
    res.send(result);
  }

  async deleteCustomerById(req, res) {
    await CustomerService.deleteCustomerById(req.params.idCustomer);
    res.status(204).send();
  }
}

module.exports = new CustomerController();