	/*
		TODO:
			// If player 1 leaves the game he should lose and the opponent should win
			// Add animation to helth loss
			// Add users profile picture
		BUGS:

	*/

	var socket = io.connect();
	
	var you = new CreateUser()
		, activePlayers = []
		, champion = {}
		, challenger = {};

	var $player1bar = $("#player1span");
	var $player2bar = $("#player2span");


	socket.on('connect', function () {

		socket.emit('adduser', you);

	})

	// Update globla client array when someone joins or if someone leaves
	socket.on('allUsersConnected', function (activePlayersFromServer, championFromServer, challengerFromServer) {
		
		activePlayers = activePlayersFromServer;

		//reset the client side health
		$player1bar.css({width : 100 +'%'});
		$player2bar.css({width : 100 +'%'});

		// add the users to the sidebar
		// add player 1 and 2 to fighters

								// clear the connected users list
								$('#connectedUsers').html('');

								// do a for each loop on the cleared connected users list and append each user
								$.each(activePlayers, function (key, value) {
									if (key <= 1) {
										$('#connectedUsers').append('<li>' + value.name + '</li>');
									} else {
										$('#connectedUsers').append('<li><a href="' + value.id +'">' + value.name + '</a></li>');
									};
								});

		socket.emit('disconnectedPeople', you);

	});

	// Update globla client array when champion or challenger leaves
	socket.on('currentUsers', function (activePlayersFromServer, championFromServer, challengerFromServer) { 

		activePlayers = activePlayersFromServer;

		console.log(champion.name);
		
		// add the users to the sidebar
		// add player 1 and 2 to fighters

								// clear the connected users list
								$('#connectedUsers').html('');
								// do a for each loop on the cleared connected users list and append each user
								$.each(activePlayers, function (key, value) {
									if (key <= 1) {
										$('#connectedUsers').append('<li>' + value.name + '</li>');
									} else {
										$('#connectedUsers').append('<li><a href="' + value.id +'">' + value.name + '</a></li>');
									};
								});

		// after we have updated the new array start a new fight		
		socket.emit('startNewFight', you);

	});

	socket.on('fight', function (championFromServer, challengerFromServer) {
		champion = championFromServer;
		challenger = challengerFromServer;
		// first run the countdown

		// press right to emit an attack
		console.log(you.id)
		console.log(champion.id)
		console.log(challenger.id)

		if(you.id === champion.id || you.id === challenger.id) {
			Mousetrap.bind('enter', function(e, combo) {
				socket.emit('eachAttack', you); // change name on send chat to attack
			});
		};

	});

	socket.on('backEachAttack', function (championFromServer, challengerFromServer) {
		
		champion = championFromServer;
		challenger = challengerFromServer;

		console.log('champion health ', champion.health)
		console.log('champion health ', challenger.health)
		$player1bar.css({width : champion.health +'%'});
		$player2bar.css({width : challenger.health +'%'});

	})

	socket.on('winner', function (activePlayersFromServer, championFromServer, challengerFromServer, winner) {

		activePlayers = activePlayersFromServer;
		champion = championFromServer;
		challenger = challengerFromServer;

		socket.emit('startNewFight', you, winner);

	})


	// listener, whenever the server emits 'updaterooms', this updates the room the client is in
	socket.on('updaterooms', function (rooms, current_room) {
		$('#rooms').empty();
		$.each(rooms, function (key, value) {
			if(value == current_room) {
				$('#rooms').append('<div>' + value + '</div>');
				if (key >= 2) {
					$('#data, #datasend	').css({'display' : 'none'});
				} else {
					$('#data, #datasend	').css({'display' : 'inline-block'});
					console.log(current_room);
				};
			};
		});
	});