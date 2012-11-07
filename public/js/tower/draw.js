	//Create function that handles the database
	//Draw each floor with the object, work in progres
	//Depending on what kind of key render different functions so each floor gets right content
	function drawObj() {
		lobby.all();
		//lobby();
		//all.all();
		//Loop through each floor
		//This code works for the array 
		//console.log(floors.length)

		var oystrArr = [];
		var tictailArr = [];
		var bloglovinArr = [];
		var izettleArr = [];
		var tripbirdsArr = [];
		var mojangArr = [];
		
		//23 is the max for iphone and ipad
		if (floors.length >= 159) {
			floorsHeigth = 159;
			s = (floors.length - 159);
		} else {
			floorsHeigth = floors.length;
			s = 0
		}
		for (var i = s; i < floors.length; i = i + 1) {
			var floor = floors[i];
			if (floors[i].hashtags == 'oystr') {
				oystrArr.push(floors[i].hashtags)
			} else if (floors[i].hashtags == 'tictail') {
				tictailArr.push(floors[i].hashtags)
			} else if (floors[i].hashtags == 'bloglovin') {
				bloglovinArr.push(floors[i].hashtags)
			} else if (floors[i].hashtags == 'iZettle') {
				izettleArr.push(floors[i].hashtags)
			} else if (floors[i].hashtags == 'tripbirds') {
				tripbirdsArr.push(floors[i].hashtags)
			} else if (floors[i].hashtags == 'mojang') {
				mojangArr.push(floors[i].hashtags)
			}
		
			var switchArr = floor.hashtags

			// search each array for correct name
			// change this later to a for loop
			if ($.inArray( 'tictail', switchArr) >= 0 ) {
				 arrNumber = $.inArray( 'tictail', switchArr)
			} else if ($.inArray( 'bloglovin', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'bloglovin', switchArr)
			} else if ($.inArray( 'izettle', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'izettle', switchArr)
			} else if ($.inArray( 'tripbirds', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'tripbirds', switchArr)
			} else if ($.inArray( 'mojang', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'mojang', switchArr)
			} else if ($.inArray( 'wrapp', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'wrapp', switchArr)
			} else if ($.inArray( 'knape', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'knape', switchArr)
			} else if ($.inArray( 'oystr', switchArr) >= 0 ) {
				arrNumber = $.inArray( 'oystr', switchArr)
			} else {
				 console.log('not found')
			}

			var hashtag = switchArr[arrNumber] // add the index to the switchArr

			//console.log(hashtag)
			var user = floor.user
			var imgURL = floor.imgURL
			var text = floor.text
			//Check what kind of startup it is and add the color from that
			//load function depending on startup
			switch (hashtag) {
				case "tictail":
					var thisRoomColor = '#1b70b9'; //done, needs review
					var thisShadowColor = '#124774'; // done, needs review					
					var logo = function(logoX) {
					ctx.translate(logoX, 45); 	
			      // layer1/Path
			      ctx.save();
			      ctx.beginPath();
			      ctx.moveTo(142.7, 5.8);
			      ctx.lineTo(142.7, 2.9);
			      ctx.lineTo(139.8, 2.9);
			      ctx.lineTo(139.8, 0.0);
			      ctx.lineTo(5.8, 0.0);
			      ctx.lineTo(5.8, 2.9);
			      ctx.lineTo(2.9, 2.9);
			      ctx.lineTo(2.9, 5.8);
			      ctx.lineTo(0.0, 5.8);
			      ctx.lineTo(0.0, 46.6);
			      ctx.lineTo(2.9, 46.6);
			      ctx.lineTo(2.9, 49.5);
			      ctx.lineTo(5.8, 49.5);
			      ctx.lineTo(5.8, 52.4);
			      ctx.lineTo(119.4, 52.4);
			      ctx.lineTo(119.4, 55.4);
			      ctx.lineTo(122.3, 55.4);
			      ctx.lineTo(122.3, 58.2);
			      ctx.lineTo(125.2, 58.2);
			      ctx.lineTo(125.2, 61.2);
			      ctx.lineTo(128.1, 61.2);
			      ctx.lineTo(128.1, 58.2);
			      ctx.lineTo(131.0, 58.2);
			      ctx.lineTo(131.0, 52.4);
			      ctx.lineTo(139.8, 52.4);
			      ctx.lineTo(139.8, 49.5);
			      ctx.lineTo(142.7, 49.5);
			      ctx.lineTo(142.7, 46.6);
			      ctx.lineTo(145.6, 46.6);
			      ctx.lineTo(145.6, 5.8);
			      ctx.lineTo(142.7, 5.8);
			      ctx.closePath();
			      ctx.fillStyle = "rgb(87, 87, 86)";
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(139.8, 5.8);
			      ctx.lineTo(139.8, 2.9);
			      ctx.lineTo(5.8, 2.9);
			      ctx.lineTo(5.8, 5.8);
			      ctx.lineTo(2.9, 5.8);
			      ctx.lineTo(2.9, 46.6);
			      ctx.lineTo(5.8, 46.6);
			      ctx.lineTo(5.8, 49.5);
			      ctx.lineTo(119.4, 49.5);
			      ctx.lineTo(119.4, 52.4);
			      ctx.lineTo(122.3, 52.4);
			      ctx.lineTo(122.3, 55.4);
			      ctx.lineTo(125.2, 55.4);
			      ctx.lineTo(125.2, 58.2);
			      ctx.lineTo(128.1, 58.2);
			      ctx.lineTo(128.1, 52.4);
			      ctx.lineTo(131.0, 52.4);
			      ctx.lineTo(131.0, 49.5);
			      ctx.lineTo(139.8, 49.5);
			      ctx.lineTo(139.8, 46.6);
			      ctx.lineTo(142.7, 46.6);
			      ctx.lineTo(142.7, 5.8);
			      ctx.lineTo(139.8, 5.8);
			      ctx.closePath();
			      ctx.fillStyle = "rgb(255, 255, 255)";
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(125.2, 6.9);
			      ctx.lineTo(125.2, 44.3);
			      ctx.lineTo(133.8, 44.3);
			      ctx.lineTo(133.8, 6.9);
			      ctx.lineTo(125.2, 6.9);
			      ctx.closePath();
			      ctx.fillStyle = "rgb(249, 191, 8)";
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(113.7, 18.3);
			      ctx.lineTo(113.7, 44.3);
			      ctx.lineTo(122.3, 44.3);
			      ctx.lineTo(122.3, 18.3);
			      ctx.lineTo(113.7, 18.3);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(113.7, 9.7);
			      ctx.lineTo(113.7, 15.5);
			      ctx.lineTo(122.3, 15.5);
			      ctx.lineTo(122.3, 9.7);
			      ctx.lineTo(113.7, 9.7);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Compound Path
			      ctx.beginPath();

			      // layer1/Compound Path/Path
			      ctx.moveTo(107.9, 18.3);
			      ctx.lineTo(105.1, 18.3);
			      ctx.lineTo(105.1, 15.5);
			      ctx.lineTo(93.6, 15.5);
			      ctx.lineTo(93.6, 18.3);
			      ctx.lineTo(90.7, 18.3);
			      ctx.lineTo(90.7, 24.2);
			      ctx.lineTo(99.4, 24.2);
			      ctx.lineTo(99.4, 27.0);
			      ctx.lineTo(87.8, 27.0);
			      ctx.lineTo(87.8, 44.3);
			      ctx.lineTo(99.4, 44.3);
			      ctx.lineTo(99.4, 41.3);
			      ctx.lineTo(105.1, 41.3);
			      ctx.lineTo(105.1, 44.3);
			      ctx.lineTo(110.8, 44.3);
			      ctx.lineTo(110.8, 21.2);
			      ctx.lineTo(107.9, 21.2);
			      ctx.lineTo(107.9, 18.3);
			      ctx.closePath();

			      // layer1/Compound Path/Path
			      ctx.moveTo(96.5, 38.5);
			      ctx.lineTo(93.6, 38.5);
			      ctx.lineTo(93.6, 32.8);
			      ctx.lineTo(99.4, 32.8);
			      ctx.lineTo(99.4, 35.6);
			      ctx.lineTo(96.5, 35.6);
			      ctx.lineTo(96.5, 38.5);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(79.0, 18.3);
			      ctx.lineTo(79.0, 12.7);
			      ctx.lineTo(73.3, 12.7);
			      ctx.lineTo(73.3, 15.5);
			      ctx.lineTo(70.4, 15.5);
			      ctx.lineTo(70.4, 18.3);
			      ctx.lineTo(67.6, 18.3);
			      ctx.lineTo(67.6, 24.2);
			      ctx.lineTo(70.4, 24.2);
			      ctx.lineTo(70.4, 41.3);
			      ctx.lineTo(73.3, 41.3);
			      ctx.lineTo(73.3, 44.3);
			      ctx.lineTo(84.8, 44.3);
			      ctx.lineTo(84.8, 38.5);
			      ctx.lineTo(81.9, 38.5);
			      ctx.lineTo(81.9, 35.6);
			      ctx.lineTo(79.0, 35.6);
			      ctx.lineTo(79.0, 24.2);
			      ctx.lineTo(87.7, 24.2);
			      ctx.lineTo(87.7, 18.3);
			      ctx.lineTo(79.0, 18.3);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(64.7, 38.5);
			      ctx.lineTo(56.1, 38.5);
			      ctx.lineTo(56.1, 35.6);
			      ctx.lineTo(53.2, 35.6);
			      ctx.lineTo(53.2, 27.0);
			      ctx.lineTo(58.9, 27.0);
			      ctx.lineTo(58.9, 24.2);
			      ctx.lineTo(64.7, 24.2);
			      ctx.lineTo(64.7, 18.3);
			      ctx.lineTo(50.3, 18.3);
			      ctx.lineTo(50.3, 21.2);
			      ctx.lineTo(47.4, 21.2);
			      ctx.lineTo(47.4, 24.2);
			      ctx.lineTo(44.6, 24.2);
			      ctx.lineTo(44.6, 38.5);
			      ctx.lineTo(47.4, 38.5);
			      ctx.lineTo(47.4, 41.3);
			      ctx.lineTo(50.3, 41.3);
			      ctx.lineTo(50.3, 44.3);
			      ctx.lineTo(67.6, 44.3);
			      ctx.lineTo(67.6, 35.6);
			      ctx.lineTo(64.7, 35.6);
			      ctx.lineTo(64.7, 38.5);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(33.1, 18.3);
			      ctx.lineTo(33.1, 44.3);
			      ctx.lineTo(41.7, 44.3);
			      ctx.lineTo(41.7, 18.3);
			      ctx.lineTo(33.1, 18.3);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(33.1, 9.7);
			      ctx.lineTo(33.1, 15.5);
			      ctx.lineTo(41.7, 15.5);
			      ctx.lineTo(41.7, 9.7);
			      ctx.lineTo(33.1, 9.7);
			      ctx.closePath();
			      ctx.fill();

			      // layer1/Path
			      ctx.beginPath();
			      ctx.moveTo(10.1, 9.7);
			      ctx.lineTo(10.1, 18.3);
			      ctx.lineTo(15.8, 18.3);
			      ctx.lineTo(15.8, 44.3);
			      ctx.lineTo(24.5, 44.3);
			      ctx.lineTo(24.5, 18.3);
			      ctx.lineTo(30.2, 18.3);
			      ctx.lineTo(30.2, 9.7);
			      ctx.lineTo(10.1, 9.7);
			      ctx.closePath();
			      ctx.fill();
			      ctx.restore();
			      ctx.translate(-logoX, -45); 
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "bloglovin":
					var thisRoomColor = '#459DD8'; // done, needs review
					var thisShadowColor = '#366f95'; // done, needs review
					var logo = function(logoX) {
						ctx.translate(logoX, 45); 
				      // layer1/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(142.7, 5.8);
				      ctx.lineTo(142.7, 2.9);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(139.8, 0.0);
				      ctx.lineTo(5.8, 0.0);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(2.9, 2.9);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(0.0, 5.8);
				      ctx.lineTo(0.0, 46.6);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(2.9, 49.5);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(5.8, 52.4);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(119.4, 55.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(122.3, 58.2);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(125.2, 61.2);
				      ctx.lineTo(128.1, 61.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(131.0, 58.2);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(139.8, 52.4);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(142.7, 49.5);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(145.6, 46.6);
				      ctx.lineTo(145.6, 5.8);
				      ctx.lineTo(142.7, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(87, 87, 86)";
				      ctx.fill();

				      // layer1/Path
				      ctx.beginPath();
				      ctx.moveTo(139.8, 5.8);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(5.8, 5.8);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(5.8, 46.6);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(119.4, 49.5);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(122.3, 52.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(125.2, 55.4);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(128.1, 52.4);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(131.0, 49.5);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(139.8, 46.6);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(142.7, 5.8);
				      ctx.lineTo(139.8, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(255, 255, 255)";
				      ctx.fill();

				      // layer1/Group

				      // layer1/Group/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(132.9, 14.0);
				      ctx.lineTo(132.9, 17.4);
				      ctx.lineTo(136.4, 17.4);
				      ctx.lineTo(136.4, 19.1);
				      ctx.lineTo(134.7, 19.1);
				      ctx.lineTo(134.7, 20.8);
				      ctx.lineTo(138.1, 20.8);
				      ctx.lineTo(138.1, 14.0);
				      ctx.lineTo(132.9, 14.0);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(0, 0, 0)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(132.9, 22.6);
				      ctx.lineTo(131.2, 22.6);
				      ctx.lineTo(131.2, 20.8);
				      ctx.lineTo(122.6, 20.8);
				      ctx.lineTo(122.6, 22.6);
				      ctx.lineTo(120.9, 22.6);
				      ctx.lineTo(120.9, 20.8);
				      ctx.lineTo(117.5, 20.8);
				      ctx.lineTo(117.5, 38.0);
				      ctx.lineTo(122.6, 38.0);
				      ctx.lineTo(122.6, 24.3);
				      ctx.lineTo(127.8, 24.3);
				      ctx.lineTo(127.8, 26.0);
				      ctx.lineTo(129.5, 26.0);
				      ctx.lineTo(129.5, 38.0);
				      ctx.lineTo(134.7, 38.0);
				      ctx.lineTo(134.7, 24.3);
				      ctx.lineTo(132.9, 24.3);
				      ctx.lineTo(132.9, 22.6);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(105.4, 20.8);
				      ctx.lineTo(105.4, 24.3);
				      ctx.lineTo(103.7, 24.3);
				      ctx.lineTo(103.7, 31.2);
				      ctx.lineTo(100.3, 31.2);
				      ctx.lineTo(100.3, 24.3);
				      ctx.lineTo(98.6, 24.3);
				      ctx.lineTo(98.6, 20.8);
				      ctx.lineTo(93.4, 20.8);
				      ctx.lineTo(93.4, 24.3);
				      ctx.lineTo(95.1, 24.3);
				      ctx.lineTo(95.1, 29.4);
				      ctx.lineTo(96.8, 29.4);
				      ctx.lineTo(96.8, 32.9);
				      ctx.lineTo(98.6, 32.9);
				      ctx.lineTo(98.6, 36.3);
				      ctx.lineTo(100.3, 36.3);
				      ctx.lineTo(100.3, 38.0);
				      ctx.lineTo(103.7, 38.0);
				      ctx.lineTo(103.7, 36.3);
				      ctx.lineTo(105.4, 36.3);
				      ctx.lineTo(105.4, 32.9);
				      ctx.lineTo(107.2, 32.9);
				      ctx.lineTo(107.2, 29.4);
				      ctx.lineTo(108.9, 29.4);
				      ctx.lineTo(108.9, 24.3);
				      ctx.lineTo(110.6, 24.3);
				      ctx.lineTo(110.6, 38.0);
				      ctx.lineTo(115.7, 38.0);
				      ctx.lineTo(115.7, 20.8);
				      ctx.lineTo(105.4, 20.8);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(110.6, 14.0);
				      ctx.lineTo(110.6, 19.1);
				      ctx.lineTo(115.7, 19.1);
				      ctx.lineTo(115.7, 14.0);
				      ctx.lineTo(110.6, 14.0);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(91.7, 22.6);
				      ctx.lineTo(90.0, 22.6);
				      ctx.lineTo(90.0, 20.8);
				      ctx.lineTo(79.7, 20.8);
				      ctx.lineTo(79.7, 22.6);
				      ctx.lineTo(77.9, 22.6);
				      ctx.lineTo(77.9, 26.0);
				      ctx.lineTo(76.2, 26.0);
				      ctx.lineTo(76.2, 32.9);
				      ctx.lineTo(77.9, 32.9);
				      ctx.lineTo(77.9, 36.3);
				      ctx.lineTo(79.7, 36.3);
				      ctx.lineTo(79.7, 38.0);
				      ctx.lineTo(90.0, 38.0);
				      ctx.lineTo(90.0, 36.3);
				      ctx.lineTo(91.7, 36.3);
				      ctx.lineTo(91.7, 32.9);
				      ctx.lineTo(93.4, 32.9);
				      ctx.lineTo(93.4, 26.0);
				      ctx.lineTo(91.7, 26.0);
				      ctx.lineTo(91.7, 22.6);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(88.3, 32.9);
				      ctx.lineTo(86.5, 32.9);
				      ctx.lineTo(86.5, 34.6);
				      ctx.lineTo(83.1, 34.6);
				      ctx.lineTo(83.1, 32.9);
				      ctx.lineTo(81.4, 32.9);
				      ctx.lineTo(81.4, 26.0);
				      ctx.lineTo(83.1, 26.0);
				      ctx.lineTo(83.1, 24.3);
				      ctx.lineTo(86.5, 24.3);
				      ctx.lineTo(86.5, 26.0);
				      ctx.lineTo(88.3, 26.0);
				      ctx.lineTo(88.3, 32.9);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(69.4, 14.0);
				      ctx.lineTo(69.4, 38.0);
				      ctx.lineTo(74.5, 38.0);
				      ctx.lineTo(74.5, 14.0);
				      ctx.lineTo(69.4, 14.0);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group
				      ctx.restore();

				      // layer1/Group/Compound Path
				      ctx.save();
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(62.5, 22.6);
				      ctx.lineTo(62.5, 20.8);
				      ctx.lineTo(53.9, 20.8);
				      ctx.lineTo(53.9, 22.6);
				      ctx.lineTo(52.2, 22.6);
				      ctx.lineTo(52.2, 24.3);
				      ctx.lineTo(48.7, 24.3);
				      ctx.lineTo(48.7, 22.6);
				      ctx.lineTo(47.0, 22.6);
				      ctx.lineTo(47.0, 20.8);
				      ctx.lineTo(36.7, 20.8);
				      ctx.lineTo(36.7, 22.6);
				      ctx.lineTo(35.0, 22.6);
				      ctx.lineTo(35.0, 24.3);
				      ctx.lineTo(33.3, 24.3);
				      ctx.lineTo(33.3, 32.9);
				      ctx.lineTo(35.0, 32.9);
				      ctx.lineTo(35.0, 36.3);
				      ctx.lineTo(36.7, 36.3);
				      ctx.lineTo(36.7, 38.0);
				      ctx.lineTo(47.0, 38.0);
				      ctx.lineTo(47.0, 36.3);
				      ctx.lineTo(48.7, 36.3);
				      ctx.lineTo(48.7, 32.9);
				      ctx.lineTo(52.2, 32.9);
				      ctx.lineTo(52.2, 34.6);
				      ctx.lineTo(53.9, 34.6);
				      ctx.lineTo(53.9, 36.3);
				      ctx.lineTo(60.8, 36.3);
				      ctx.lineTo(60.8, 34.6);
				      ctx.lineTo(62.5, 34.6);
				      ctx.lineTo(62.5, 39.7);
				      ctx.lineTo(55.6, 39.7);
				      ctx.lineTo(55.6, 38.0);
				      ctx.lineTo(52.2, 38.0);
				      ctx.lineTo(52.2, 41.5);
				      ctx.lineTo(53.9, 41.5);
				      ctx.lineTo(53.9, 43.2);
				      ctx.lineTo(64.2, 43.2);
				      ctx.lineTo(64.2, 41.5);
				      ctx.lineTo(65.9, 41.5);
				      ctx.lineTo(65.9, 39.7);
				      ctx.lineTo(67.6, 39.7);
				      ctx.lineTo(67.6, 22.6);
				      ctx.lineTo(62.5, 22.6);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(45.3, 32.9);
				      ctx.lineTo(43.6, 32.9);
				      ctx.lineTo(43.6, 34.6);
				      ctx.lineTo(40.1, 34.6);
				      ctx.lineTo(40.1, 32.9);
				      ctx.lineTo(38.4, 32.9);
				      ctx.lineTo(38.4, 26.0);
				      ctx.lineTo(40.1, 26.0);
				      ctx.lineTo(40.1, 24.3);
				      ctx.lineTo(43.6, 24.3);
				      ctx.lineTo(43.6, 26.0);
				      ctx.lineTo(45.3, 26.0);
				      ctx.lineTo(45.3, 32.9);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(57.3, 32.9);
				      ctx.lineTo(57.3, 31.2);
				      ctx.lineTo(55.6, 31.2);
				      ctx.lineTo(55.6, 26.0);
				      ctx.lineTo(57.3, 26.0);
				      ctx.lineTo(57.3, 24.3);
				      ctx.lineTo(60.8, 24.3);
				      ctx.lineTo(60.8, 26.0);
				      ctx.lineTo(62.5, 26.0);
				      ctx.lineTo(62.5, 31.2);
				      ctx.lineTo(60.8, 31.2);
				      ctx.lineTo(60.8, 32.9);
				      ctx.lineTo(57.3, 32.9);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(0, 158, 227)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(26.4, 14.0);
				      ctx.lineTo(26.4, 38.0);
				      ctx.lineTo(31.5, 38.0);
				      ctx.lineTo(31.5, 14.0);
				      ctx.lineTo(26.4, 14.0);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(23.0, 22.6);
				      ctx.lineTo(21.2, 22.6);
				      ctx.lineTo(21.2, 20.8);
				      ctx.lineTo(14.4, 20.8);
				      ctx.lineTo(14.4, 22.6);
				      ctx.lineTo(12.6, 22.6);
				      ctx.lineTo(12.6, 14.0);
				      ctx.lineTo(9.2, 14.0);
				      ctx.lineTo(9.2, 15.7);
				      ctx.lineTo(7.5, 15.7);
				      ctx.lineTo(7.5, 36.3);
				      ctx.lineTo(9.2, 36.3);
				      ctx.lineTo(9.2, 38.0);
				      ctx.lineTo(12.6, 38.0);
				      ctx.lineTo(12.6, 36.3);
				      ctx.lineTo(14.4, 36.3);
				      ctx.lineTo(14.4, 38.0);
				      ctx.lineTo(21.2, 38.0);
				      ctx.lineTo(21.2, 36.3);
				      ctx.lineTo(23.0, 36.3);
				      ctx.lineTo(23.0, 34.6);
				      ctx.lineTo(24.7, 34.6);
				      ctx.lineTo(24.7, 24.3);
				      ctx.lineTo(23.0, 24.3);
				      ctx.lineTo(23.0, 22.6);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(17.8, 24.3);
				      ctx.lineTo(17.8, 26.0);
				      ctx.lineTo(19.5, 26.0);
				      ctx.lineTo(19.5, 31.2);
				      ctx.lineTo(17.8, 31.2);
				      ctx.lineTo(17.8, 32.9);
				      ctx.lineTo(14.4, 32.9);
				      ctx.lineTo(14.4, 31.2);
				      ctx.lineTo(12.6, 31.2);
				      ctx.lineTo(12.6, 26.0);
				      ctx.lineTo(14.4, 26.0);
				      ctx.lineTo(14.4, 24.3);
				      ctx.lineTo(17.8, 24.3);
				      ctx.closePath();
				      ctx.fill();
				      ctx.restore();
						ctx.translate(-logoX, -45); 
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "izettle":
					var thisRoomColor = '#595959';  // done, needs review
					var thisShadowColor = '#3e4447';  // done, needs review
					var logo = function(logoX) {
						ctx.translate(logoX, 45);
						console.log('izettle')
						ctx.translate(-logoX, -45); 
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "tripbirds":
					var thisRoomColor = '#db514f'; // done, needs review
					var thisShadowColor = '#a03938'; // done, needs review
					var logo = function(logoX) {
						ctx.translate(logoX, 45); 
				      // layer1/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(142.7, 5.8);
				      ctx.lineTo(142.7, 2.9);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(139.8, 0.0);
				      ctx.lineTo(5.8, 0.0);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(2.9, 2.9);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(0.0, 5.8);
				      ctx.lineTo(0.0, 46.6);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(2.9, 49.5);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(5.8, 52.4);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(119.4, 55.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(122.3, 58.2);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(125.2, 61.2);
				      ctx.lineTo(128.1, 61.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(131.0, 58.2);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(139.8, 52.4);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(142.7, 49.5);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(145.6, 46.6);
				      ctx.lineTo(145.6, 5.8);
				      ctx.lineTo(142.7, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(87, 87, 86)";
				      ctx.fill();

				      // layer1/Path
				      ctx.beginPath();
				      ctx.moveTo(139.8, 5.8);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(5.8, 5.8);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(5.8, 46.6);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(119.4, 49.5);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(122.3, 52.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(125.2, 55.4);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(128.1, 52.4);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(131.0, 49.5);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(139.8, 46.6);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(142.7, 5.8);
				      ctx.lineTo(139.8, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(255, 255, 255)";
				      ctx.fill();

				      // layer1/Compound Path
				      ctx.beginPath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(132.0, 30.6);
				      ctx.lineTo(132.0, 26.8);
				      ctx.lineTo(130.1, 26.8);
				      ctx.lineTo(130.1, 23.0);
				      ctx.lineTo(128.2, 23.0);
				      ctx.lineTo(128.2, 19.3);
				      ctx.lineTo(132.0, 19.3);
				      ctx.lineTo(132.0, 9.8);
				      ctx.lineTo(120.7, 9.8);
				      ctx.lineTo(120.7, 11.7);
				      ctx.lineTo(117.0, 11.7);
				      ctx.lineTo(117.0, 9.8);
				      ctx.lineTo(103.8, 9.8);
				      ctx.lineTo(103.8, 13.6);
				      ctx.lineTo(101.9, 13.6);
				      ctx.lineTo(101.9, 11.7);
				      ctx.lineTo(100.0, 11.7);
				      ctx.lineTo(100.0, 9.8);
				      ctx.lineTo(79.3, 9.8);
				      ctx.lineTo(79.3, 15.4);
				      ctx.lineTo(81.2, 15.4);
				      ctx.lineTo(81.2, 26.8);
				      ctx.lineTo(79.3, 26.8);
				      ctx.lineTo(79.3, 24.9);
				      ctx.lineTo(77.4, 24.9);
				      ctx.lineTo(77.4, 11.7);
				      ctx.lineTo(75.6, 11.7);
				      ctx.lineTo(75.6, 9.8);
				      ctx.lineTo(39.8, 9.8);
				      ctx.lineTo(39.8, 11.7);
				      ctx.lineTo(38.0, 11.7);
				      ctx.lineTo(38.0, 9.8);
				      ctx.lineTo(9.7, 9.8);
				      ctx.lineTo(9.7, 17.4);
				      ctx.lineTo(15.4, 17.4);
				      ctx.lineTo(15.4, 38.1);
				      ctx.lineTo(13.5, 38.1);
				      ctx.lineTo(13.5, 43.7);
				      ctx.lineTo(58.7, 43.7);
				      ctx.lineTo(58.7, 38.1);
				      ctx.lineTo(56.8, 38.1);
				      ctx.lineTo(56.8, 28.6);
				      ctx.lineTo(62.4, 28.6);
				      ctx.lineTo(62.4, 26.8);
				      ctx.lineTo(64.3, 26.8);
				      ctx.lineTo(64.3, 38.1);
				      ctx.lineTo(62.4, 38.1);
				      ctx.lineTo(62.4, 43.7);
				      ctx.lineTo(77.4, 43.7);
				      ctx.lineTo(77.4, 41.8);
				      ctx.lineTo(79.3, 41.8);
				      ctx.lineTo(79.3, 43.7);
				      ctx.lineTo(117.0, 43.7);
				      ctx.lineTo(117.0, 41.8);
				      ctx.lineTo(120.7, 41.8);
				      ctx.lineTo(120.7, 43.7);
				      ctx.lineTo(132.0, 43.7);
				      ctx.lineTo(132.0, 39.9);
				      ctx.lineTo(133.9, 39.9);
				      ctx.lineTo(133.9, 30.6);
				      ctx.lineTo(132.0, 30.6);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(24.8, 38.1);
				      ctx.lineTo(21.0, 38.1);
				      ctx.lineTo(21.0, 17.4);
				      ctx.lineTo(24.8, 17.4);
				      ctx.lineTo(24.8, 38.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(32.3, 23.0);
				      ctx.lineTo(30.4, 23.0);
				      ctx.lineTo(30.4, 17.4);
				      ctx.lineTo(32.3, 17.4);
				      ctx.lineTo(32.3, 23.0);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(41.7, 36.1);
				      ctx.lineTo(38.0, 36.1);
				      ctx.lineTo(38.0, 28.6);
				      ctx.lineTo(36.1, 28.6);
				      ctx.lineTo(36.1, 26.8);
				      ctx.lineTo(39.8, 26.8);
				      ctx.lineTo(39.8, 15.4);
				      ctx.lineTo(41.7, 15.4);
				      ctx.lineTo(41.7, 36.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(51.1, 38.1);
				      ctx.lineTo(47.3, 38.1);
				      ctx.lineTo(47.3, 15.4);
				      ctx.lineTo(51.1, 15.4);
				      ctx.lineTo(51.1, 38.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(58.7, 21.1);
				      ctx.lineTo(56.8, 21.1);
				      ctx.lineTo(56.8, 17.4);
				      ctx.lineTo(58.7, 17.4);
				      ctx.lineTo(58.7, 21.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(69.9, 17.4);
				      ctx.lineTo(71.8, 17.4);
				      ctx.lineTo(71.8, 19.3);
				      ctx.lineTo(69.9, 19.3);
				      ctx.lineTo(69.9, 17.4);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(73.7, 36.1);
				      ctx.lineTo(71.8, 36.1);
				      ctx.lineTo(71.8, 38.1);
				      ctx.lineTo(69.9, 38.1);
				      ctx.lineTo(69.9, 28.6);
				      ctx.lineTo(71.8, 28.6);
				      ctx.lineTo(71.8, 30.6);
				      ctx.lineTo(73.7, 30.6);
				      ctx.lineTo(73.7, 36.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(88.8, 38.1);
				      ctx.lineTo(86.9, 38.1);
				      ctx.lineTo(86.9, 15.4);
				      ctx.lineTo(88.8, 15.4);
				      ctx.lineTo(88.8, 38.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(96.3, 21.1);
				      ctx.lineTo(94.4, 21.1);
				      ctx.lineTo(94.4, 17.4);
				      ctx.lineTo(96.3, 17.4);
				      ctx.lineTo(96.3, 21.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(105.7, 36.1);
				      ctx.lineTo(103.8, 36.1);
				      ctx.lineTo(101.9, 36.1);
				      ctx.lineTo(101.9, 24.9);
				      ctx.lineTo(103.8, 24.9);
				      ctx.lineTo(103.8, 15.4);
				      ctx.lineTo(105.7, 15.4);
				      ctx.lineTo(105.7, 36.1);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(115.1, 32.4);
				      ctx.lineTo(113.2, 32.4);
				      ctx.lineTo(113.2, 36.1);
				      ctx.lineTo(111.3, 36.1);
				      ctx.lineTo(111.3, 17.4);
				      ctx.lineTo(113.2, 17.4);
				      ctx.lineTo(113.2, 21.1);
				      ctx.lineTo(115.1, 21.1);
				      ctx.lineTo(115.1, 32.4);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(126.4, 36.1);
				      ctx.lineTo(124.5, 36.1);
				      ctx.lineTo(124.5, 34.3);
				      ctx.lineTo(122.6, 34.3);
				      ctx.lineTo(120.7, 34.3);
				      ctx.lineTo(120.7, 26.8);
				      ctx.lineTo(122.6, 26.8);
				      ctx.lineTo(122.6, 30.6);
				      ctx.lineTo(124.5, 30.6);
				      ctx.lineTo(124.5, 34.3);
				      ctx.lineTo(126.4, 34.3);
				      ctx.lineTo(126.4, 36.1);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group

				      // layer1/Group/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(130.2, 32.4);
				      ctx.lineTo(130.2, 28.7);
				      ctx.lineTo(128.3, 28.7);
				      ctx.lineTo(128.3, 24.9);
				      ctx.lineTo(126.4, 24.9);
				      ctx.lineTo(126.4, 21.2);
				      ctx.lineTo(124.5, 21.2);
				      ctx.lineTo(124.5, 13.5);
				      ctx.lineTo(126.4, 13.5);
				      ctx.lineTo(126.4, 11.7);
				      ctx.lineTo(122.6, 11.7);
				      ctx.lineTo(122.6, 13.5);
				      ctx.lineTo(120.7, 13.5);
				      ctx.lineTo(120.7, 23.0);
				      ctx.lineTo(122.6, 23.0);
				      ctx.lineTo(122.6, 24.9);
				      ctx.lineTo(124.5, 24.9);
				      ctx.lineTo(124.5, 28.7);
				      ctx.lineTo(126.4, 28.7);
				      ctx.lineTo(126.4, 32.4);
				      ctx.lineTo(128.3, 32.4);
				      ctx.lineTo(128.3, 39.9);
				      ctx.lineTo(124.5, 39.9);
				      ctx.lineTo(124.5, 38.0);
				      ctx.lineTo(122.6, 38.0);
				      ctx.lineTo(122.6, 36.2);
				      ctx.lineTo(120.7, 36.2);
				      ctx.lineTo(120.7, 39.9);
				      ctx.lineTo(122.6, 39.9);
				      ctx.lineTo(122.6, 41.8);
				      ctx.lineTo(130.2, 41.8);
				      ctx.lineTo(130.2, 38.0);
				      ctx.lineTo(132.0, 38.0);
				      ctx.lineTo(132.0, 32.4);
				      ctx.lineTo(130.2, 32.4);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(33, 69, 135)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(128.3, 15.5);
				      ctx.lineTo(128.3, 17.4);
				      ctx.lineTo(130.2, 17.4);
				      ctx.lineTo(130.2, 11.7);
				      ctx.lineTo(128.3, 11.7);
				      ctx.lineTo(128.3, 13.5);
				      ctx.lineTo(126.4, 13.5);
				      ctx.lineTo(126.4, 15.5);
				      ctx.lineTo(128.3, 15.5);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(117.0, 13.5);
				      ctx.lineTo(115.1, 13.5);
				      ctx.lineTo(115.1, 11.7);
				      ctx.lineTo(105.7, 11.7);
				      ctx.lineTo(105.7, 13.5);
				      ctx.lineTo(107.6, 13.5);
				      ctx.lineTo(107.6, 39.9);
				      ctx.lineTo(105.7, 39.9);
				      ctx.lineTo(105.7, 41.8);
				      ctx.lineTo(115.1, 41.8);
				      ctx.lineTo(115.1, 39.9);
				      ctx.lineTo(117.0, 39.9);
				      ctx.lineTo(117.0, 38.0);
				      ctx.lineTo(118.8, 38.0);
				      ctx.lineTo(118.8, 15.5);
				      ctx.lineTo(117.0, 15.5);
				      ctx.lineTo(117.0, 13.5);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(117.0, 34.3);
				      ctx.lineTo(115.1, 34.3);
				      ctx.lineTo(115.1, 38.0);
				      ctx.lineTo(113.2, 38.0);
				      ctx.lineTo(113.2, 39.9);
				      ctx.lineTo(109.4, 39.9);
				      ctx.lineTo(109.4, 13.5);
				      ctx.lineTo(113.2, 13.5);
				      ctx.lineTo(113.2, 15.5);
				      ctx.lineTo(115.1, 15.5);
				      ctx.lineTo(115.1, 19.2);
				      ctx.lineTo(117.0, 19.2);
				      ctx.lineTo(117.0, 34.3);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(101.9, 39.9);
				      ctx.lineTo(100.1, 39.9);
				      ctx.lineTo(100.1, 30.5);
				      ctx.lineTo(98.2, 30.5);
				      ctx.lineTo(98.2, 28.7);
				      ctx.lineTo(96.3, 28.7);
				      ctx.lineTo(96.3, 26.7);
				      ctx.lineTo(98.2, 26.7);
				      ctx.lineTo(98.2, 24.9);
				      ctx.lineTo(100.1, 24.9);
				      ctx.lineTo(100.1, 23.0);
				      ctx.lineTo(101.9, 23.0);
				      ctx.lineTo(101.9, 15.5);
				      ctx.lineTo(100.1, 15.5);
				      ctx.lineTo(100.1, 13.5);
				      ctx.lineTo(98.2, 13.5);
				      ctx.lineTo(98.2, 11.7);
				      ctx.lineTo(88.7, 11.7);
				      ctx.lineTo(88.7, 13.5);
				      ctx.lineTo(90.6, 13.5);
				      ctx.lineTo(90.6, 39.9);
				      ctx.lineTo(88.7, 39.9);
				      ctx.lineTo(88.7, 41.8);
				      ctx.lineTo(94.4, 41.8);
				      ctx.lineTo(94.4, 39.9);
				      ctx.lineTo(92.5, 39.9);
				      ctx.lineTo(92.5, 26.7);
				      ctx.lineTo(94.4, 26.7);
				      ctx.lineTo(94.4, 30.5);
				      ctx.lineTo(96.3, 30.5);
				      ctx.lineTo(96.3, 38.0);
				      ctx.lineTo(98.2, 38.0);
				      ctx.lineTo(98.2, 41.8);
				      ctx.lineTo(103.8, 41.8);
				      ctx.lineTo(103.8, 38.0);
				      ctx.lineTo(101.9, 38.0);
				      ctx.lineTo(101.9, 39.9);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(92.5, 24.9);
				      ctx.lineTo(92.5, 13.5);
				      ctx.lineTo(96.3, 13.5);
				      ctx.lineTo(96.3, 15.5);
				      ctx.lineTo(98.2, 15.5);
				      ctx.lineTo(98.2, 17.4);
				      ctx.lineTo(100.1, 17.4);
				      ctx.lineTo(100.1, 21.2);
				      ctx.lineTo(98.2, 21.2);
				      ctx.lineTo(98.2, 23.0);
				      ctx.lineTo(96.3, 23.0);
				      ctx.lineTo(96.3, 24.9);
				      ctx.lineTo(92.5, 24.9);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(81.2, 11.7);
				      ctx.lineTo(81.2, 13.5);
				      ctx.lineTo(83.1, 13.5);
				      ctx.lineTo(83.1, 39.9);
				      ctx.lineTo(81.2, 39.9);
				      ctx.lineTo(81.2, 41.8);
				      ctx.lineTo(86.9, 41.8);
				      ctx.lineTo(86.9, 39.9);
				      ctx.lineTo(85.0, 39.9);
				      ctx.lineTo(85.0, 13.5);
				      ctx.lineTo(86.9, 13.5);
				      ctx.lineTo(86.9, 11.7);
				      ctx.lineTo(81.2, 11.7);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(77.5, 26.7);
				      ctx.lineTo(75.6, 26.7);
				      ctx.lineTo(75.6, 24.9);
				      ctx.lineTo(73.7, 24.9);
				      ctx.lineTo(73.7, 23.0);
				      ctx.lineTo(75.6, 23.0);
				      ctx.lineTo(75.6, 13.5);
				      ctx.lineTo(73.7, 13.5);
				      ctx.lineTo(73.7, 11.7);
				      ctx.lineTo(64.3, 11.7);
				      ctx.lineTo(64.3, 13.5);
				      ctx.lineTo(66.2, 13.5);
				      ctx.lineTo(66.2, 39.9);
				      ctx.lineTo(64.3, 39.9);
				      ctx.lineTo(64.3, 41.8);
				      ctx.lineTo(75.6, 41.8);
				      ctx.lineTo(75.6, 39.9);
				      ctx.lineTo(77.5, 39.9);
				      ctx.lineTo(77.5, 36.2);
				      ctx.lineTo(79.4, 36.2);
				      ctx.lineTo(79.4, 28.7);
				      ctx.lineTo(77.5, 28.7);
				      ctx.lineTo(77.5, 26.7);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(68.0, 13.5);
				      ctx.lineTo(71.8, 13.5);
				      ctx.lineTo(71.8, 15.5);
				      ctx.lineTo(73.7, 15.5);
				      ctx.lineTo(73.7, 21.2);
				      ctx.lineTo(71.8, 21.2);
				      ctx.lineTo(71.8, 24.9);
				      ctx.lineTo(68.0, 24.9);
				      ctx.lineTo(68.0, 13.5);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(75.6, 38.0);
				      ctx.lineTo(73.7, 38.0);
				      ctx.lineTo(73.7, 39.9);
				      ctx.lineTo(68.0, 39.9);
				      ctx.lineTo(68.0, 26.7);
				      ctx.lineTo(73.7, 26.7);
				      ctx.lineTo(73.7, 28.7);
				      ctx.lineTo(75.6, 28.7);
				      ctx.lineTo(75.6, 38.0);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group
				      ctx.restore();

				      // layer1/Group/Compound Path
				      ctx.save();
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(60.5, 13.5);
				      ctx.lineTo(60.5, 11.7);
				      ctx.lineTo(49.3, 11.7);
				      ctx.lineTo(49.3, 13.5);
				      ctx.lineTo(53.0, 13.5);
				      ctx.lineTo(53.0, 39.9);
				      ctx.lineTo(51.1, 39.9);
				      ctx.lineTo(51.1, 41.8);
				      ctx.lineTo(56.8, 41.8);
				      ctx.lineTo(56.8, 39.9);
				      ctx.lineTo(54.9, 39.9);
				      ctx.lineTo(54.9, 26.7);
				      ctx.lineTo(60.5, 26.7);
				      ctx.lineTo(60.5, 24.9);
				      ctx.lineTo(62.4, 24.9);
				      ctx.lineTo(62.4, 13.5);
				      ctx.lineTo(60.5, 13.5);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(60.5, 23.0);
				      ctx.lineTo(58.7, 23.0);
				      ctx.lineTo(58.7, 24.9);
				      ctx.lineTo(54.9, 24.9);
				      ctx.lineTo(54.9, 13.5);
				      ctx.lineTo(58.7, 13.5);
				      ctx.lineTo(58.7, 15.5);
				      ctx.lineTo(60.5, 15.5);
				      ctx.lineTo(60.5, 23.0);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(32, 45, 85)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(41.7, 11.7);
				      ctx.lineTo(41.7, 13.5);
				      ctx.lineTo(43.6, 13.5);
				      ctx.lineTo(43.6, 39.9);
				      ctx.lineTo(41.7, 39.9);
				      ctx.lineTo(41.7, 41.8);
				      ctx.lineTo(47.4, 41.8);
				      ctx.lineTo(47.4, 39.9);
				      ctx.lineTo(45.5, 39.9);
				      ctx.lineTo(45.5, 13.5);
				      ctx.lineTo(47.4, 13.5);
				      ctx.lineTo(47.4, 11.7);
				      ctx.lineTo(41.7, 11.7);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(37.9, 39.9);
				      ctx.lineTo(36.1, 39.9);
				      ctx.lineTo(36.1, 30.5);
				      ctx.lineTo(34.2, 30.5);
				      ctx.lineTo(34.2, 24.9);
				      ctx.lineTo(28.6, 24.9);
				      ctx.lineTo(28.6, 13.5);
				      ctx.lineTo(32.3, 13.5);
				      ctx.lineTo(32.3, 15.5);
				      ctx.lineTo(34.2, 15.5);
				      ctx.lineTo(34.2, 24.9);
				      ctx.lineTo(37.9, 24.9);
				      ctx.lineTo(37.9, 13.5);
				      ctx.lineTo(36.1, 13.5);
				      ctx.lineTo(36.1, 11.7);
				      ctx.lineTo(11.6, 11.7);
				      ctx.lineTo(11.6, 15.5);
				      ctx.lineTo(13.5, 15.5);
				      ctx.lineTo(13.5, 13.5);
				      ctx.lineTo(15.4, 13.5);
				      ctx.lineTo(15.4, 15.5);
				      ctx.lineTo(17.2, 15.5);
				      ctx.lineTo(17.2, 39.9);
				      ctx.lineTo(15.4, 39.9);
				      ctx.lineTo(15.4, 41.8);
				      ctx.lineTo(21.0, 41.8);
				      ctx.lineTo(21.0, 39.9);
				      ctx.lineTo(19.2, 39.9);
				      ctx.lineTo(19.2, 15.5);
				      ctx.lineTo(21.0, 15.5);
				      ctx.lineTo(21.0, 13.5);
				      ctx.lineTo(22.9, 13.5);
				      ctx.lineTo(22.9, 15.5);
				      ctx.lineTo(24.8, 15.5);
				      ctx.lineTo(24.8, 13.5);
				      ctx.lineTo(26.7, 13.5);
				      ctx.lineTo(26.7, 39.9);
				      ctx.lineTo(24.8, 39.9);
				      ctx.lineTo(24.8, 41.8);
				      ctx.lineTo(30.4, 41.8);
				      ctx.lineTo(30.4, 39.9);
				      ctx.lineTo(28.6, 39.9);
				      ctx.lineTo(28.6, 26.7);
				      ctx.lineTo(30.4, 26.7);
				      ctx.lineTo(30.4, 28.7);
				      ctx.lineTo(32.3, 28.7);
				      ctx.lineTo(32.3, 38.0);
				      ctx.lineTo(34.2, 38.0);
				      ctx.lineTo(34.2, 41.8);
				      ctx.lineTo(39.8, 41.8);
				      ctx.lineTo(39.8, 38.0);
				      ctx.lineTo(37.9, 38.0);
				      ctx.lineTo(37.9, 39.9);
				      ctx.closePath();
				      ctx.fill();
				      ctx.restore();
						ctx.translate(-logoX, -45); 
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "mojang": case "minecraft": // done, needs review
					var thisRoomColor = '#95bb4c'; // done, needs review
					var thisShadowColor = '#56853d'; // not done, tictale logo
					var logo = function(logoX) {
						ctx.translate(logoX, 45);
				      // layer1/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(142.7, 5.8);
				      ctx.lineTo(142.7, 2.9);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(139.8, 0.0);
				      ctx.lineTo(5.8, 0.0);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(2.9, 2.9);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(0.0, 5.8);
				      ctx.lineTo(0.0, 46.6);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(2.9, 49.5);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(5.8, 52.4);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(119.4, 55.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(122.3, 58.2);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(125.2, 61.2);
				      ctx.lineTo(128.1, 61.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(131.0, 58.2);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(139.8, 52.4);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(142.7, 49.5);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(145.6, 46.6);
				      ctx.lineTo(145.6, 5.8);
				      ctx.lineTo(142.7, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(87, 87, 86)";
				      ctx.fill();

				      // layer1/Path
				      ctx.beginPath();
				      ctx.moveTo(139.8, 5.8);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(5.8, 5.8);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(5.8, 46.6);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(119.4, 49.5);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(122.3, 52.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(125.2, 55.4);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(128.1, 52.4);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(131.0, 49.5);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(139.8, 46.6);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(142.7, 5.8);
				      ctx.lineTo(139.8, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(255, 255, 255)";
				      ctx.fill();

				      // layer1/Compound Path
				      ctx.beginPath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(137.8, 20.7);
				      ctx.lineTo(137.8, 19.1);
				      ctx.lineTo(136.2, 19.1);
				      ctx.lineTo(136.2, 17.4);
				      ctx.lineTo(124.9, 17.4);
				      ctx.lineTo(124.9, 19.1);
				      ctx.lineTo(123.3, 19.1);
				      ctx.lineTo(123.3, 20.7);
				      ctx.lineTo(121.7, 20.7);
				      ctx.lineTo(121.7, 22.3);
				      ctx.lineTo(120.1, 22.3);
				      ctx.lineTo(120.1, 17.4);
				      ctx.lineTo(115.3, 17.4);
				      ctx.lineTo(115.3, 27.1);
				      ctx.lineTo(113.7, 27.1);
				      ctx.lineTo(113.7, 23.9);
				      ctx.lineTo(112.0, 23.9);
				      ctx.lineTo(112.0, 22.3);
				      ctx.lineTo(110.5, 22.3);
				      ctx.lineTo(110.5, 19.1);
				      ctx.lineTo(108.8, 19.1);
				      ctx.lineTo(108.8, 17.4);
				      ctx.lineTo(102.4, 17.4);
				      ctx.lineTo(102.4, 31.9);
				      ctx.lineTo(100.8, 31.9);
				      ctx.lineTo(100.8, 27.1);
				      ctx.lineTo(99.2, 27.1);
				      ctx.lineTo(99.2, 22.3);
				      ctx.lineTo(97.6, 22.3);
				      ctx.lineTo(97.6, 17.4);
				      ctx.lineTo(87.9, 17.4);
				      ctx.lineTo(87.9, 22.3);
				      ctx.lineTo(86.3, 22.3);
				      ctx.lineTo(86.3, 27.1);
				      ctx.lineTo(84.7, 27.1);
				      ctx.lineTo(84.7, 31.9);
				      ctx.lineTo(83.1, 31.9);
				      ctx.lineTo(83.1, 17.4);
				      ctx.lineTo(78.3, 17.4);
				      ctx.lineTo(78.3, 30.4);
				      ctx.lineTo(76.7, 30.4);
				      ctx.lineTo(76.7, 31.9);
				      ctx.lineTo(75.1, 31.9);
				      ctx.lineTo(75.1, 28.7);
				      ctx.lineTo(71.8, 28.7);
				      ctx.lineTo(71.8, 30.4);
				      ctx.lineTo(70.2, 30.4);
				      ctx.lineTo(70.2, 22.3);
				      ctx.lineTo(68.6, 22.3);
				      ctx.lineTo(68.6, 20.7);
				      ctx.lineTo(67.0, 20.7);
				      ctx.lineTo(67.0, 19.1);
				      ctx.lineTo(65.4, 19.1);
				      ctx.lineTo(65.4, 17.4);
				      ctx.lineTo(54.1, 17.4);
				      ctx.lineTo(54.1, 19.1);
				      ctx.lineTo(52.6, 19.1);
				      ctx.lineTo(52.6, 20.7);
				      ctx.lineTo(50.9, 20.7);
				      ctx.lineTo(50.9, 22.3);
				      ctx.lineTo(49.3, 22.3);
				      ctx.lineTo(49.3, 17.4);
				      ctx.lineTo(41.3, 17.4);
				      ctx.lineTo(41.3, 23.9);
				      ctx.lineTo(39.7, 23.9);
				      ctx.lineTo(39.7, 28.7);
				      ctx.lineTo(38.1, 28.7);
				      ctx.lineTo(38.1, 23.9);
				      ctx.lineTo(36.5, 23.9);
				      ctx.lineTo(36.5, 17.4);
				      ctx.lineTo(28.4, 17.4);
				      ctx.lineTo(28.4, 36.8);
				      ctx.lineTo(33.2, 36.8);
				      ctx.lineTo(33.2, 23.9);
				      ctx.lineTo(34.9, 23.9);
				      ctx.lineTo(34.9, 31.9);
				      ctx.lineTo(36.5, 31.9);
				      ctx.lineTo(36.5, 36.8);
				      ctx.lineTo(41.3, 36.8);
				      ctx.lineTo(41.3, 31.9);
				      ctx.lineTo(42.9, 31.9);
				      ctx.lineTo(42.9, 23.9);
				      ctx.lineTo(44.5, 23.9);
				      ctx.lineTo(44.5, 36.8);
				      ctx.lineTo(49.3, 36.8);
				      ctx.lineTo(49.3, 31.9);
				      ctx.lineTo(50.9, 31.9);
				      ctx.lineTo(50.9, 33.5);
				      ctx.lineTo(52.6, 33.5);
				      ctx.lineTo(52.6, 35.1);
				      ctx.lineTo(54.1, 35.1);
				      ctx.lineTo(54.1, 36.8);
				      ctx.lineTo(63.8, 36.8);
				      ctx.lineTo(63.8, 35.1);
				      ctx.lineTo(67.0, 35.1);
				      ctx.lineTo(67.0, 33.5);
				      ctx.lineTo(70.2, 33.5);
				      ctx.lineTo(70.2, 35.1);
				      ctx.lineTo(71.8, 35.1);
				      ctx.lineTo(71.8, 36.8);
				      ctx.lineTo(79.9, 36.8);
				      ctx.lineTo(79.9, 35.1);
				      ctx.lineTo(81.5, 35.1);
				      ctx.lineTo(81.5, 33.5);
				      ctx.lineTo(83.1, 33.5);
				      ctx.lineTo(83.1, 35.1);
				      ctx.lineTo(81.5, 35.1);
				      ctx.lineTo(81.5, 36.8);
				      ctx.lineTo(87.9, 36.8);
				      ctx.lineTo(87.9, 35.1);
				      ctx.lineTo(89.5, 35.1);
				      ctx.lineTo(89.5, 33.5);
				      ctx.lineTo(96.0, 33.5);
				      ctx.lineTo(96.0, 35.1);
				      ctx.lineTo(97.6, 35.1);
				      ctx.lineTo(97.6, 36.8);
				      ctx.lineTo(107.2, 36.8);
				      ctx.lineTo(107.2, 27.1);
				      ctx.lineTo(108.8, 27.1);
				      ctx.lineTo(108.8, 28.7);
				      ctx.lineTo(110.5, 28.7);
				      ctx.lineTo(110.5, 31.9);
				      ctx.lineTo(112.0, 31.9);
				      ctx.lineTo(112.0, 35.1);
				      ctx.lineTo(113.7, 35.1);
				      ctx.lineTo(113.7, 36.8);
				      ctx.lineTo(120.1, 36.8);
				      ctx.lineTo(120.1, 31.9);
				      ctx.lineTo(121.7, 31.9);
				      ctx.lineTo(121.7, 33.5);
				      ctx.lineTo(123.3, 33.5);
				      ctx.lineTo(123.3, 35.1);
				      ctx.lineTo(124.9, 35.1);
				      ctx.lineTo(124.9, 36.8);
				      ctx.lineTo(136.2, 36.8);
				      ctx.lineTo(136.2, 35.1);
				      ctx.lineTo(139.4, 35.1);
				      ctx.lineTo(139.4, 25.5);
				      ctx.lineTo(131.4, 25.5);
				      ctx.lineTo(131.4, 30.4);
				      ctx.lineTo(134.6, 30.4);
				      ctx.lineTo(134.6, 31.9);
				      ctx.lineTo(128.1, 31.9);
				      ctx.lineTo(128.1, 30.4);
				      ctx.lineTo(126.5, 30.4);
				      ctx.lineTo(126.5, 23.9);
				      ctx.lineTo(128.1, 23.9);
				      ctx.lineTo(128.1, 22.3);
				      ctx.lineTo(132.9, 22.3);
				      ctx.lineTo(132.9, 23.9);
				      ctx.lineTo(139.4, 23.9);
				      ctx.lineTo(139.4, 20.7);
				      ctx.lineTo(137.8, 20.7);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(57.4, 31.9);
				      ctx.lineTo(57.4, 30.4);
				      ctx.lineTo(55.8, 30.4);
				      ctx.lineTo(55.8, 23.9);
				      ctx.lineTo(57.4, 23.9);
				      ctx.lineTo(57.4, 22.3);
				      ctx.lineTo(62.2, 22.3);
				      ctx.lineTo(62.2, 23.9);
				      ctx.lineTo(63.8, 23.9);
				      ctx.lineTo(63.8, 30.4);
				      ctx.lineTo(62.2, 30.4);
				      ctx.lineTo(62.2, 31.9);
				      ctx.lineTo(57.4, 31.9);
				      ctx.closePath();

				      // layer1/Compound Path/Path
				      ctx.moveTo(91.1, 25.5);
				      ctx.lineTo(94.4, 25.5);
				      ctx.lineTo(94.4, 28.7);
				      ctx.lineTo(91.1, 28.7);
				      ctx.lineTo(91.1, 25.5);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(240, 134, 64)";
				      ctx.fill();

				      // layer1/Path
				      ctx.beginPath();
				      ctx.moveTo(23.6, 19.1);
				      ctx.lineTo(23.6, 17.4);
				      ctx.lineTo(7.5, 17.4);
				      ctx.lineTo(7.5, 19.1);
				      ctx.lineTo(5.9, 19.1);
				      ctx.lineTo(5.9, 35.1);
				      ctx.lineTo(7.5, 35.1);
				      ctx.lineTo(7.5, 36.8);
				      ctx.lineTo(23.6, 36.8);
				      ctx.lineTo(23.6, 35.1);
				      ctx.lineTo(25.2, 35.1);
				      ctx.lineTo(25.2, 19.1);
				      ctx.lineTo(23.6, 19.1);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(220, 79, 59)";
				      ctx.fill();

				      // layer1/Group

				      // layer1/Group/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(20.4, 23.9);
				      ctx.lineTo(20.4, 22.3);
				      ctx.lineTo(18.8, 22.3);
				      ctx.lineTo(18.8, 20.7);
				      ctx.lineTo(17.2, 20.7);
				      ctx.lineTo(17.2, 22.3);
				      ctx.lineTo(15.6, 22.3);
				      ctx.lineTo(15.6, 20.7);
				      ctx.lineTo(9.1, 20.7);
				      ctx.lineTo(9.1, 22.3);
				      ctx.lineTo(7.5, 22.3);
				      ctx.lineTo(7.5, 33.5);
				      ctx.lineTo(9.1, 33.5);
				      ctx.lineTo(9.1, 35.1);
				      ctx.lineTo(23.6, 35.1);
				      ctx.lineTo(23.6, 33.5);
				      ctx.lineTo(13.9, 33.5);
				      ctx.lineTo(13.9, 31.9);
				      ctx.lineTo(12.3, 31.9);
				      ctx.lineTo(12.3, 30.4);
				      ctx.lineTo(10.7, 30.4);
				      ctx.lineTo(10.7, 25.5);
				      ctx.lineTo(13.9, 25.5);
				      ctx.lineTo(13.9, 23.9);
				      ctx.lineTo(17.2, 23.9);
				      ctx.lineTo(17.2, 25.5);
				      ctx.lineTo(20.4, 25.5);
				      ctx.lineTo(20.4, 27.1);
				      ctx.lineTo(22.0, 27.1);
				      ctx.lineTo(22.0, 30.4);
				      ctx.lineTo(23.6, 30.4);
				      ctx.lineTo(23.6, 23.9);
				      ctx.lineTo(20.4, 23.9);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(255, 255, 255)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(22.0, 19.1);
				      ctx.lineTo(20.4, 19.1);
				      ctx.lineTo(20.4, 22.3);
				      ctx.lineTo(22.0, 22.3);
				      ctx.lineTo(22.0, 19.1);
				      ctx.closePath();
				      ctx.fill();
				      ctx.restore();
						ctx.translate(-logoX, -45);
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "wrapp":
					var thisRoomColor = '#fac746';
					var thisShadowColor = '#e7b842';
					var logo = function(logoX) {
						ctx.translate(logoX, 45); 
				      // layer1/Path
				      ctx.save();
				      ctx.beginPath();
				      ctx.moveTo(142.7, 5.8);
				      ctx.lineTo(142.7, 2.9);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(139.8, 0.0);
				      ctx.lineTo(5.8, 0.0);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(2.9, 2.9);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(0.0, 5.8);
				      ctx.lineTo(0.0, 46.6);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(2.9, 49.5);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(5.8, 52.4);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(119.4, 55.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(122.3, 58.2);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(125.2, 61.2);
				      ctx.lineTo(128.1, 61.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(131.0, 58.2);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(139.8, 52.4);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(142.7, 49.5);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(145.6, 46.6);
				      ctx.lineTo(145.6, 5.8);
				      ctx.lineTo(142.7, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(87, 87, 86)";
				      ctx.fill();

				      // layer1/Path
				      ctx.beginPath();
				      ctx.moveTo(139.8, 5.8);
				      ctx.lineTo(139.8, 2.9);
				      ctx.lineTo(5.8, 2.9);
				      ctx.lineTo(5.8, 5.8);
				      ctx.lineTo(2.9, 5.8);
				      ctx.lineTo(2.9, 46.6);
				      ctx.lineTo(5.8, 46.6);
				      ctx.lineTo(5.8, 49.5);
				      ctx.lineTo(119.4, 49.5);
				      ctx.lineTo(119.4, 52.4);
				      ctx.lineTo(122.3, 52.4);
				      ctx.lineTo(122.3, 55.4);
				      ctx.lineTo(125.2, 55.4);
				      ctx.lineTo(125.2, 58.2);
				      ctx.lineTo(128.1, 58.2);
				      ctx.lineTo(128.1, 52.4);
				      ctx.lineTo(131.0, 52.4);
				      ctx.lineTo(131.0, 49.5);
				      ctx.lineTo(139.8, 49.5);
				      ctx.lineTo(139.8, 46.6);
				      ctx.lineTo(142.7, 46.6);
				      ctx.lineTo(142.7, 5.8);
				      ctx.lineTo(139.8, 5.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(255, 255, 255)";
				      ctx.fill();

				      // layer1/Group

				      // layer1/Group/Compound Path
				      ctx.save();
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(133.4, 22.0);
				      ctx.lineTo(133.4, 19.9);
				      ctx.lineTo(131.4, 19.9);
				      ctx.lineTo(131.4, 17.9);
				      ctx.lineTo(127.3, 17.9);
				      ctx.lineTo(127.3, 19.9);
				      ctx.lineTo(125.2, 19.9);
				      ctx.lineTo(125.2, 17.9);
				      ctx.lineTo(121.2, 17.9);
				      ctx.lineTo(121.2, 22.0);
				      ctx.lineTo(119.1, 22.0);
				      ctx.lineTo(119.1, 19.9);
				      ctx.lineTo(117.1, 19.9);
				      ctx.lineTo(117.1, 17.9);
				      ctx.lineTo(113.0, 17.9);
				      ctx.lineTo(113.0, 19.9);
				      ctx.lineTo(110.9, 19.9);
				      ctx.lineTo(110.9, 17.9);
				      ctx.lineTo(106.8, 17.9);
				      ctx.lineTo(106.8, 44.5);
				      ctx.lineTo(110.9, 44.5);
				      ctx.lineTo(110.9, 38.3);
				      ctx.lineTo(113.0, 38.3);
				      ctx.lineTo(113.0, 40.4);
				      ctx.lineTo(117.1, 40.4);
				      ctx.lineTo(117.1, 38.3);
				      ctx.lineTo(119.1, 38.3);
				      ctx.lineTo(119.1, 36.3);
				      ctx.lineTo(121.2, 36.3);
				      ctx.lineTo(121.2, 44.5);
				      ctx.lineTo(125.2, 44.5);
				      ctx.lineTo(125.2, 38.3);
				      ctx.lineTo(127.3, 38.3);
				      ctx.lineTo(127.3, 40.4);
				      ctx.lineTo(131.4, 40.4);
				      ctx.lineTo(131.4, 38.3);
				      ctx.lineTo(133.4, 38.3);
				      ctx.lineTo(133.4, 36.3);
				      ctx.lineTo(135.5, 36.3);
				      ctx.lineTo(135.5, 22.0);
				      ctx.lineTo(133.4, 22.0);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(131.4, 34.3);
				      ctx.lineTo(125.2, 34.3);
				      ctx.lineTo(125.2, 24.1);
				      ctx.lineTo(131.4, 24.1);
				      ctx.lineTo(131.4, 34.3);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(110.9, 34.3);
				      ctx.lineTo(110.9, 24.1);
				      ctx.lineTo(115.0, 24.1);
				      ctx.lineTo(115.0, 34.3);
				      ctx.lineTo(110.9, 34.3);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(0, 0, 0)";
				      ctx.fill();

				      // layer1/Group/Compound Path
				      ctx.beginPath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(102.7, 19.9);
				      ctx.lineTo(100.7, 19.9);
				      ctx.lineTo(100.7, 17.9);
				      ctx.lineTo(94.5, 17.9);
				      ctx.lineTo(94.5, 19.9);
				      ctx.lineTo(92.5, 19.9);
				      ctx.lineTo(92.5, 22.0);
				      ctx.lineTo(90.5, 22.0);
				      ctx.lineTo(90.5, 17.9);
				      ctx.lineTo(86.3, 17.9);
				      ctx.lineTo(86.3, 19.9);
				      ctx.lineTo(84.3, 19.9);
				      ctx.lineTo(84.3, 17.9);
				      ctx.lineTo(80.2, 17.9);
				      ctx.lineTo(80.2, 38.3);
				      ctx.lineTo(84.3, 38.3);
				      ctx.lineTo(84.3, 26.1);
				      ctx.lineTo(86.3, 26.1);
				      ctx.lineTo(86.3, 24.1);
				      ctx.lineTo(90.5, 24.1);
				      ctx.lineTo(90.5, 26.1);
				      ctx.lineTo(96.6, 26.1);
				      ctx.lineTo(96.6, 22.0);
				      ctx.lineTo(98.6, 22.0);
				      ctx.lineTo(98.6, 28.1);
				      ctx.lineTo(92.5, 28.1);
				      ctx.lineTo(92.5, 30.2);
				      ctx.lineTo(90.5, 30.2);
				      ctx.lineTo(90.5, 36.3);
				      ctx.lineTo(92.5, 36.3);
				      ctx.lineTo(92.5, 38.3);
				      ctx.lineTo(98.6, 38.3);
				      ctx.lineTo(98.6, 36.3);
				      ctx.lineTo(100.7, 36.3);
				      ctx.lineTo(100.7, 38.3);
				      ctx.lineTo(104.7, 38.3);
				      ctx.lineTo(104.7, 22.0);
				      ctx.lineTo(102.7, 22.0);
				      ctx.lineTo(102.7, 19.9);
				      ctx.closePath();

				      // layer1/Group/Compound Path/Path
				      ctx.moveTo(94.5, 34.3);
				      ctx.lineTo(94.5, 30.2);
				      ctx.lineTo(98.6, 30.2);
				      ctx.lineTo(98.6, 34.3);
				      ctx.lineTo(94.5, 34.3);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(80.2, 11.7);
				      ctx.lineTo(74.0, 11.7);
				      ctx.lineTo(74.0, 15.8);
				      ctx.lineTo(72.0, 15.8);
				      ctx.lineTo(72.0, 22.0);
				      ctx.lineTo(70.0, 22.0);
				      ctx.lineTo(70.0, 13.8);
				      ctx.lineTo(67.9, 13.8);
				      ctx.lineTo(67.9, 11.7);
				      ctx.lineTo(65.9, 11.7);
				      ctx.lineTo(65.9, 13.8);
				      ctx.lineTo(63.8, 13.8);
				      ctx.lineTo(63.8, 22.0);
				      ctx.lineTo(61.8, 22.0);
				      ctx.lineTo(61.8, 15.8);
				      ctx.lineTo(59.7, 15.8);
				      ctx.lineTo(59.7, 11.7);
				      ctx.lineTo(53.6, 11.7);
				      ctx.lineTo(53.6, 17.9);
				      ctx.lineTo(55.6, 17.9);
				      ctx.lineTo(55.6, 26.1);
				      ctx.lineTo(57.7, 26.1);
				      ctx.lineTo(57.7, 36.3);
				      ctx.lineTo(59.7, 36.3);
				      ctx.lineTo(59.7, 38.3);
				      ctx.lineTo(63.8, 38.3);
				      ctx.lineTo(63.8, 30.2);
				      ctx.lineTo(65.9, 30.2);
				      ctx.lineTo(65.9, 28.1);
				      ctx.lineTo(67.9, 28.1);
				      ctx.lineTo(67.9, 30.2);
				      ctx.lineTo(70.0, 30.2);
				      ctx.lineTo(70.0, 38.3);
				      ctx.lineTo(74.0, 38.3);
				      ctx.lineTo(74.0, 36.3);
				      ctx.lineTo(76.1, 36.3);
				      ctx.lineTo(76.1, 26.1);
				      ctx.lineTo(78.1, 26.1);
				      ctx.lineTo(78.1, 17.9);
				      ctx.lineTo(80.2, 17.9);
				      ctx.lineTo(80.2, 11.7);
				      ctx.closePath();
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(38.2, 9.8);
				      ctx.lineTo(38.2, 7.8);
				      ctx.lineTo(23.9, 7.8);
				      ctx.lineTo(23.9, 9.8);
				      ctx.lineTo(9.6, 9.8);
				      ctx.lineTo(9.6, 20.0);
				      ctx.lineTo(11.6, 20.0);
				      ctx.lineTo(11.6, 26.1);
				      ctx.lineTo(11.6, 36.4);
				      ctx.lineTo(15.7, 36.4);
				      ctx.lineTo(15.7, 38.4);
				      ctx.lineTo(19.8, 38.4);
				      ctx.lineTo(19.8, 40.4);
				      ctx.lineTo(23.9, 40.4);
				      ctx.lineTo(23.9, 42.5);
				      ctx.lineTo(28.0, 42.5);
				      ctx.lineTo(28.0, 44.6);
				      ctx.lineTo(32.1, 44.6);
				      ctx.lineTo(32.1, 42.5);
				      ctx.lineTo(36.1, 42.5);
				      ctx.lineTo(36.1, 40.4);
				      ctx.lineTo(42.3, 40.4);
				      ctx.lineTo(42.3, 38.4);
				      ctx.lineTo(44.3, 38.4);
				      ctx.lineTo(44.3, 36.4);
				      ctx.lineTo(48.4, 36.4);
				      ctx.lineTo(48.4, 20.0);
				      ctx.lineTo(50.4, 20.0);
				      ctx.lineTo(50.4, 9.8);
				      ctx.lineTo(38.2, 9.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(236, 236, 236)";
				      ctx.fill();

				      // layer1/Group/Path
				      ctx.beginPath();
				      ctx.moveTo(44.3, 9.8);
				      ctx.lineTo(44.3, 13.8);
				      ctx.lineTo(42.3, 13.8);
				      ctx.lineTo(42.3, 24.1);
				      ctx.lineTo(40.2, 24.1);
				      ctx.lineTo(40.2, 30.3);
				      ctx.lineTo(38.2, 30.3);
				      ctx.lineTo(38.2, 24.1);
				      ctx.lineTo(36.1, 24.1);
				      ctx.lineTo(36.1, 18.0);
				      ctx.lineTo(34.1, 18.0);
				      ctx.lineTo(34.1, 7.8);
				      ctx.lineTo(28.0, 7.8);
				      ctx.lineTo(28.0, 11.8);
				      ctx.lineTo(25.9, 11.8);
				      ctx.lineTo(25.9, 22.1);
				      ctx.lineTo(23.9, 22.1);
				      ctx.lineTo(23.9, 28.1);
				      ctx.lineTo(19.8, 28.1);
				      ctx.lineTo(19.8, 22.1);
				      ctx.lineTo(17.7, 22.1);
				      ctx.lineTo(17.7, 9.8);
				      ctx.lineTo(9.6, 9.8);
				      ctx.lineTo(9.6, 20.0);
				      ctx.lineTo(11.6, 20.0);
				      ctx.lineTo(11.6, 20.0);
				      ctx.lineTo(11.6, 26.1);
				      ctx.lineTo(13.7, 26.1);
				      ctx.lineTo(13.7, 30.3);
				      ctx.lineTo(15.7, 30.3);
				      ctx.lineTo(15.7, 38.4);
				      ctx.lineTo(19.8, 38.4);
				      ctx.lineTo(19.8, 40.4);
				      ctx.lineTo(25.9, 40.4);
				      ctx.lineTo(25.9, 34.3);
				      ctx.lineTo(28.0, 34.3);
				      ctx.lineTo(28.0, 30.3);
				      ctx.lineTo(30.0, 30.3);
				      ctx.lineTo(30.0, 28.1);
				      ctx.lineTo(32.1, 28.1);
				      ctx.lineTo(32.1, 34.3);
				      ctx.lineTo(34.1, 34.3);
				      ctx.lineTo(34.1, 38.4);
				      ctx.lineTo(36.1, 38.4);
				      ctx.lineTo(36.1, 40.4);
				      ctx.lineTo(42.3, 40.4);
				      ctx.lineTo(42.3, 38.4);
				      ctx.lineTo(44.3, 38.4);
				      ctx.lineTo(44.3, 34.3);
				      ctx.lineTo(46.4, 34.3);
				      ctx.lineTo(46.4, 24.1);
				      ctx.lineTo(48.4, 24.1);
				      ctx.lineTo(48.4, 20.0);
				      ctx.lineTo(50.4, 20.0);
				      ctx.lineTo(50.4, 9.8);
				      ctx.lineTo(44.3, 9.8);
				      ctx.closePath();
				      ctx.fillStyle = "rgb(252, 202, 77)";
				      ctx.fill();
				      ctx.restore();
						ctx.translate(-logoX, -45); 
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				case "knape":
					var thisRoomColor = '1b70b9';
					var thisShadowColor = '124774';
					var logo = function(logoX) {
						ctx.translate(logoX, 45);
						// layer1/Group/Compound Path
						ctx.save();
						ctx.beginPath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(0.0, 0.0);
						ctx.lineTo(0.0, 53.3);
						ctx.lineTo(143.1, 53.3);
						ctx.lineTo(143.1, 0.0);
						ctx.lineTo(0.0, 0.0);
						ctx.closePath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(8.3, 49.9);
						ctx.lineTo(3.3, 49.9);
						ctx.lineTo(3.3, 45.0);
						ctx.lineTo(8.3, 45.0);
						ctx.lineTo(8.3, 49.9);
						ctx.closePath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(8.3, 8.3);
						ctx.lineTo(3.3, 8.3);
						ctx.lineTo(3.3, 3.3);
						ctx.lineTo(8.3, 3.3);
						ctx.lineTo(8.3, 8.3);
						ctx.closePath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(139.7, 49.9);
						ctx.lineTo(134.8, 49.9);
						ctx.lineTo(134.8, 45.0);
						ctx.lineTo(139.7, 45.0);
						ctx.lineTo(139.7, 49.9);
						ctx.closePath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(139.7, 8.3);
						ctx.lineTo(134.8, 8.3);
						ctx.lineTo(134.8, 3.3);
						ctx.lineTo(139.7, 3.3);
						ctx.lineTo(139.7, 8.3);
						ctx.closePath();
						ctx.fillStyle = "rgb(255, 255, 255)";
						ctx.fill();

						// layer1/Group/Group

						// layer1/Group/Group/Path
						ctx.save();
						ctx.beginPath();
						ctx.moveTo(134.8, 3.3);
						ctx.lineTo(134.8, 8.3);
						ctx.lineTo(139.7, 8.3);
						ctx.lineTo(139.7, 3.3);
						ctx.lineTo(134.8, 3.3);
						ctx.closePath();
						ctx.fillStyle = "rgb(0, 0, 0)";
						ctx.fill();

						// layer1/Group/Group/Path
						ctx.beginPath();
						ctx.moveTo(134.8, 45.0);
						ctx.lineTo(134.8, 49.9);
						ctx.lineTo(139.7, 49.9);
						ctx.lineTo(139.7, 45.0);
						ctx.lineTo(134.8, 45.0);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Group/Path
						ctx.beginPath();
						ctx.moveTo(3.3, 45.0);
						ctx.lineTo(3.3, 49.9);
						ctx.lineTo(8.3, 49.9);
						ctx.lineTo(8.3, 45.0);
						ctx.lineTo(3.3, 45.0);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Group/Path
						ctx.beginPath();
						ctx.moveTo(3.3, 3.3);
						ctx.lineTo(3.3, 8.3);
						ctx.lineTo(8.3, 8.3);
						ctx.lineTo(8.3, 3.3);
						ctx.lineTo(3.3, 3.3);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.restore();
						ctx.beginPath();
						ctx.moveTo(125.0, 6.5);
						ctx.lineTo(125.0, 43.9);
						ctx.lineTo(133.5, 43.9);
						ctx.lineTo(133.5, 6.5);
						ctx.lineTo(125.0, 6.5);
						ctx.closePath();
						ctx.fillStyle = "rgb(249, 191, 8)";
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(113.4, 18.0);
						ctx.lineTo(113.4, 43.9);
						ctx.lineTo(122.0, 43.9);
						ctx.lineTo(122.0, 18.0);
						ctx.lineTo(113.4, 18.0);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(113.4, 9.4);
						ctx.lineTo(113.4, 15.2);
						ctx.lineTo(122.0, 15.2);
						ctx.lineTo(122.0, 9.4);
						ctx.lineTo(113.4, 9.4);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Compound Path
						ctx.beginPath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(107.7, 18.0);
						ctx.lineTo(104.8, 18.0);
						ctx.lineTo(104.8, 15.2);
						ctx.lineTo(93.3, 15.2);
						ctx.lineTo(93.3, 18.0);
						ctx.lineTo(90.5, 18.0);
						ctx.lineTo(90.5, 23.8);
						ctx.lineTo(99.1, 23.8);
						ctx.lineTo(99.1, 26.6);
						ctx.lineTo(87.6, 26.6);
						ctx.lineTo(87.6, 43.9);
						ctx.lineTo(99.1, 43.9);
						ctx.lineTo(99.1, 40.9);
						ctx.lineTo(104.8, 40.9);
						ctx.lineTo(104.8, 43.9);
						ctx.lineTo(110.6, 43.9);
						ctx.lineTo(110.6, 20.8);
						ctx.lineTo(107.7, 20.8);
						ctx.lineTo(107.7, 18.0);
						ctx.closePath();

						// layer1/Group/Compound Path/Path
						ctx.moveTo(96.2, 38.1);
						ctx.lineTo(93.3, 38.1);
						ctx.lineTo(93.3, 32.5);
						ctx.lineTo(99.1, 32.5);
						ctx.lineTo(99.1, 35.3);
						ctx.lineTo(96.2, 35.3);
						ctx.lineTo(96.2, 38.1);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(78.8, 18.0);
						ctx.lineTo(78.8, 12.3);
						ctx.lineTo(73.0, 12.3);
						ctx.lineTo(73.0, 15.2);
						ctx.lineTo(70.1, 15.2);
						ctx.lineTo(70.1, 18.0);
						ctx.lineTo(67.3, 18.0);
						ctx.lineTo(67.3, 23.8);
						ctx.lineTo(70.1, 23.8);
						ctx.lineTo(70.1, 40.9);
						ctx.lineTo(73.0, 40.9);
						ctx.lineTo(73.0, 43.9);
						ctx.lineTo(84.5, 43.9);
						ctx.lineTo(84.5, 38.1);
						ctx.lineTo(81.7, 38.1);
						ctx.lineTo(81.7, 35.3);
						ctx.lineTo(78.8, 35.3);
						ctx.lineTo(78.8, 23.8);
						ctx.lineTo(87.4, 23.8);
						ctx.lineTo(87.4, 18.0);
						ctx.lineTo(78.8, 18.0);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(64.4, 38.1);
						ctx.lineTo(55.8, 38.1);
						ctx.lineTo(55.8, 35.3);
						ctx.lineTo(52.9, 35.3);
						ctx.lineTo(52.9, 26.6);
						ctx.lineTo(58.6, 26.6);
						ctx.lineTo(58.6, 23.8);
						ctx.lineTo(64.4, 23.8);
						ctx.lineTo(64.4, 18.0);
						ctx.lineTo(50.1, 18.0);
						ctx.lineTo(50.1, 20.8);
						ctx.lineTo(47.2, 20.8);
						ctx.lineTo(47.2, 23.8);
						ctx.lineTo(44.3, 23.8);
						ctx.lineTo(44.3, 38.1);
						ctx.lineTo(47.2, 38.1);
						ctx.lineTo(47.2, 40.9);
						ctx.lineTo(50.1, 40.9);
						ctx.lineTo(50.1, 43.9);
						ctx.lineTo(67.3, 43.9);
						ctx.lineTo(67.3, 35.3);
						ctx.lineTo(64.4, 35.3);
						ctx.lineTo(64.4, 38.1);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(32.8, 18.0);
						ctx.lineTo(32.8, 43.9);
						ctx.lineTo(41.4, 43.9);
						ctx.lineTo(41.4, 18.0);
						ctx.lineTo(32.8, 18.0);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(32.8, 9.4);
						ctx.lineTo(32.8, 15.2);
						ctx.lineTo(41.4, 15.2);
						ctx.lineTo(41.4, 9.4);
						ctx.lineTo(32.8, 9.4);
						ctx.closePath();
						ctx.fill();

						// layer1/Group/Path
						ctx.beginPath();
						ctx.moveTo(9.8, 9.4);
						ctx.lineTo(9.8, 18.0);
						ctx.lineTo(15.6, 18.0);
						ctx.lineTo(15.6, 43.9);
						ctx.lineTo(24.2, 43.9);
						ctx.lineTo(24.2, 18.0);
						ctx.lineTo(29.9, 18.0);
						ctx.lineTo(29.9, 9.4);
						ctx.lineTo(9.8, 9.4);
						ctx.closePath();
						ctx.fill();
						ctx.restore(); // almost done, correct logo
						ctx.translate(-logoX, -45);
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
					break;
				default:
					var thisRoomColor = '1b70b9';
					var thisShadowColor = '124774';
					var logo = function() {
						console.log('default')
					}
					all.all(text, user, imgURL, thisRoomColor, thisShadowColor, logo);
			};
			
			floorHeightStart = floorHeightStart - floorHeight;
			endPoint = floorHeightStart + floorHeight;
		};
		partyname = party
		roof.all(partyname);
		
		return;

	};



	//Populate this function with all the functions we want to draw
	function init() {

		//writeMessage();
		drawObj();

	}