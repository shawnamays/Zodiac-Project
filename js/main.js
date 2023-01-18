

//smurf on the blocc
document.querySelector('#check').addEventListener('click', check)


//first fade
let slideSource = document.getElementById('slideSource');

document.getElementById('check').onclick = function () {
  slideSource.classList.toggle('fade');
}








function check() {

let month = new Date (document.querySelector("#birthday").value).getMonth()+1
let day = new Date (document.querySelector("#birthday").value).getDate()+1




if (month == 1 && day >= 21 || month == 2 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're an Aquarius! Congratulations on leading people to believe you're a social butterfly when you actually hate being around people...yourself included."


}

else if (month == 2 && day >= 21 || month == 3 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Pisces! Congratulations on being the most confusing sign to have a conversation with in the entire zodiac.  Can't you just shut up and accept a point of view instead of arguing your nonsensical logic with no basis in reality?!"


}

else if (month == 3 && day >= 21 || month == 4 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're an Aries! Congratulations on being a hot-tempered, insolent human that people secretly dislike.  Why is it a secret? Well, they're AFRAID OF YOU, Aries.  You're scary and you don't think before you act."


}

else if (month == 4 && day >= 21 || month == 5 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Taurus!  Congratulations on being a lazy, boring bull.  Can't you get off the couch and out of the snacks and go live life outside for once?  Touch some grass for Christ's sake."


}

 else if (month == 5 && day >= 21 || month == 6 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Gemini!  Congratulations on being a two-faced, annoying know-it-all that drives everyone away from you.  Or it could just be the way you talk about everyone behind their backs and can't make a decision to save your life."


}


else if (month == 6 && day >= 21 || month == 7 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Cancer!  Congratulations on being an over-sensitive crybaby.  They didn't text you back, boohoo you're gonna be alone forever! You're far too emotional to be in a relationship with anything but eleven cats."


}

else if (month == 7 && day >= 21 || month == 8 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Leo!  Congratulations on being a god-awful, egotistical and narcissitic human.  Do you even actively listen? Or do you just wait for your turn to speak? OH right, you never let someone else speak, and you never ask about your friends' lives.  BECAUSE YOU'RE SELFISH."


}

else if (month == 8 && day >= 21 || month == 9 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Virgo!  Congratulations on being a neurotic, nit-picking, overbearing perfectionist that people cannot stand to be around.  Why is everyone a project to you? Why does everything have to go your way? And stop apologizing so goddamn much! You look weak.  Grow a vagina."


}

else if (month == 9 && day >= 21 || month == 10 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Libra!  Congratulations, nobody cares.  Literally stop trying to convince us that your life is a perfect island.  We know its a shipwrecked disaster.  Stop lying so much.  We literally do...not...care."


}

else if (month == 10 && day >= 21 || month == 11 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Scorpio!  Congratulations, you've won the Zodiac Lottery! What's your prize? A one way trip to an underground dungeon where you can be locked away forever.  You're a decietful, manipulative, toxic, entirely too emotional piece of literal WORK.  It's a FULL TIME JOB to play your games, jump through your hoops, and to please you all to earn 0.000001% of your trust.  Everything's not that deep, y'know? You can chill sometimes too.  Ya'know, without plotting murder."


}

else if (month == 11 && day >= 21 || month == 12 && day <= 22){

  document.querySelector('#placeToSee').innerText = "You're a Sagittarius!  Congratulations on being a Sagi-terrorist! You are brash, abrasive and argumentative.  Here's a secret: people don't bring you to group functions because your communication style is literal sandpaper.  Yeah, we get it, that's just, 'who you are', but that doesn't excuse your willful emotional ignorance towards others.  Learn some manners, who raised you?!"


}

else if ( month == 12 && day <= 22 || month == 1 && day <= 21 ){

  document.querySelector('#placeToSee').innerText = "You're a Capricorn! Congratulations on being an insufferable workaholic with permanent Imposter Syndrome!"



}


}



//if value is equal to june 22 - july 21 then, cancer

//if value is equal to july  22 - august 21 then, leo

//if value is equal to august 22 - september 21 then, virgo

//if value is equal to september 22 - october 21 then, libra

//if value is equal to october 22 - november 21 then, scorpio

//if value is equal to november 22 - december 21 then, sagittarius