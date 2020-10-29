var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT username FROM users;', function(err, results, fields) {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },
  create: function (user, callback) {
    db.query('INSERT INTO users (username) VALUES ("' + user.username + '");', function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  }
};
