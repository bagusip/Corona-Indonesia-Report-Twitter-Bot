console.log("The Follow bot is starting ! ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// // Setting up a user stream
// var stream = T.stream('user');

// // Anytime someine follows me 
// stream.on('follow',followed);

// function followed(eventMsg){
// 	console.log("Follow event !")
// 	var name = eventMsg.source.name;
// 	var screenName = eventMsg.source.screen_name;
// 	tweetIt('@'+ screenName + 'thank you for following @RedCometBot');
// }

// function tweetIt(txt){
// 	var tweet = {
// 		status: txt
// 	}

// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response){
// 		if(err){
// 		console.log("Something went wrong . . .")
// 		}
// 		else {
// 		console.log("It worked !")	
// 		}
// 	}
// }

// // console.log('this is a tweet from node.js '+ new Date);
tweetIt();
setInterval(tweetIt, 1000*200)

function tweetIt(){
	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'random number '+ r + " (" +new Date + ")"
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
		console.log("Something went wrong . . .")
		}
		else {
		console.log("It worked !")	
		}
	}
}