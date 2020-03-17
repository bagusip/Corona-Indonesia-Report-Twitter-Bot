const fetch = require("node-fetch");

// fetch("https://pomber.github.io/covid19/timeseries.json")
//   .then(response => response.json())
//   .then(data => {
//     data["Indonesia"].forEach(({ confirmed, recovered, deaths }) =>
//       console.log(`${confirmed} - ${recovered} - ${deaths}`)

//     )
//   })
var temp;

 fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(res => res.json())
    .then(data =>{
    	// console.log(data["Indonesia"])
    	var json = data['Indonesia']
		var highest = json[ Object.keys(json).pop()];
		var tweet = 'Tanggal '+highest.date+' '+'Terkonfirmasi: '+highest.confirmed+' '+'Meninggal: '+highest.deaths+' '+'Sembuh: '+highest.recovered
		temp = tweet
    })

console.log(temp)



