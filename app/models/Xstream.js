// stream schema
var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, crypto = require('crypto')
	, _ = require('underscore');

StreamSchema = new Schema ({
		winner: {type : Schema.ObjectId, ref : 'User'}
	, looser: {type : Schema.ObjectId, ref : 'User'}
	, time: { type: Date, default: Date.now }
});

mongoose.model('Stream', StreamSchema);