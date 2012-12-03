var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Stream = mongoose.model('Stream');

 // var five = require("johnny-five"),
 //    board = new five.Board();

function socketMain(io, app) {

/*
	 	ON FUNCTIONS
			
			connection - 	activates when the user connects, get from 'connection'
										The namespace socket only refers to this user
			
			adduser - Function that runs each time a user connects, 
								this nuction adds the user to the userObjArr and sets a global socket.id for each user
								We also check what room init a user should join
								and run the allUsersConnected function to all users including this
			
			disconnect -  Function that runs each time a user disconnects
										This function removes the user from the userObjArr
										and runs the updateusers function (will then from the client run the updatechat function)
			
			update id - this function sends user 1 and 2 to the right room and then calls allUsersConnected function
									attack - Function that handels each keypress from client, and counts down from 100 to 0
									When someone reach 0 we do 3 mongoose queries and save all data to right Schema
									Then we emit to everyone the winner
			
			reset count - Function that runs from winning function on client, this function resets the count when someone wins
										(for some reason we need to keep it seperate)
										the function then sends back to the winning function
			
			switchRoom -

		EMITS FUNCTIONS
			updatechat - Sends message when someone connects (to everyone)
			updaterooms - 
			allUsersConnected - 
*/

	// store all users in a global object array
	var userObjectArr = [];
	var onlineClients = {};
	var userIdObject = {};

	// list all the rooms
	var rooms = ['room1', 'room2', 'room3'];

	io.sockets.on('connection', function (socket) {
		
		// when the client emits 'adduser', this listens and executes
		socket.on('adduser', function (userObj) {

			// store the UserObject in the socket session for this client
			socket.userObj = userObj;

			onlineClients[userObj.id] = socket.id;

			// add the client's usernameID to the global list
			userIdObject[userObj] = userObj;
			console.log('this ', userIdObject[userObj])

			// add the userObject to the global userObject Array
			userObjectArr.push(userIdObject[userObj]);



			// send array of conencted userObjectArr to the client
			io.sockets.emit('allUsersConnected', userObjectArr)

			//chech the user and redirect them
			if(userObj.id === userObjectArr[0].id) {
				
				count = 0; // reset the count for player 1
				socket.join('room1'); // send the user to room 1

				socket.broadcast.to('room1').emit('updatechat', 'SERVER', userObj.name + ' has connected to this room');
				
				socket.emit('updaterooms', rooms, 'room1');

			} else if (userObj.id  === userObjectArr[1].id) { // BUG HERE
				
				count = 0; // reset the count for player 2
				socket.join('room2');

				socket.broadcast.to('room2').emit('updatechat', 'SERVER', userObj.name + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room2');

			} else {

				socket.join('room3');

				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room3');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room3').emit('updatechat', 'SERVER', userObj.name + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room3');

			}

		});

		// when the user disconnects.. perform this
		socket.on('disconnect', function(){
			var currentNumber = userObjectArr.indexOf(socket.userObj)
			delete userObjectArr[socket.userObj];
			userObjectArr.splice(userObjectArr.indexOf(socket.userObj), 1);

			socket.broadcast.emit('currentUsers', userObjectArr, socket.userObj.id);

			socket.leave(socket.room);

		});

		// sends the users to the right room, runs after winning function on client
		socket.on('update id', function(userObj) {
				
			//chech the user and redirect them
			if(userObj.id === userObjectArr[0].id) {
				
				socket.join('room1');

				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room1');

				socket.broadcast.to('room1').emit('updatechat', 'SERVER', userObj + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room1');
				
			} else if (userObj.id === userObjectArr[1].id) {
				
				socket.join('room2');

				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room2');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room2').emit('updatechat', 'SERVER', userObj + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room2');

			} else {
				
				console.log('joining room 3')

				// echo to client they've connected
				socket.emit('updatechat', 'SERVER', 'you have connected to room3');
				// echo to room 1 that a person has connected to their room
				socket.broadcast.to('room3').emit('updatechat', 'SERVER', userObj.name + ' has connected to this room');
				socket.emit('updaterooms', rooms, 'room3');

			} // end if else statement

			socket.emit('allUsersConnected', userObjectArr);

		});

		var count = 0;

		// when the client emits 'sendchat', this listens and executes
		socket.on('attack', function (message, you, userperson, player1healthLoaded, player2healthLoaded) {
			
				//Set up the count var
				count = count +  userperson

				if (count === 100 ){
					// check who was the winner so we 
					// can determin who was the loser
					if(you.id === userObjectArr[0].id) {
						console.log('you are player 1')
						userObjectArr[0].score += 1
						opponent = userObjectArr[1].id
						userObjectArr[1].score = 0
					} else if (you.id === userObjectArr[1].id) {
						console.log('you are player 2')
						userObjectArr[1].score += 1
						opponent = userObjectArr[0].id
						userObjectArr[0].score = 0
					} 

						//save winner to db
						User.find({ _id: you.id}, function(err, docs){
							winners = docs[0]
							winner = docs[0].winning + 1
							winners.update({
								winning : winner
							}, function(err, docs) {
								//console.log('this is docs', docs)	
							})
						})

						//save loser to db
						User.find({ _id: opponent}, function(err, docs){
							losers = docs[0]
							loser = docs[0].losing + 1
							losers.update({
								losing : loser
							}, function(err, docs) {
								//console.log('this is docs', docs)	
							})
						})

						User.find({ _id: you.id }, function(err, winner) {
							User.find({ _id: opponent }, function(err, loser) {
								winner1 = winner[0]
								loser1 = loser[0]
								var stream = new Stream({
									looser : loser1,
									winner : winner1,
									}).save(function(err, docs) {
										//console.log('stream save docs: ', docs)
								});
							});
						});
						
						// grab the first person in the array and remove him

						console.log('you are', you)

						if(you.id === userObjectArr[0].id) {
							var splice1 = userObjectArr.splice(1,1)
						} else {
							var splice1 = userObjectArr.splice(0,1)
						}

						//place the persons last
						userObjectArr = userObjectArr.concat(splice1)

						io.sockets.emit('winner', you)

						// reset the game
						count = 0;
					
				}
				// we tell the client to execute 'updatechat' with 2 parameters
				io.sockets.in(socket.room).emit('updatechat', socket.userObj.name, message);
				
				console.log('player 1 helth is ', player1healthLoaded - 5)
				console.log('player 2 helth is ', player2healthLoaded - 5)
				
				if(you.id == userObjectArr[0].id) {
					person = 1
				} else {
					person = 2
				}
				io.sockets.emit('allRooms', socket.userObj.name, message, person, player1healthLoaded, player2healthLoaded);

		});

		// resets the count when someone wins
		socket.on('reset count', function(resetcount) {
			count = resetcount;
			socket.emit('test1');
		});

		// basic function for private message
		socket.on('private message', function (from, to, msg) {
    	for(i in userObjectArr) {
    		function foundResult(value, index, array) {
    			return value.id === to;
    		};
    	};

    	var result = userObjectArr.filter(foundResult);
    	var id = onlineClients[to];
    	io.sockets.socket(id).emit('msg', from, msg)

  	});

	});

}

module.exports = socketMain