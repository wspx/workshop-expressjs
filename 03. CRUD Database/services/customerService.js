const CustomerRepository = require('../repository/customerRepository');

module.exports = class CustomerService {

  constructor() {
    this.customerRepository = new CustomerRepository()
  }

  async getAllCustomer() {
    return this.customerRepository.getAllCustomer();
  }

  async getCustomerById(idCustomer) {
    const result = await this.customerRepository.getCustomerById(idCustomer);
    return result[0];
  }

  async createNewCustomer(newCustomer) {
    const result = await this.customerRepository.createNewCustomer(newCustomer);
  }

  async updateCustomerById(idCustomer, customer) {
    await this.customerRepository.updateCustomerById(idCustomer, customer);
    return await this.getCustomerById(idCustomer);
  }

  async deleteCustomerById(idCustomer) {
    return await this.customerRepository.deleteCustomerById(idCustomer);
  }
}