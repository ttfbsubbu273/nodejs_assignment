var express = require('express'),
    router = express.Router(),
    signup = require('../models/users/signup.js');

router.post('/signup', function(req, res) {
  signup.addUser(req, res, function(err, data) {
    if (err) {
      res.json({ 'error': true, 'message': 'Error adding user .. !' });
    } else {
      res.json({ 'success': true, 'message': 'User added succesfully' });
    }
  });
});

module.exports = router;