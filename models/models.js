var query = require('pg-query');

var Movie = function(id, title) {
  this.id = id
  this.title = title
}

Movie.prototype.getTitle = function(cb) {
  query("SELECT * FROM Movie WHERE id = $1;", [this.id], function(err, result) {
    if (err) {
      console.log(err);
    } else {
      cb(result[0].title);
    }
  });
}

Movie.prototype.commit = function() {
  query("INSERT INTO Movie VALUES($1, $2);", [this.id, this.title], function(err, result) {
    console.log((err ? "Error" : "Success") + " inserting into Movie table");
    if (err) console.log(err);
  });
}

module.exports.Movie = Movie;
