'user strict';
var score = 0;
var confirmQuiz = confirm('Hello, would you like to take a quiz about me?');

if (confirmQuiz) {
  console.log('Awesome! Lets get started!');
  var username = prompt('Great! What\'s your name?');
  takeQuiz();
} else {
  console.log ('Too Bad, you don\'t get a choice.');
}

function questionA(){
  var quizResponseOne = prompt('Please Answer with Yes or No. Does Brianna have a sibiling?').toLowerCase();
  //quizResponseOne = quizResponseOne.toLowerCase();
  if (quizResponseOne === 'y' || quizResponseOne === 'yes') {
    console.log('Awesome! You are correct!');
    score++;
  } else {
    console.log ('Too Bad, you were wrong. Brianna has a sister, named Rachel.');
  }
};

function questionB(){
  var quizResponseTwo = prompt('Please Answer with Yes or No. Is Brianna learning German?').toLowerCase();

  if (quizResponseTwo === 'y' || quizResponseTwo === 'yes'){
    console.log('Ja, richtig! She is learning German.');
    score++;
  } else {
    console.log ('Falsch! She is learning German.');
  }
};

function questionC(){
  var quizResponseThree = prompt('Please Answer with Yes or No. Has Brianna travelled to Mexico?').toLowerCase();
  if (quizResponseThree === 'n' || quizResponseThree === 'no'){
    console.log('Good guess! She has not been to Mexico...yet.');
    score++;
  } else {
    console.log ('Sorry! She hasn\'t been to Mexico.');
  }
};

function questionD(){
  var quizResponseFour = prompt('Please Answer with Yes or No. Did Brianna live in Thailand?').toLowerCase();

  if (quizResponseFour === 'y' || quizResponseFour === 'yes'){
    console.log('You\'re right! She lived in Thailand for one year.');
    score++;
  } else {
    console.log ('You did not guess correctly. She did live in Thailand.');
  }
};

function questionE(){
  var quizResponseFive = prompt('Please Answer with Yes or No. Does Brianna like Marmite?').toLowerCase();

  if (quizResponseFive === 'n' || quizResponseFive === 'no'){
    console.log('You\'re right! That shit is gross af.');
    score++;
  } else {
    console.log ('Are you nuts?? That stuff is vile and she does not like it.');
  }
};

function questionF() {
  var quizResponseSix = parseInt(prompt('Please Answer with a Number i.e. 1, 10, 100. How many Pokemon has Brianna caught?'));

  var numberAnswer = 131;

  for (var i = 0; i < 4; i++) {
    console.log(typeof quizResponseSix);
    if (quizResponseSix === numberAnswer){
      confirm('Wow! You guessed right! You must be a Pokemon Master!');
      score++;
      break;
    }

    else if (quizResponseSix > numberAnswer) {
      quizResponseSix = parseInt(prompt('That\'s too high! I\'m not a Pokemon Master yet. Guess again.'));

    } else {
      quizResponseSix = parseInt(prompt('That\s too low! I\'ve got more Pokemon than that. Guess again.'));
    }
  }
};

function questionG(){
  var statesArray = ['CALIFORNIA', 'NEW YORK', 'MASSACHUSETTS'];

  for (var j = 0; j < 6; j++){
    var quizResponseSeven = prompt('Please Answer with multiple choice. What states has Brianna lived in besides Washington?').toUpperCase();
    var someAnswer = false;
    for (var i = 0; i < statesArray.length; i++) {
      if (statesArray[i] === quizResponseSeven) {
        someAnswer = true;
        break;
      }
    }
    if (someAnswer === true) {
      confirm('Congratulations! You got it! Other possible correct answers are California, New York, Massachusetts.');
      score++;
      break;
    } else {
      alert('Sorry! Try again.');
    }
  }
};
function takeQuiz () {
  questionA();
  questionB();
  questionC();
  questionD();
  questionE();
  questionF();
  questionG();

  confirm('You got ' + score + ' out of 7 correct, ' + username + '. Thanks for playing!');
}
