const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);


//var process = require('process');
var readline = require('readline');
 function randomNumber(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
console.log(  
  randomNumber(1, 2)
 )


// var randomNumber = Math.round(Math.random() * 3);
var lives = 5;

var terminal = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  });

terminal.setPrompt('Guess the number! (1-2): ');
terminal.prompt();
terminal.on('line', function(answer) {
  var answerNum = parseInt(answer);

  if (answerNum > randomNumber(1,2)) {
    console.log('Too high!');
    console.log('You have ' + lives + ' lives left');
  }

  else if (answerNum < randomNumber(1,2)) {
    console.log('Too low!');
    console.log('You have ' + lives + ' lives left');
  }

  else if (answerNum === randomNumber(1,2)) {
    console.log('W I N N E R ! ! !');
    console.log('You lost only ' + (6 - lives) + ' lives');
    process.exit(0);
  }

  else {
    console.log("That wasn't a number I recognise");
    console.log('You have ' + lives + ' lives');
  }

  lives--;
  if (lives == 0) {
    console.log('G A M E  O V E R ! ! !');
    process.exit(0);
  }

  terminal.prompt();
});

terminal.on('close', function() {
  console.log('C H I C K E N :P')
  process.exit(1);
});
