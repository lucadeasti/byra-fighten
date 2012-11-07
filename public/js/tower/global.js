window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var background = document.getElementById('background');
var ctx_background = background.getContext('2d');

var cloud = document.getElementById('cloud');
var ctx_cloud = cloud.getContext('2d');

//Global var
var floorHeight = 200; // Height of each floor
var floorWidth = 536; // Width of each floor 

var weatherText = 'Mostly Cloudy'; //backup!!!

var currentTime = new Date();
var day = currentTime.getHours();
var month = currentTime.getMonth();
var monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
var thisMonth = monthArr[month]
console.log(thisMonth)

//23 is the max for iphone and ipad
function global(data) {
	if (floors.length >= 159) {
		objects = 159;
	} else {
		objects = floors.length;;
	}

	canvas.width = $(window).width();
	canvas.height = objects * floorHeight + 600;
	cloud.width = $(window).width();
	cloud.height = objects * floorHeight + 600;

	background.width = canvas.width;
	background.height = objects * floorHeight + 600;
	body = objects * floorHeight + 600;
	canvasWidth = canvas.width;
	canvasHeight = body;

	StartHeight = canvasHeight - floorHeight +100;
	floorHeightStart = canvasHeight - floorHeight - 240;
	floorWidthStart = canvasWidth / 2 - floorWidth / 2;
	endPoint = floorHeightStart + floorHeight;

};

function clouds (animateFrame) {
	animateFrame = animateFrame + 50;
	// Calculate the weather and apply right effect to the background
	// if the weather is Mostly cloudy or cloudy (light rain will move) do this
	if (weatherText === 'Mostly Cloudy' || weatherText === 'cloudy' || weatherText === 'Light Rain') {
		if (8 < day && day < 22 ) {
			ctx_background.fillStyle = "rgba(102, 153, 255, 1)"; // add a blue background
			ctx_background.fillRect(0, 0, canvasWidth, cloud.height); // and fill it
			for (i=1; i < objects * 3; i++) { // the amount of clouds will be floors * 3
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				// dont do clouds at the bottom (grass and trees will be placed there)
				var startY = Math.floor((Math.random()*cloud.height - 400)+1);
				if (i % 2) {
					cloud1(startX, startY);
				} else if (i % 8 && i % 5) {
					cloud2(startX, startY);
				} else {
					cloud3(startX, startY);
				}
		    sun(250,250);
			};
		} else { // load night stuff
			ctx_background.fillStyle = "rgba(13, 0, 43, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			for (i=1; i < (objects * 3); i++) {
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				var startY = Math.floor((Math.random()*cloud.height - 300)+1);
				if (i % 5) {
					nightCloud1(startX, startY);
				} else if (i % 8 && i % 2) {
					nightCloud2(startX, startY);
				} else {
					nightCloud3(startX, startY);
				};
			};
			for (g=1; g < 20; g++) {
				var ghostX = Math.floor((Math.random()*canvasWidth)+1);
				var ghostY = Math.floor((Math.random()*cloud.height - 400)+1);
				ghost(ghostX,ghostY);
			};
		};
	} else if (weatherText === 'Partly Cloudy' || weatherText === 'Fair' ) {
		if (8 < day && day < 22 ) {
			ctx_background.fillStyle = "rgba(102, 153, 255, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, cloud.height);
			for (i=1; i < objects * 2; i++) {
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				var startY = Math.floor((Math.random()*cloud.height - 400)+1);
				if (i % 2) {
					cloud1(startX, startY);
				} else if (i % 8 && i % 5) {
					cloud2(startX, startY);
				} else {
					cloud3(startX, startY);
				}
				sun(250,250);
			};
		} else { // load night stuff
			ctx_background.fillStyle = "rgba(13, 0, 43, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			for (i=1; i < (objects * 3); i++) {
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				var startY = Math.floor((Math.random()*cloud.height - 300)+1);
				if (i % 2) {
					nightCloud1(startX, startY);
				} else if (i % 8 && i % 5) {
					nightCloud2(startX, startY);
				} else {
					nightCloud3(startX, startY);
				};
			};
			for (g=1; g < 20; g++) {
				var ghostX = Math.floor((Math.random()*canvasWidth)+1);
				var ghostY = Math.floor((Math.random()*cloud.height - 400)+1);
				ghost(ghostX,ghostY);
			};
		};
	} else if (weatherText === 'sunny') {
		if (8 < day && day < 22 ) {
			ctx_background.fillStyle = "rgba(133, 180, 255, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			sun(250,250);
		} else { // load night stuff
			ctx_background.fillStyle = "rgba(13, 0, 43, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			for (i=1; i < (objects * 3); i++) {
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				var startY = Math.floor((Math.random()*cloud.height - 300)+1);
				if (i % 2) {
					nightCloud1(startX, startY);
				} else if (i % 8 && i % 5) {
					nightCloud2(startX, startY);
				} else {
					nightCloud3(startX, startY);
				};
			};
			for (g=1; g < 20; g++) {
				var ghostX = Math.floor((Math.random()*canvasWidth)+1);
				var ghostY = Math.floor((Math.random()*cloud.height - 400)+1);
				ghost(ghostX,ghostY);
			};
		};
	} else if (weatherText === 'winter') {
		if (8 < day && day < 22 ) {
			ctx_background.fillStyle = "rgba(133, 180, 255, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			for (i=1; i < objects * 2; i++) { // the amount of clouds will be floors * 3
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				// dont do clouds at the bottom (grass and trees will be placed there)
				var startuptY = Math.floor((Math.random()*cloud.height - 400)+1);
				snowCloud(startX, startY);
			};
			for (i=250;i<1000;i++) {
				if (i < 500) {
	    		sun(i,250);
	    	} else {
	    		sun(250,250)
	    	}
	    }
		} else { // load night stuff
			ctx_background.fillStyle = "rgba(13, 0, 43, 1)";
			ctx_background.fillRect(0, 0, canvasWidth, body);
			for (i=1; i < (objects * 3); i++) {
				//need a better random function
				var startX = Math.floor((Math.random()*canvasWidth)+1);
				var startY = Math.floor((Math.random()*cloud.height - 300)+1);
				if (i % 2) {
					nightCloud1(startX, startY);
				} else if (i % 8 && i % 5) {
					nightCloud2(startX, startY);
				} else {
					nightCloud3(startX, startY);
				};
			};
			for (g=1; g < 20; g++) {
				var ghostX = Math.floor((Math.random()*canvasWidth)+1);
				var ghostY = Math.floor((Math.random()*cloud.height - 400)+1);
				ghost(ghostX,ghostY);
			};
		};
	} else {
		console.log('new weather: ' + weatherText);
		ctx_background.fillStyle = "rgba(133, 180, 255, 1)";
		ctx_background.fillRect(0, 0, canvasWidth, body);
	};
};

function walls () { // gets objects from outdoor.js

	leftWall = floorWidthStart - 20;
	rightWall = floorWidthStart + floorWidth;

	for(w=160; w <=(objects * 200) + 560; w = w + 20) {
			 wall(leftWall, w)
			 wall(rightWall, w)
	}

}

function ground () { // gets objects from outdoor.js
	for (i=0;i<	background.width;i = i + 50) {
		if (weatherText === 'winter') {
		grassWinter(i);
	} else {
		grass(i);
	}
	}
}