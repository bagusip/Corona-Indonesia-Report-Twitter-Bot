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
  "Who... Who are... My Enemies...? My enemies are the ones after my life... My enemies are the ones that are after my life and the ones that toy with my life... They're all my enemies.  -Heero Yuy as he starts to lose control of Wing Zero Gundam, Mobile Suit Gundam Wing"
  // "",
  // "",
  // "",
  // "",
  // "",
  // "",
  // "",
];

function random_item(quotes)
{
  
return quotes[Math.floor(Math.random()*quotes.length)];
     
}


function print(){
	console.log(random_item(quotes));	
}

print();

setInterval(print, 1000*10800)


