function message(text, user, imgURL) {

	var userTweet = user;
	var textTweet = text;
	var imgURLTweet = imgURL;

	jQuery('<div/>', {
		id: ('bar'),
		attr: ('class','bar'),
    style: 'position:absolute;opacity:0;top:' + floorHeightStart + 'px;left:' + floorWidthStart + 'px;width:' + floorWidth +'px;height:' + floorHeight + 'px;',
	})
	.append('<div style="position:absolute;background:black;width:' + (floorWidth + 1) + 'px;height: ' + floorHeight + 'px;opacity:0.5;"></div>')
	.append('<div class="tweetblock" style="position:absolute;"><img class="tweeter" src="' + imgURLTweet + '"/><div class="tweeter"><h2>' + userTweet + '</h2></div><div class="tweettext"><p>' + textTweet + '</p></div>')
	//.append('<div class="tweetblock" style="position:absolute;"><div class="tweeter"><h2>' + userTweet + '</h2></div><div class="tweettext"><p>' + textTweet + '</p></div>')
	
	.appendTo('#foo');

  $('div#bar').hover(function(){
  //show the box
    $(this).stop().animate({opacity:1},100);
  },function() {
  	$(this).stop().animate({opacity:0},100);
	});

	return;
};