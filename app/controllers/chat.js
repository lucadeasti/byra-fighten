var mongoose = require('mongoose')
  , User = mongoose.model('User');

// locked site
exports.chat = function (req, res) {
  var user = req.profile
  res.render('users/locked', {
      title: user.name
    , user: user
  })
}