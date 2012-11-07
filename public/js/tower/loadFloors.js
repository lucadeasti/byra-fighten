// ---------------------------------------------
// ------- Create arrays for functions ---------
// ---------------------------------------------

//push to array if new function is created?
//Array for Person
var randomHeadArr = [headNr1, headNr2, headNr3, headNr4, headNr5];
var randomBodyArr = [bodyNr1, bodyNr2, bodyNr3, bodyNr4, bodyNr5];
var randomfeetArr = [feetNr1, feetNr2];

//Array for doors
var randomdoorArr = [doorNr1, doorNr2];

//Array for chairs or computer table
var randomMainObjectArr = [mainObjectNr1, mainObjectNr2];

//Array for Lamps or bookshelf
var randomSecondObjectArr = [SecondObjectNr1, SecondObjectNr2, SecondObjectNr3, SecondObjectNr4];

//array for random wall objects, eg. frames, clock, tv etc
var randomWallObjectArr = [wallObjectNr1, wallObjectNr2, wallObjectNr3];

//Define the room for each company
//ctx translate needs to go somewher!!!
var CompanyRoom = function() {
  this.roomColor = function (thisRoomColor) {
  	ctx.beginPath();
  	ctx.rect(0, 0, 536, 200);
		ctx.fillStyle = thisRoomColor;
		ctx.fill();
  };

  this.lobbyColor = function () {
  	ctx.beginPath();
  	ctx.rect(0, 0, 536, 200);
		ctx.fillStyle = 'rgb(198, 198, 198)';
		ctx.fill();
  };

  this.roofColor = function () {
  	ctx.beginPath();
  	ctx.rect(0, 0, 536, 200);
		ctx.fillStyle = 'rgb(181, 0, 26)';
		ctx.fill();
  };

  this.roomShadow = function (thisShadowColor) {
		ctx.beginPath();
		ctx.moveTo(0, 0)
		ctx.lineTo(floorWidth, 0);
		ctx.lineTo(floorWidth, 30);
		ctx.lineTo(30, 30);
		ctx.lineTo(30, floorHeight);
		ctx.lineTo(0, floorHeight);
		ctx.closePath();
		ctx.fillStyle = thisShadowColor;
		ctx.fill();
  };

  this.lobbyShadow = function () {
		ctx.beginPath();
		ctx.moveTo(0, 0)
		ctx.lineTo(floorWidth, 0);
		ctx.lineTo(floorWidth, 30);
		ctx.lineTo(30, 30);
		ctx.lineTo(30, floorHeight);
		ctx.lineTo(0, floorHeight);
		ctx.closePath();
		ctx.fillStyle = 'rgb(117, 117, 117)';
		ctx.fill();
  };

  this.roofShadow = function () {
		ctx.beginPath();
		ctx.moveTo(0, 0)
		ctx.lineTo(floorWidth, 0);
		ctx.lineTo(floorWidth, 30);
		ctx.lineTo(30, 30);
		ctx.lineTo(30, floorHeight);
		ctx.lineTo(0, floorHeight);
		ctx.closePath();
		ctx.fillStyle = 'rgb(135, 0, 20)';
		ctx.fill();
  };

  this.roof = function() {
  	ctx.beginPath();
		ctx.rect(0, 0, floorWidth, 15);
		ctx.fillStyle = "#88694b";
		ctx.fill();
		ctx.beginPath();
		ctx.rect(0, 3, floorWidth, 4);
		ctx.fillStyle = "#6b5338";
		ctx.fill();
  }; // create the roof

  this.floor = function() {
	  ctx.beginPath();
	  ctx.rect(0, 3, floorWidth, 4);
	  ctx.fillStyle = "#6b5338";
	  ctx.fill();

	  //draw the floor
	  ctx.beginPath();
	  ctx.rect(0, 192, floorWidth, 8);
	  ctx.fillStyle = "#583c35";
	  ctx.fill();

	  ctx.beginPath();
	  for (i = 0; i <= 520; i=i+20) {
	    ctx.rect(0 + i, 192, 4, 8);
	  };
	  ctx.fillStyle = "#3e2015";
	  ctx.fill();
  }; // creates the floor

  this.roomAll = function (thisRoomColor, thisShadowColor) {
  	return this.roomColor(thisRoomColor) + this.roomShadow(thisShadowColor) + this.roof() + this.floor();
  }

  this.lobbyAll = function () {
  	return this.lobbyColor() + this.lobbyShadow() + this.roof() + this.floor();
  }

  this.roofAll = function () {
  	return this.roofColor() + this.roofShadow() + this.roof() + this.floor();
  }
}

