const path = require('path');
module.exports = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, './chinook.db'),
  },
});;