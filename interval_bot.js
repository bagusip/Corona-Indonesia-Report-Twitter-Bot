console.log("The Tweet bot is starting ! ");
const fetch = require("node-fetch");
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

function fetchData(){
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(res => res.json())
.then(data =>{
	// console.log(data["Indonesia"])
	var json = data['Indonesia']
	var highest = json[ Object.keys(json).pop()];
	var hasil = 'Tanggal: '+highest.date+'\n'+'Terkonfirmasi: '+highest.confirmed+'\n'+'Meninggal: '+highest.deaths+'\n'+'Sembuh: '+highest.recovered+'\n'

	tweetIt(hasil)
})
}


fetchData();

setInterval(fetchData, 1000*3600*23) //23 hours


function tweetIt(hasil){
	var test = Math.floor(Math.random() * 10); 
	var tweet = {
		status: hasil + " #CoronaOutbreak #CoronaIndonesia"
	}

	console.log(tweet);
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
		console.log("Something went wrong . . .")
		console.log(err)
		}
		else {
		console.log("It worked !")	
		}
	}
}