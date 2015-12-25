var dbConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'eyuelt'
  }
}

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf');
bookshelf = bookshelf(knex);
module.exports = bookshelf;
