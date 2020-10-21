'use strict';

var correctAnswerNumber = 0;
var correctAnswerOne = 'Brooklyn';
var correctAnswerTwo = 'Wilson';
var correctAnswerThree = 'Ice Cream Truck';
var attemptLimit = 3;
var attemptsSoFar = 0;

function questionOne(){
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
    } else {
      incorrectAttempt();
    }
  }
}
questionOne();

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




function questionTwo(){
  var securityQuestionTwoElement = document.getElementById('secondAnswer');
  securityQuestionTwoElement.addEventListener('click', handleClick);
  function handleClick(event) {
    event.preventDefault();
    console.log(event.target);
    var userInputTwo = document.getElementById('secondInput').value;
    console.log(userInputTwo);
    if (correctAnswerTwo === userInputTwo) {
      correctAnswerNumber++;
      correctAttemptTwo();
    } else {
      incorrectAttemptTwo();
    }
  }
}
questionTwo();

function correctAttemptTwo(){
  var correctText = document.createElement('p');
  var parentElementQTwo = document.getElementById('secondInput');
  correctText.textContent ='Correct!';
  parentElementQTwo.after(correctText);

}

function incorrectAttemptTwo(){
  var incorrectText = document.createElement('p');
  var parentElementQTwo = document.getElementById('secondInput');
  incorrectText.textContent='Incorrect Guess';
  parentElementQTwo.after(incorrectText);
}


function questionThree(){
  var securityQuestionThreeElement = document.getElementById('thirdAnswer');
  securityQuestionThreeElement.addEventListener('click', handleClick);
  function handleClick(event) {
    event.preventDefault();
    console.log(event.target);
    var userInputThree = document.getElementById('thirdInput').value;
    console.log(userInputThree);
    if (correctAnswerThree === userInputThree) {
      correctAnswerNumber++;
      correctAttemptThree();
    } else {
      incorrectAttemptThree();
    }
  }
}
questionThree();

function correctAttemptThree(){
  var correctText = document.createElement('p');
  var parentElementQThree = document.getElementById('thirdInput');
  correctText.textContent ='Correct!';
  parentElementQThree.after(correctText);

}

function incorrectAttemptThree(){
  var incorrectText = document.createElement('p');
  var parentElementQThree = document.getElementById('thirdInput');
  incorrectText.textContent='Incorrect Guess';
  parentElementQThree.after(incorrectText);
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

