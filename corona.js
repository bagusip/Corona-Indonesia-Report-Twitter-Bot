const fetch = require("node-fetch");

function getTanggal(){
	var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

	var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
	
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

 fetch("https://disease.sh/v3/covid-19/countries/Indonesia")
    .then(res => res.json())
    .then(data =>{
		var tweet = 'Tanggal: '+ getTanggal()+ ' ' +'Kasus: '+data.cases+' '+'Kematian: '+data.deaths+' '+'Sembuh: '+data.recovered+' '+'Pasien Aktif: '+data.active;
		console.log(tweet);
    })