//Generate a unique room (the objects inside the room)
var RoomObjects = function() {
	// Code for each object eg.
	this.door = function(doorX) {
		var randomdoorIndex = Math.floor(Math.random() * randomdoorArr.length);
    ctx.translate(doorX, 54);
		randomdoorArr[randomdoorIndex]();
    ctx.translate(-doorX, -54);
	};

	this.lobbyDoor = function(doorX) {
    ctx.translate(doorX, 54);
		randomdoorArr[0]();
    ctx.translate(-doorX, -54);
	};

	this.mainObject = function (mainX) {
		var randomMainObjectIndex = Math.floor(Math.random() * randomMainObjectArr.length);
    ctx.translate(mainX, 97);
    randomMainObjectArr[randomMainObjectIndex]();
    ctx.translate(-mainX, -97);    
  };
	this.secondObject = function(secondX) {
    var randomSecondObjectIndex = Math.floor(Math.random() * randomSecondObjectArr.length);
    ctx.translate(secondX, 104);
    randomSecondObjectArr[randomSecondObjectIndex]();
    ctx.translate(-secondX, -104);  
  };
	this.wallObject = function (wallX) {
		var randomWallObjectIndex = Math.floor(Math.random() * randomWallObjectArr.length);
    ctx.translate(wallX, 50);
    randomWallObjectArr[randomWallObjectIndex]();
    ctx.translate(-wallX, -50);  
  };

  this.roofParty = function (party) {
		ctx.fillStyle = "blue";
  	ctx.font = "bold 16px Arial";
  	ctx.fillText(party[0].title, 50, 50);
  	console.log(party[0])
  };

  this.allObjects = function (logoFrom) {
  	//console.log(logoFrom)
    var i = Math.floor((Math.random() * 3) + 1);
    if (i == 1) {
      return this.door(210) + logoFrom(50) + this.wallObject(350) + this.mainObject(330) + this.secondObject(40);
    } else if (i == 2) {
      return this.door(400) + logoFrom(200) + this.wallObject(30) + this.mainObject(70) + this.secondObject(300);
    } else {
     return this.door(250) + logoFrom(350) + this.wallObject(40) + this.mainObject(400) + this.secondObject(60);
    }
  };
  this.lobbyObjects = function () {
  	return this.lobbyDoor(210)+ this.wallObject(350) + this.wallObject(50);
  };
  this.roofObjects = function (party) {
  	return this.door(210) + this.wallObject(350) + this.mainObject(330) + this.secondObject(40) + this.roofParty(party);
  };
}

function Person() {

	var skinColor = ['#f3d9be', '#eecaa5', '#e2bb93']
	var randomSkinColor = Math.floor(Math.random() * skinColor.length);

	this.feet = function (foo) {
		var randomfeetIndex = Math.floor(Math.random() * randomfeetArr.length); 
		var randomHex1 = "#" + Math.random().toString(16).slice(2, 8);
		var randomHex2 = "#" + Math.random().toString(16).slice(2, 8);
		ctx.translate(foo, 170);
		randomfeetArr[randomfeetIndex](randomHex1, randomHex2);
	};

	this.body = function () {
		var randomBodyIndex = Math.floor(Math.random() * randomBodyArr.length);
		var randomHex1 = "#" + Math.random().toString(16).slice(2, 8);
		ctx.translate(0, -22);
		randomBodyArr[randomBodyIndex](randomHex1, skinColor[randomSkinColor]);
	};

	this.head = function (foo) {
		var hairColor = ['#8f4512', '#fabf01', '#000000']
		var randomHairColor = Math.floor(Math.random() * hairColor.length);
		var randomHeadIndex = Math.floor(Math.random() * randomHeadArr.length); 
		ctx.translate(0, -34);
		randomHeadArr[randomHeadIndex](skinColor[randomSkinColor], hairColor[randomHairColor]);
		ctx.translate(-foo, -114);
	};
  
	this.entirePerson = function () {
		var foo = Math.floor((Math.random() * 300) + 10);
		// Move the skincolor code down here and send it throgh the function
		// add some code to see how many people we should place and where they are placed
		return this.feet(foo) + this.body() + this.head(foo);
	}
};

var CompanyRoom = new CompanyRoom();
var randomRoomObjects = new RoomObjects();
var thisPerson = new Person();

function Room () {
  this.all = function(text, user, imgURL, thisRoomColor, thisShadowColor, logoFrom) {
    ctx.translate(floorWidthStart, floorHeightStart) + 
    CompanyRoom.roomAll(thisRoomColor, thisShadowColor) + 
    randomRoomObjects.allObjects(logoFrom) + 
    thisPerson.entirePerson() + 
    message(text, user, imgURL); + 
    ctx.translate(-floorWidthStart, -floorHeightStart);
  };
}

function Lobby () {
  this.all = function() {
    ctx.translate(floorWidthStart, floorHeightStart + 200) + 
    CompanyRoom.lobbyAll() + 
    randomRoomObjects.lobbyObjects() + 
    thisPerson.entirePerson() + 
    thisPerson.entirePerson() + 
    ctx.translate(-floorWidthStart, -floorHeightStart - 200);
  };
}

function Roof () {
  this.all = function(party) {
    ctx.translate(floorWidthStart, floorHeightStart) + 
    CompanyRoom.roofAll() + 
    randomRoomObjects.roofObjects(party) + 
    thisPerson.entirePerson() + 
    ctx.translate(-floorWidthStart, -floorHeightStart);
  };
}

var all = new Room();
var lobby = new Lobby();
var roof = new Roof();
