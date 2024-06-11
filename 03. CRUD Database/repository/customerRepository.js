const db = require('../db/database');

module.exports = class CustomerRepository {

  async getAllCustomer() {
    return await db.raw(`
      SELECT
        c.CustomerId, 
        c.FirstName || ' ' || c.LastName as Name,
        c.Address,
        c.Country,
        c.PostalCode,
        c.Phone,
        c.Email
      FROM Customers c
      ORDER BY c.CustomerId DESC
    `)
  }

  async getCustomerById(idCustomer) {
    return await db.raw(`
      SELECT
        c.CustomerId, 
        c.FirstName || ' ' || c.LastName as Name,
        c.Address,
        c.Country,
        c.PostalCode,
        c.Phone,
        c.Email
      FROM Customers c
      WHERE c.CustomerId = ?
    `, idCustomer)
  }

  async createNewCustomer(newCustomer) {
    return await db.raw(`
      INSERT INTO Customers(FirstName, LastName, Address, City, State, Country, PostalCode, Phone, Email, SupportRepId)
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      newCustomer.FirstName,
      newCustomer.LastName,
      newCustomer.Address,
      newCustomer.City,
      newCustomer.State,
      newCustomer.Country,
      newCustomer.PostalCode,
      newCustomer.Phone,
      newCustomer.Email,
      3
    ]);
  }

  async updateCustomerById(idCustomer, customer) {
    return await db.raw(`
      UPDATE Customers SET
        FirstName = ?,
        LastName = ?,
        Address = ?,
        City = ?,
        State = ?,
        Country = ?,
        PostalCode = ?,
        Phone = ?,
        Email = ?
      WHERE CustomerId = ?
    `, [
      customer.FirstName,
      customer.LastName,
      customer.Address,
      customer.City,
      customer.State,
      customer.Country,
      customer.PostalCode,
      customer.Phone,
      customer.Email,
      idCustomer
    ]);
  }

  async deleteCustomerById(idCustomer) {
    return await db.raw(`DELETE FROM Customers WHERE CustomerId = ?`, [idCustomer]);
  }
}