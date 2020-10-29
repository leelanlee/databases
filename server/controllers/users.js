var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(data) {
      res.send(data);
    });
  }, // a function which handles a get request for all users
  post: function (req, res) {
    models.users.create(user, function() {
      res.send(user);
    });
  } // a function which handles posting a user to the database
};
