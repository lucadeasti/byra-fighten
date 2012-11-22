var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.signin = function (req, res) {}

// auth callback
exports.authCallback = function (req, res, next) {
  res.redirect('/')
}

// login
exports.login = function (req, res) {
  res.render('users/login', {
    title: 'Login'
  })
}

// sign up
exports.signup = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up'
  })
}

// logout
exports.logout = function (req, res) {
  req.logout()
  res.redirect('/login')
}

// session
exports.session = function (req, res) {
  res.redirect('/')
}

// signup
exports.create = function (req, res) {
  console.log(req.body)
  var user = new User(req.body)
  user.provider = 'local'
  user.save(function (err) {
    if (err) return res.render('users/signup', { errors: err.errors })
    req.logIn(user, function(err) {
      if (err) return next(err)
      return res.redirect('/')
    })
  })
}

// show profile
exports.show = function (req, res) {
  var user = req.profile
  res.render('users/show', {
      title: user.name
    , user: user
  })
}

// edit profile
exports.edit = function(req, res) {
  var user = req.profile
  res.render('users/edit', {
    title: user.name
  , user: user
  })
}

// update profile
exports.update = function(req, res) {
  var b = req.body;
  console.log(req.profile); // should be new value
  console.log(req.params); // should be old value
  console.log(req.body)
  User.update(
    {id: req.profile.userId},
    {id: b._id, name: b.name, email: b.email, username: b.username},
    function (err) {
      res.redirect('/')
    }
  )
}