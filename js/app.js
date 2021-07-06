'use strict'; 

let userName=prompt('What is your name ?');
alert('welcome '+userName);
let game =confirm('Do you want to Play Guessing Game');




  let answerOne=prompt('Do you know someone called ahmad?');
answerOne=answerOne.toLowerCase();
switch (answerOne) {
case 'yes':
case 'y':
  alert('you are social');
  break;
case 'no':
case 'n':
  alert('you arenot social');

  break;

}



  let answerTwo=prompt('Do you think I am doing well with software development ?');
  answerTwo=answerTwo.toLowerCase();
  switch (answerTwo) {
  case 'yes':
  case 'y':
    alert('Thank you, but I think I need more effort and work');
    break;
  case 'no':
  case 'n':
    alert('Thank you, I will do my best');
    

    break;
  }








  let football=prompt('Do you think I watch football matches ?');
  football=football.toLowerCase();
  switch (football) {
  case 'yes':
  case 'y':
    alert('Yes, I really do :)');
    
    break;
  case 'no':
  case 'n':
    alert('No, in fact, I am a big fan of football matches');
    
    
    break;
  
  }






  let favTeam=prompt('Do you think my favorite team is Real Madrid ?');
  favTeam=favTeam.toLowerCase();
  switch (favTeam) {
  case 'yes':
  case 'y':
    alert('It\'s easy to guess Real Madrid is my favorite club');
   
    break;
  case 'no':
  case 'n':
    alert('Unfortunately, I am a Real Madrid fan :)');
   
   
      
   
    break;
  
  }



  let aboutMe=prompt('Do you think that I am an alien?');
  aboutMe=aboutMe.toLowerCase();
  switch (aboutMe) {
  case 'yes':
  case 'y':
    alert('Oh really?');
   
    alert('Nice try !');
    break;
  case 'no':
  case 'n':
    alert('Yes!!');
   
    break;
  
  }