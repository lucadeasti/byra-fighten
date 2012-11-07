function socket1(io) {

	// usernames which are currently connected to the chat
	var usernames = {};

	var users = [];
	// rooms which are currently available in chat
	var rooms = ['room1','room2', 'room3'];

	io.sockets.on('connection', function (socket) {
		
		// when the client emits 'adduser', this listens and executes
		socket.on('adduser', function(username){

			// store the username in the socket session for this client
			socket.username = username;

			// store the room name in the socket session for this client
			//socket.room = 'room1';

			// add the client's username to the global list
			usernames[username] = username;

			// add user to connected users
			users.push(usernames[username])

			// send array of conencted users to the client
			socket.broadcast.emit('allUsersConnected', users)

			//socket.emit('news', usernames[username]);
			// send client to room 1
			
			//do some checkings
			console.log('you are: ', username)
			console.log('all users connected: ', users)

			//chech the user and redirect them
			if(username === users[0]) {
				console.log('joining room 1')
				socket.join('room1');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room1');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room1');
			} else if (username === users[1]) {
				socket.join('room2');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room2');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room2').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room2');
			} else {
				socket.join('room3');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room3');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room3').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room3');
			}

			//send consol log to new user with all the users connected including this
			socket.emit('newConnection', users);

		});

		// when the user disconnects.. perform this
		socket.on('disconnect', function(){

			// remove the username from global usernames list
			var currentNumber = users.indexOf(socket.username)
			delete usernames[socket.username];

			users.splice(users.indexOf(socket.username), 1);

			// update list of users in chat, client-side
			io.sockets.emit('updateusers', usernames);
			console.log('existing users ', usernames)

			// echo globally that this client has left
			socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');

			socket.broadcast.emit('currentUsers', users);
			//socket.emit('id', username);
			socket.broadcast.emit('id', currentNumber);

			//broadcast users new id
			socket.leave(socket.room);
			console.log('someone is leaving: ', rooms[currentNumber])

			//console.log('arr ', users)

			//Update rooms
			//first check so we can target each person
			socket.broadcast.emit('new number', usernames, users, socket.username)
			// usernames, users, socket.username

		});

		socket.on('update id', function(username) {
			//chech the user and redirect them
			if(username === users[0]) {
				console.log('joining room 1')
				socket.join('room1');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room1');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room1');
			} else if (username === users[1]) {
				socket.join('room2');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room2');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room2').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room2');
			} else {
				socket.join('room3');
				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room3');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room3').emit('updatechat', 'SERVER', username + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room3');
			}

			//send consol log to new user with all the users connected including this
			socket.emit('newConnection', users);

		})

		var count = 0;

		// when the client emits 'sendchat', this listens and executes
		socket.on('sendchat', function (data, you, userperson) {
			
			count = count +  userperson
			//create counting function
			console.log('the count is', count)

			if (count === 20 ){
				console.log('you are the winner')
				// grab the first person in the array and remove him
				var splice1 = users.splice(0,1).toString()
				var splice2 = users.splice(0,1).toString()
				//place the persons last
				users.push(splice1, splice2)

				// send winning message to everyone
				io.sockets.emit('winner', you)
				io.sockets.emit('rebuild', users)
				count = 0;
				// reset the game

			}

			// we tell the client to execute 'updatechat' with 2 parameters
			io.sockets.in(socket.room).emit('updatechat', socket.username, data);
		});


		socket.on('sendchat', function(data) {
			io.sockets.emit('allRooms', socket.username, data, socket.room);
		})

		socket.on('switchRoom', function(newroom){
			console.log('the newroom is', newroom)

			//chech the user and redirect them
			if(socket.username === users[0]) {
				console.log('new user here')
			}

			// leave the current room (stored in session)
			socket.leave(socket.room);
			// join new room, received as function parameter
			socket.join(newroom);
			socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
			// sent message to OLD room
			socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
			// update socket session room title
			socket.room = newroom;
			socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
			socket.emit('updaterooms', rooms, newroom);
		});

	});

}

module.exports = socket1