var mongoose = require('mongoose')
  , User = mongoose.model('User');

// locked site
exports.main = function (req, res) {
  var user = req.profile
  res.render('fight/index', {
      title: user.name
    , user: user
  })
}