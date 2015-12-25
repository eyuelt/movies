var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();

var routes = require('./routes/index');
var api = require('./routes/api');

var query = require('pg-query');
query.connectionParameters = "postgres://localhost/eyuelt";

//config
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('env', process.env.NODE_ENV || 'dev');
app.use(bodyParser.json());

//db
var dbConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'eyuelt'
  }
}
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf');
bookshelf.DB = bookshelf(knex);

//static content
app.use('/static', express.static(__dirname + '/dist'));

//routes
app.get('/', routes.index);

//only start server if called from command line
if (require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('[' + app.get('env') + '] Server listening on port ' + app.get('port'));
    });
}
