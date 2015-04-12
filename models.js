var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var MovieSchema = new Schema({
  "title": String,
});

exports.Movie = Mongoose.model('Movie', MovieSchema);
