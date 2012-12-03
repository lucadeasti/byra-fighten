var mongoose = require('mongoose')
	, mongoStore = require('connect-mongodb')
  , User = mongoose.model('User')
  , Stream = mongoose.model('Stream');

 // var five = require("johnny-five"),
 //    board = new five.Board();

//cheat sheet
// io.sockets.on - global socket
// 

function socketFight(io, app, connect) {

	var you = {}
		, activePlayers = []
		, room = ['champion', 'challanger', 'lobby']
		, champion = {}
		, challenger = {};

	io.sockets.on('connection', function (socket) {
		socket.on('adduser', function (you) {
			
			socket.you = you;

			activePlayers.push(socket.you);

			if(activePlayers.length <= 1 ) {
				// send array of conencted allUsers to the client
				io.sockets.emit('allUsersConnected', activePlayers, champion, challenger);
			} else {
				// send array of conencted allUsers to the client
				io.sockets.emit('currentUsers', activePlayers, champion, challenger);
			}

		})

		socket.on('disconnectedPeople', function (you) {
			sendToRooms(you);
		})

		// sends the users to the right room, runs after winning function on client
		socket.on('startNewFight', function (you, winner) {

			sendToRooms(you);

			// reset the health and how many times the champion
			// and the challenger have won
			if (winner) {
				winner.score += 1;
			}

			challenger.health = 100;
			champion.health = 100;

			io.sockets.emit('allUsersConnected', activePlayers, champion, challenger);
			socket.emit('fight', champion, challenger);

		});

		socket.on('eachAttack', function (you, typOfAttack) {

			if(you.id === champion.id) {
				challenger.health -= 5;

				if (challenger.health === 0) {
					// remove the looser
					var spliceHim = activePlayers.splice(1,2);
					activePlayers = activePlayers.concat(spliceHim);

					sendToRooms(you);

					io.sockets.emit('winner', activePlayers, champion, challenger, you);

				};

			};

			if(you.id === challenger.id) {
				champion.health -= 5;

				if (champion.health === 0) {
					// remove the looser
					var spliceHim = activePlayers.splice(0,1);
					activePlayers = activePlayers.concat(spliceHim);

					io.sockets.emit('winner', activePlayers, champion, challenger, you);
				};

			};

			io.sockets.emit('backEachAttack', champion, challenger);

		});


		// when the user disconnects.. perform this
		socket.on('disconnect', function(){

			activePlayers.splice(activePlayers.indexOf(socket.you), 1);

			if (you === champion || you === challenger) {
				io.sockets.emit('currentUsers', activePlayers, champion, challenger);
			} else {
				io.sockets.emit('allUsersConnected', activePlayers, champion, challenger);
			};

			// leave the room and then broadcast to everyone that you left
			socket.leave(socket.room);

		});

		// sort out who should join which room
		// and assign champion/challenger to two players
		function sendToRooms(you) {
			if (you.id === activePlayers[0].id) {
				champion = you;
				socket.join('champion'); // send the user to room 1
				socket.emit('updaterooms', room, 'champion');
			};
			if (activePlayers.length > 1) {
				if(you.id === activePlayers[0].id) {
						champion = you;
						socket.join('champion'); // send the user to room 1
						socket.emit('updaterooms', room, 'champion');
				} else if (you.id === activePlayers[1].id ) {
						challenger = you;
						socket.join('challanger'); // send the user to room 1
						socket.emit('updaterooms', room, 'challanger');
				} else {
					socket.join('lobby'); // send the user to room 1
					socket.emit('updaterooms', room, 'lobby');
				};
			};
		};

	});

};

module.exports = socketFight