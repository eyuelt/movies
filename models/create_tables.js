var query = require('pg-query');

query("CREATE TABLE Movie(id INT PRIMARY KEY, title TEXT);", function(err, result) {
  console.log((err ? "Error" : "Success") + " creating Movie table");
  if (err) console.log(err);
});
