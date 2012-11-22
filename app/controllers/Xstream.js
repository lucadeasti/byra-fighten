var mongoose = require('mongoose')
  , Stream = mongoose.model('Stream');

// login
exports.index = function (req, res) {
	Stream
		.find({})
		.populate('looser', 'name')
		.populate('winner', 'name')
		.sort({'time': -1}) // sort by date
		.exec(function(err, streams) {
  		res.render('stream/index', {
  			streams : streams
  		})
  	});
};