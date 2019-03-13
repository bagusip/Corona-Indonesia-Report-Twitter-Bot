console.log("The Tweet bot is starting ! ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var quotes = [
  "Victory is the greatest tribute we can pay to those﻿ who sacrificed their lives for us! -Gihren Zabi , Mobile Suit Gundam",
  "The world belongs to you just as much as you belong to the world.  -Lacus Clyne, Gundam SEED",
  "History is much like an endless waltz. The three beats of war, peace and revolution continue on forever. -Mariemaia Kushrenada, Gundam Wing",
  "Will I stop fighting and be the destroyer…Or continue to fight and be the savior…Char, I think I'm finally beginning to understand what your question meant. -Amuro Ray, Mobile Suit Zeta Gundam",
  "When war is dehumanized both victory and defeat become miserable and God no longer lends a helping hand. -Treize Khushrenada to Chang Wufei, Mobile Suit Gundam Wing",
  "Kill because someone got killed, and being killed because you killed. Would that really bring about true peace in the end?  -Cagalli Yula Athla, Mobile Suit Gundam SEED",
  "Humanity alone possesses a god the power to transcend the now, the inner god called possibility -Banagher Links, Mobile Suit Gundam Unicorn",
  "But you're wrong! No matter what happens, everyone has only one life to live! That's why that life is yours! Not his! -Kira Yamato to Rey Za Barrel, Mobile Suit Gundam SEED Destiny: Final Plus ~ The Chosen Future",
  "Outer Space has a bad habit of sending menacing objects to Earth! -Unnamed Treize Faction pilot, New Mobile Report Gundam Wing",
  "Zeon is exhausted! Now is not the time for us to kneel before Zeon. It is time for us to rise! Now, more than ever, is our chance to defeat Zeon! -General Revil",
  "Gunpla is freedom. You can build it as you like. You can fight with it as you like. Just build Gunpla as you think best, and enjoy the battles to your heart's content. -Tatsuya Yuki, Gundam Build Fighters Episode 23 Gunpla Eve",
  "For the rebirth of the ideals of Zeon. For the success of Operation Stardust. Solomon, I have returned!  -Anavel Gato, Mobile Suit Gundam 0083: Stardust Memory",
  "But it's hard to let go of a power once you obtain it. Humans are like that. Even if it is a power that could destroy themselves. -McGillis Fareed, Mobile Suit Gundam IRON-BLOODED ORPHANS",
  "But the things you are capable of doing, and the things you want to do... You should be the one who is most aware of the answers to those.  -Gilbert Dullindal to Athrun Zala., Mobile Suit Gundam Seed Destiny",
  "Who... Who are... My Enemies...? My enemies are the ones after my life... My enemies are the ones that are after my life and the ones that toy with my life... They're all my enemies.  -Heero Yuy as he starts to lose control of Wing Zero Gundam, Mobile Suit Gundam Wing",
  "Peace is nothing but a result of war -Heero Yuy, Mobile Suit Gundam Wing",
  "You, people down there, are you satisfied with the way the world is? As for me… I hate it. -Lockon Stratos",
  "It was your display of overwhelming power that stole my heart. That feeling I had could only be called Love! But if you go beyond love, it becomes hatred! -Graham Aker",
  "Do what you want, the way you want to. - Heero Yuy",
  "Only mankind has a god. A “God” by the name of “possibility”. A power that allows us to go above and beyond. -Gundam Unicorn",
  "What lies beyond hatred and vengeance is nothing but an even greater sadness and loss! And it only becomes a seed for hatred. -Saji Crossroad",
  "To hold back in fear over the possibility of something happening. Sometimes you just have to reach out and take what you need instead of holding back. -Fon Spaak",
  "History is much like an endless waltz. The three beats of war, peace, and revolution continue on forever… -Mariemaia Khushrenada",
  "Don’t push your own feelings onto others. No matter what pretty words you string together, your kindness is just hypocrisy. You’re pretending to be nice just to make yourself feel better! -Allelujah Haptism",
  "Assumptions lead to mistakes. -Heero Yuy, Mobile Suit Gundam Wing",
  "A path not chosen is the same as a path that never existed. -Rau Le Creuset, Mobile Suit Gundam Seed",
  "There are things people can’t accept, even if they do understand them. -Athrun Zala, Mobile Suit Gundam Seed",
  "A world gained through battle will only bring forth new battles -Kira Yamato, Mobile Suit Gundam Seed",
  "What can you protect, if your only weapon is your emotions. -Kira Yamato, Mobile Suit Gundam Seed",
  "Victory is the greatest tribute we can pay to those who sacrificed their lives for us! -Gihren Zabi, Mobile Suit Gundam",
  "When war has dehumanized both victory and defeat become miserable and God no longer lends a helping hand. -Treize Khushrenada to Chang Wufei, Mobile Suit Gundam Wing",
  "You know what they say, Evil attracts evil. -Duo Maxwell, Mobile Suit Gundam Wing",
  "One should never give up until the end. -Trowa Barton, Mobile Suit Gundam Wing",
  "Nobody is ever born into this world as a soldier. -Rau Le Creuset, Mobile Suit Gundam See -Rau Le Creuset, Mobile Suit Gundam See",
  "There is nothing more valuable than life in this universe. Sandrock has taught me that. -Quatre Raberba Winner, Mobile Suit Gundam Wing",
  "Unlike in sports, the game of war has no set time limit and no points are awarded, so how do you determine the winners and the losers? When all your enemies are destroyed? Perhaps then. -Andrew Waltfeld, Mobile Suit Gundam Seed",  
  "But you’re wrong! No matter what happens, everyone has only one life to live! That’s why that life is yours! Not his! -Kira Yamato to Rey Za Barrel, Mobile Suit Gundam SEED",
  "History is much like an endless waltz. The three beats of war, peace, and revolution continue on forever. -Mariemaia Khushrenada ",
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
setInterval(tweetIt, 1000*60)

function tweetIt(){

	var tweet = {
		status: random_item(quotes)
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