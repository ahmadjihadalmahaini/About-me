'use strict';
let score = 0;

let userName = prompt('What is your name ?');

while (!userName) {
  userName = prompt("please write your name");


}
alert('welcome ' + userName);
console.log('welcome ' + userName)



let game = confirm('Do you want to Play Guessing Game');



let answerOne = prompt('Do you know someone called ahmad ?');
answerOne = answerOne.toLowerCase();
switch (answerOne) {
  case 'yes':
  case 'y':
    score++;
    alert('you are social');
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break;
  case 'no':
  case 'n':
    alert('you arenot social');

    break;

}



let answerTwo = prompt('Do you think I am doing well with software development ?');
answerTwo = answerTwo.toLowerCase();
switch (answerTwo) {
  case 'yes':
  case 'y':
    alert('Thank you, but I think I need more effort and work');
    score++;
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break;
  case 'no':
  case 'n':
    alert('Thank you, I will do my best');


    break;
}








let football = prompt('Do you think I watch football matches ?');
football = football.toLowerCase();
switch (football) {
  case 'yes':
  case 'y':
    alert('Yes, I really do :)');
    score++;
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break;
  case 'no':
  case 'n':
    alert('No, in fact, I am a big fan of football matches');


    break;

}








let favTeam = prompt('Do you think my favorite team is Real Madrid ?');
favTeam = favTeam.toLowerCase();
switch (favTeam) {
  case 'yes':
  case 'y':
    alert('It\'s easy to guess Real Madrid is my favorite club');
    score++;
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break;
  case 'no':
  case 'n':
    alert('Unfortunately, I am a Real Madrid fan :)');




    break;

}



let aboutMe = prompt('Do you think that I am an alien?');
aboutMe = aboutMe.toLowerCase();
switch (aboutMe) {
  case 'yes':
  case 'y':
    alert('Oh really?');

    alert('Nice try !');
    break;
  case 'no':
  case 'n':
    alert('Yes!!');
    score++;
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break;

}



out: for (let i = 4; i >= 1; --i) {

  let guessNum = prompt('Enter a number from 0 to 10');
  guessNum = parseInt(guessNum);


  // while (guessNum !== 0 && guessNum !== 1 && guessNum !== 2 && guessNum !== 3 && guessNum !== 4 && guessNum !== 5 && guessNum !== 6 && guessNum !== 7 && guessNum !== 8 && guessNum !== 9 && guessNum !== 10) {


  guessNum = parseInt(guessNum);

 

  if (guessNum == 5) {
    alert('Well done, you hit the right Number');
    score++;
    // alert(`you have a score of ${score} /7`);
    console.log(`you have a score of ${score} /7`);
    break out;
  }

  else if (guessNum > 5) {
    alert('too High');
    alert('you have a ' + i + ' attempt from   4')

    

  }
  else {
    alert('too low');
  alert('you have a ' + i + ' attempt from   4')


  }



}









let cars = ['bmw', 'audi', 'ford', 'honda'];
//console.log(cars[0]);
lastQus: for (let atmp = 6; atmp >= 1; --atmp) {


  let favCar = prompt('Guess my favorite car').toLowerCase();
  alert('you have a ' + atmp + ' attempt from   6')

  for (let i = 0; i < cars.length; i++) {

    if (favCar === cars[i]) {
      alert('Great, correct answer !!');
      score++;
      // alert(`you have a score of ${score} /7`);
      console.log(`you have a score of ${score} /7`);


      break lastQus;

    }
    // alert('Well, You have exhausted all attempts, My favorite car are ' + cars);

  }



}
// console.log(`you have a score of ${score} /7`);


alert('Thanks for your time, ' + userName + ' You get ' + score + ' / 7');
console.log('Thanks for your time, ' + userName + ' You get ' + score + ' / 7');
