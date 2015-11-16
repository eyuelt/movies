var query = require('pg-query');

var Movie = function(id) {
  this.id = id
  //create a new movie row with the given id
}

Movie.prototype.getTitle = function() {
  //get the title from the row with the given id
  return "get title";
}

Movie.prototype.setTitle = function() {
  //edit the title for the row with the given id
  return "set title";
}


module.exports.Movie = Movie;
