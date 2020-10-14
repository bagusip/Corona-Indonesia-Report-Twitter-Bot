console.log("The Tweet bot is starting ! ");
const fetch = require("node-fetch");
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

function fetchData(){
fetch("https://disease.sh/v3/covid-19/countries/Indonesia")
.then(res => res.json())
.then(data =>{
	var tweet = 'Tanggal: '+ getTanggal()+ '\n' +'Kasus: '+data.cases+'\n'+'Kematian: '+data.deaths+'\n'+'Sembuh: '+data.recovered+'\n'+'Pasien Aktif: '+data.active+'\n';

	tweetIt(tweet);
})
}


fetchData();

setInterval(fetchData, 1000*3600*24); //23 hours


function tweetIt(hasil){
	var tweet = {
		status: hasil + "#COVID19indonesia #CoronaIndonesia"
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

function getTanggal(){
	var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

	var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
	
	var date = new Date();
	
	var day = date.getDate();
	
	var month = date.getMonth();
	
	var thisDay = date.getDay(),
	
		thisDay = myDays[thisDay];
	
	var yy = date.getYear();
	
	var year = (yy < 1000) ? yy + 1900 : yy;
	
	var tanggal = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
	console.log(tanggal);

	return tanggal;
}