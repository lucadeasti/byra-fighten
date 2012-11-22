// load mudules
var express = require('express')
  , fs = require('fs')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// var five = require("johnny-five"),
// 	  led,
//     board = new five.Board();

var env = process.env.NODE_ENV || 'development'

//Bootstrap mongodb
var config = require('./config/connect')[env]

//Check if the user is athenticated
var auth = require('./config/authorization')

// Bootstrap db connection
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
mongoose.connect(config.db)

// import models
var models_path = __dirname + '/app/models'
  , model_files = fs.readdirSync(models_path)
model_files.forEach(function (file) {
  require(models_path+'/'+file)
})

//Bootstrap passport
require('./config/passport').boot(passport, config);

//Iniziate the app
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

require('./sockets/chat-socket')(io, app)
io.set('log level', 1);

require('./settings').boot(app, config, passport)   

// Bootstrap routes
require('./config/routes')(app, passport, auth, io)

// start the server
server.listen(4000)