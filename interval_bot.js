console.log("The Tweet bot is starting ! ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var quotes = [
	"Ning stasiun balapan Rasane koyo wong kelangan Kowe ninggal aku Ra kroso netes eluh ning pipiku (Stasiun Balapan)",
	"Duh piye maneh iki pancen nasibku Kudu nandang loro koyo mengkene (Cidro)",
	"Remuk ati iki yen eling janjine Ora ngiro jebul lamis wae (Cidro)",
	"Aku nelongso mergo kebacut tresno Ora ngiro saikine cidro (Cidro)",
	"Neng opo seneng aku yen mung gawe laraku (Pamer Bojo)",
	"Terkintil-kintil Cintaku terkintil-kintil Tresnaku karo kowe ra bakal tak cuil-cuil (Terkintil-kintil)",
	"Sewo kuto uwis tak liwati, Sewu ati tak takoni, Nanging kabeh podo rangerteni, Lungamu neng endi (Sewu Kutho)",
	"Koyo ngene rasane wong nandang kangen rino wengi atiku rasane peteng (Pamer Bojo)",
	"Wis tak coba ngelaleake, Jenengmu soko atiku, Sak tenane aku ora ngapusi, Isih tresno sliramu (Sewu Kutho)",
	"Aku tak sing ngalah trimo mudur timbang loro ati (Suket Teki)",
	"Umpamane kowe uwis mulyo, lilo aku lilo, Yo mung siji dadi panyuwunku, Aku pengin ketemu (Sewu Kutho)",
	"Wong salah ora gelem ngaku salah, suwe-suwe sopo wonge sing betah (Suket Teki)",
	"Paribasan awak urip kari balong lilo tak lakoni jebule janjimu, jebule sumpahmu ra biso digugu (Suket Teki)",
	"Tak tandur pari jebul thukule malah suket teki (Suket Teki)",
	"Manuke manuke cucak rowo, cucak rowo dowo buntute, buntute sing akeh wulune, yen digoyang ser-ser aduh enake (Cucak Rowo)",
	"Lalekno awakku, Yen kuwi apik kanggone uripmu, Wis rasah ngomongake tresno, Tresno sing tulus yen gawe gelo lalekno (Cinta Yang Sempurna",
	"Suoro angin, angin sing ngreridu ati ngelingake sliramu sing tak tresnani, pingin nangis ngetokke eluh neng pipi suwe ra weruh senajan mung ono ngimpi (Banyu Langit)",
	"Ngalemo, ngalem neng dodoku yambanono roso kangen neng atiku (Banyu Langit)",
	"Mendung tak berarti hujan , Yakinlah itu satu cobaan, Masih ada waktu dan kesempatan untuk meraih cita (Mendung Tak Berarti Hujan)",
	"Cintaku padamu kasihku padamu putih tak ternoda, Untuk dirimu hanya untukmu(Mendung Tak Berarti Hujan)",
	"Ngalemo, ngalemo neng aku ben ra adem kesiram udaning dalu (Banyu Langit)",
	"Janjine lungane ra nganti suwe suwe pamit esuk lungane ra nganti sore, Janjine lungo ra nganti semene suwene nganti kapan tak enteni sak tekane (Banyu Langit)",
	"Udan gerimis teles ono klambi iki jroning dodo ben ra garing ngekep janji ora lamis nggedhineng nggonku nresnani nganti kapan aku ora biso bali (Banyu Langit)",
	"Aku kangen kowe Aku kangen karo kowe (Kangen Kowe)",
	"Janji lungo mung sedelo jare sewulan ra ono pamitmu naliko semono ning stasiun balapan solo (Stasiun Balapan)",
	"Jare lungo mung sedelo malah tanpo kirim warto lali opo pancen nglali yen eling mbok enggal bali (Stasiun Balapan)",
	"Ning stasiun balapan rasane koyo wong kelangan, kowe ninggal aku ra kroso netes eluh ning pipiku (Stasiun Balapan)",
	"Kalung emas ku mbiyen tak tuku Tak pasrahke mung kanggo sliramu (Kalung Emas)",
	"Gedhe roso tresnaku yo mung kanggo sliramu ra nyono kowe lali karo aku (Kalung Emas)",
	"Nangisku iki mergo kowe sing nggarai. Kebangeten opo salahku iki, opo dosaku iki (Kalung Emas)",
	];
	

function random_item(quotes)
{
  
return quotes[Math.floor(Math.random()*quotes.length)];
     
}

function print(){
	console.log(random_item(quotes));	
}

// // console.log('this is a tweet from node.js '+ new Date);
tweetIt();
setInterval(tweetIt, 1000*3600*6) //3 hours

function tweetIt(){

	var tweet = {
		status: random_item(quotes) + " #PatahHati"
	}

	T.post('statuses/update', tweet, tweeted);
	print();

	function tweeted(err, data, response){
		if(err){
		console.log("Something went wrong . . .")
		}
		else {
		console.log("It worked !")	
		}
	}
}