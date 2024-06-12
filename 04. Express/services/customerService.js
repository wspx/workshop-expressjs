const CustomerRepository = require('../repository/customerRepository');

class CustomerService {

  async getAllCustomer() {
    return await CustomerRepository.getAllCustomer();
  }

  async getCustomerById(idCustomer) {
    const result = await CustomerRepository.getCustomerById(idCustomer);
    return result[0];
  }

  async createNewCustomer(newCustomer) {
    return await CustomerRepository.createNewCustomer(newCustomer);
  }

  async updateCustomerById(idCustomer, customer) {
    await CustomerRepository.updateCustomerById(idCustomer, customer);
    return await this.getCustomerById(idCustomer);
  }

  async deleteCustomerById(idCustomer) {
    return await CustomerRepository.deleteCustomerById(idCustomer);
  }
}

module.exports = new CustomerService();