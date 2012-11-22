var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Stream = mongoose.model('Stream');

function socket1(io, app, board, five, led) {

	// userIdObjects which are currently connected to the chat
	var userIdObjects = {};

	var userIdArr = [];
	// rooms which are currently available in chat
	var rooms = ['room1','room2', 'room3'];
	// board.on("ready", function() {

	// 	// Config all the arduino stuff
	// 	led = new five.Led(13)
			  

		io.sockets.on('connection', function (socket) {
		
			// when the client emits 'adduser', this listens and executes
			socket.on('adduser', function(usernameID, unserName){
				console.log('the username should be ', unserName)

				// store the usernameID in the socket session for this client
				socket.usernameID = usernameID;

				// store the room name in the socket session for this client
				//socket.room = 'room1';

				// add the client's usernameID to the global list
				userIdObjects[usernameID] = usernameID;

				// add user to connected userIdArr
				userIdArr.push(userIdObjects[usernameID])

				// send array of conencted userIdArr to the client
				socket.broadcast.emit('allUsersConnected', userIdArr)

				//socket.emit('news', userIdObjects[usernameID]);
				// send client to room 1
				//do some checkings
				console.log('you are: ', usernameID)
				console.log('all userIdArr connected: ', userIdArr)

				//chech the user and redirect them
				if(usernameID === userIdArr[0]) {
					count = 0;
					console.log('joining room 1')
					socket.join('room1');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room1');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room1').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room1');
				} else if (usernameID === userIdArr[1]) {
					count = 0;
					socket.join('room2');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room2');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room2').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room2');
				} else {
					socket.join('room3');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room3');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room3').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room3');
				}

				//send consol log to new user with all the userIdArr connected including this
				socket.emit('newConnection', userIdArr);

			});

			// when the user disconnects.. perform this
			socket.on('disconnect', function(){

				// remove the usernameID from global userIdObjects list
				var currentNumber = userIdArr.indexOf(socket.usernameID)
				delete userIdObjects[socket.usernameID];

				userIdArr.splice(userIdArr.indexOf(socket.usernameID), 1);

				// update list of userIdArr in chat, client-side
				io.sockets.emit('updateusers', userIdObjects);
				console.log('existing userIdArr ', userIdObjects)

				// echo globally that this client has left
				socket.broadcast.emit('updatechat', 'SERVER', socket.usernameID + ' has disconnected');

				socket.broadcast.emit('currentUsers', userIdArr, socket.usernameID);
				//socket.emit('id', usernameID);
				socket.broadcast.emit('id', currentNumber);

				//broadcast userIdArr new id
				socket.leave(socket.room);
				console.log('someone is leaving: ', rooms[currentNumber])

				//console.log('arr ', userIdArr)

				//Update rooms
				//first check so we can target each person
				socket.broadcast.emit('new number', userIdObjects, userIdArr, socket.usernameID)
				// userIdObjects, userIdArr, socket.usernameID
				console.log(userIdObjects)
				console.log(userIdArr)
				console.log(socket.usernameID)

			});

			socket.on('update id', function(usernameID) {

				//chech the user and redirect them
				if(usernameID === userIdArr[0]) {
					console.log('joining room 1')
					socket.join('room1');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room1');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room1').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room1');
				} else if (usernameID === userIdArr[1]) {
					socket.join('room2');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room2');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room2').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room2');
				} else {
					socket.join('room3');
					// echo to client they've connected
					socket.emit('updatechat', 'SERVER', 'you have connected to room3');
					// echo to room 1 that a person has connected to their room
					socket.broadcast.to('room3').emit('updatechat', 'SERVER', usernameID + ' has connected to this room');
					socket.emit('updaterooms', rooms, 'room3');
				}

				//send consol log to new user with all the userIdArr connected including this
				socket.emit('newConnection', userIdArr);

			})

			var count = 0;

			// when the client emits 'sendchat', this listens and executes
			socket.on('sendchat', function (data, you, userperson, player1healthLoaded, player2healthLoaded) {

				console.log(userperson)

				//create counting function
				count = count +  userperson
				

				//send commands to arduino
				// if(userIdArr[0] === you) {
				// 	led.on()
				// 	led.off()
				// } else {
				// 	led.on()
				// 	led.off()
				// }
				
				
				if (count === 20 ){

					// check who was the winner so we 
					// can determin who was the loser
					if(you === userIdArr[0]) {
						console.log('you are player 1')
						opponent = userIdArr[1]
					} else if (you === userIdArr[1]) {
						console.log('you are player 2')
						opponent = userIdArr[0]
					} 

					//save winner to db
					User.find({ _id: you}, function(err, docs){
						winners = docs[0]
						winner = docs[0].winning + 1
						winners.update({
							winning : winner
						}, function(err, docs) {
							console.log('this is docs', docs)	
						})
					})

					//save loser to db
					User.find({ _id: opponent}, function(err, docs){
						losers = docs[0]
						loser = docs[0].losing + 1
						losers.update({
							losing : loser
						}, function(err, docs) {
							console.log('this is docs', docs)	
						})
					})

					User.find({ _id: you }, function(err, winner) {
						User.find({ _id: opponent }, function(err, loser) {
							winner1 = winner[0]
							loser1 = loser[0]
							var stream = new Stream({
								looser : loser1,
								winner : winner1,
								}).save(function(err, docs) {
									console.log('stream save docs: ', docs)
							});
						});
					});
						

					// grab the first person in the array and remove him
					var splice1 = userIdArr.splice(0,1).toString()
					var splice2 = userIdArr.splice(0,1).toString()
					//place the persons last
					userIdArr.push(splice1, splice2)
					// send winning message to everyone
					io.sockets.emit('winner', you)
					io.sockets.emit('rebuild', userIdArr)
					
					// reset the game
					count = 0;
					
				}
				// we tell the client to execute 'updatechat' with 2 parameters
				io.sockets.in(socket.room).emit('updatechat', socket.usernameID, data);
				
				console.log('player 1 helth is ', player1healthLoaded - 1)
				console.log('player 2 helth is ', player2healthLoaded - 1)
				if(you == userIdArr[0]) {
					person = 1
				} else {
					person = 2
				}
				io.sockets.emit('allRooms', socket.usernameID, data, socket.room, person, player1healthLoaded, player2healthLoaded);

			});

			socket.on('reset count', function(resetcount) {
				count = resetcount
				console.log(resetcount)
			})

			socket.on('switchRoom', function(newroom){
				console.log('the newroom is', newroom)

				//chech the user and redirect them
				if(socket.usernameID === userIdArr[0]) {
					console.log('new user here')
				}

				// leave the current room (stored in session)
				socket.leave(socket.room);
				// join new room, received as function parameter
				socket.join(newroom);
				socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
				// sent message to OLD room
				socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.usernameID+' has left this room');
				// update socket session room title
				socket.room = newroom;
				socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.usernameID+' has joined this room');
				socket.emit('updaterooms', rooms, newroom);
			});

		socket.on('test', function() {
			socket.emit('test1')
		})

		});
	//}); // end the arduino stuff
}

module.exports = socket1