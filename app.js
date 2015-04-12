var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = module.exports = express();

var routes = require('./routes/index');
var api = require('./routes/api');

//connect to mongoDB
var database_name = 'movies-txt';
var database_uri = 'mongodb://localhost/' + database_name;
mongoose.connect(database_uri);

//config
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('env', process.env.NODE_ENV || 'dev');
app.use(bodyParser.json());

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
