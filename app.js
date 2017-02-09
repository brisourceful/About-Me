'user strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz about me?');

if (confirmQuiz) {
  console.log('Awesome! Lets get started!');
} else {
  console.log ('Too Bad, you don\'t get a choice.');
}

var quizResponseOne = prompt('Please Answer with Yes or No. Does Brianna have a sibiling?').toLowerCase();
//quizResponseOne = quizResponseOne.toLowerCase();
if (quizResponseOne === 'y' || quizResponseOne === 'yes') {
  console.log('Awesome! You are correct!');
} else {
  console.log ('Too Bad, you were wrong. Brianna has a sister, named Rachel.');
}

var quizResponseTwo = prompt('Please Answer with Yes or No. Is Brianna learning German?').toLowerCase();

if (quizResponseTwo === 'y' || quizResponseTwo === 'yes'){
  console.log('Ja, richtig! She is learning German.');
} else {
  console.log ('Falsch! She is learning German.');
}

var quizResponseThree = prompt('Please Answer with Yes or No. Has Brianna travelled to Mexico?').toLowerCase();

if (quizResponseThree === 'n' || quizResponseThree === 'no'){
  console.log('Good guess! She has not been to Mexico...yet.');
} else {
  console.log ('Sorry! She hasn\'t been to Mexico.');
}
var quizResponseFour = prompt('Please Answer with Yes or No. Did Brianna live in Thailand?').toLowerCase();

if (quizResponseFour === 'y' || quizResponseFour === 'yes'){
  console.log('You\'re right! She lived in Thailand for one year.');
} else {
  console.log ('You did not guess correctly. She did live in Thailand.');
}
var quizResponseFive = prompt('Please Answer with Yes or No. Does Brianna like Marmite?').toLowerCase();

if (quizResponseFive === 'n' || quizResponseFive === 'no'){
  console.log('You\'re right! That shit is gross af.');
} else {
  console.log ('Are you nuts?? That stuff is vile and she does not like it.');
}
