var bookshelf = require('bookshelf').DB

var User = bookshelf.Model.extend({
  tableName: 'account'
});

var Movie = bookshelf.Model.extend({
  tableName: 'movie'
});

module.exports.User = User;
module.exports.Movie = Movie;



User.where('id', 1).fetch().then(function(user) {
    console.log(user.toJSON());
}).catch(function(err) {
    console.error(err);
});

var u = new User({name: 'hi'}).save();
