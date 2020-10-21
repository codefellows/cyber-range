'use strict';

var correctAnswerNumber = 0;
var correctAnswerOne = 'Brooklyn';
var attemptLimit = 3;
var attemptsSoFar = 0;

var securityQuestionOneElement = document.getElementById('firstAnswer');
securityQuestionOneElement.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
  var userInputOne = document.getElementById('firstInput').value;
  console.log(userInputOne);

  if (correctAnswerOne === userInputOne) {
    correctAnswerNumber++;
    correctAttempt();
    // if correct do this
    //if incorrect do this other thing
  } else {
    incorrectAttempt();
  }
}


function correctAttempt(){
  var correctText = document.createElement('p');
  var parentElementQOne = document.getElementById('firstInput');
  correctText.textContent ='Correct!';
  parentElementQOne.after(correctText);

}

function incorrectAttempt(){
  var incorrectText = document.createElement('p');
  var parentElementQOne = document.getElementById('firstInput');
  incorrectText.textContent='Incorrect Guess';
  parentElementQOne.after(incorrectText);
}
// select security question answer based off quick google searches
// x amount of tries if ita wrong
// breaks through if its right to reset password
//prompt that says incorrect answer
// once hit 3 correct answers goes to reset
// add buttons next to each question
// event listener for button 'click'
// remove event listener
// place holder type answer here

