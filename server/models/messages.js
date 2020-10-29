var db = require('../db');
var mysql = require('mysql');


module.exports = {
  getAll: function (callback) {
    db.query('SELECT message FROM messages;', function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    db.query('INSERT INTO messages (message, user_id, created_at, room_id) VALUES ("' + message.message + '", 2, 2020-08-29, 2);', function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        callback(null, results);
        // console.log(message.message, 'db.query create models');
      }
    });
  } // a function which can be used to insert a message into the database
};
