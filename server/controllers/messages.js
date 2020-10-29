var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(data) {
      res.send(data);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var message = req.body;
    console.log(req.body.message);

    models.messages.create(message, function(err, result) {
      // res.send(message);
      res.sendStatus(200);
    });
  } // a function which handles posting a message to the database
};
