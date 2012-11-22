var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , async = require('async')

  module.exports = function (app, passport, auth, io, socket) {
  // user routes
  var users = require('../app/controllers/users')
  app.get('/', users.login)
  app.get('/login', users.login)
  app.get('/signup', users.signup)
  app.get('/logout', users.logout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/login'}), users.session)
  app.get('/users/:userId', users.show)

  // edit user
  app.get('/users/:userId/edit', users.edit)

  //update user
  app.put('/users/:userId', users.update)

  var chat = require('../app/controllers/chat')
  //protected site
  app.get('/chat/:userId', auth.requiresLogin, chat.chat) 


  var stream = require('../app/controllers/Xstream')

  app.get('/stream', stream.index)

  app.param('userId', function (req, res, next, id) {
    User
      .findOne({ _id : id })
      .exec(function (err, user) {
        if (err) return next(err)
        if (!user) return next(new Error('Failed to load User ' + id))
        req.profile = user
        next()
      })
  })
}