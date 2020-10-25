'use strict';

// Global variables
var correctAnswerNumber = 0;
var questionText = ['Question One: Where was I born?', 'Question Two: What is my mother\'s maiden name?', 'Question Three: What truck did I used to drive for work?', 'Thank you. Proceed to password reset.'];
var answerText = ['brooklyn', 'wilson', 'ice cream truck'];
var securityQuestionOneElement = document.getElementById('securityquest-box').addEventListener('submit', handleSubmit);
// var attemptLimit = 3;
// var attemptsSoFar = 0;

// Grabbing the id "question" and populating it with content from array
function question() {
  var questionInput = document.getElementById('question');
  questionInput.textContent = questionText[correctAnswerNumber];
}

// handle function that either provides a correct or incorrect response submitted by the user.
function handleSubmit(event) {
  event.preventDefault();
  var userInput = event.target.answer.value;
  if (answerText[correctAnswerNumber] === userInput) {
    correctAnswerNumber++;
    correctAttempt(event);
    question();
    if (correctAnswerNumber === 3) {
      document.getElementById('passwordResetButton').setAttribute('class', '');
    }
  } else {
    incorrectAttempt(event);
  }
  var labelElement = document.getElementById('answerResponse');
  var attemptResponse = labelElement.lastChild;
  labelElement.removeChild(attemptResponse);
}

// If the input is correct, this is the function that happens
function correctAttempt(event) {

  var correctText = document.createElement('p');
  var parentElementQOne = document.getElementById('answerInput');
  correctText.textContent = 'Correct!';
  correctText.setAttribute('id', 'correct');
  parentElementQOne.after(correctText);
  event.target.answer.value = null;

  setTimeout(function () {

    var questionCorrect = document.getElementById('correct');
    questionCorrect.setAttribute('class', 'hidden');
  }, 2000);


}

// If the input is incorrect, this is the function that runs
function incorrectAttempt(event) {
  var incorrectText = document.createElement('p');
  var parentElementQOne = document.getElementById('answerInput');
  incorrectText.textContent = 'Incorrect. Remember answers are case sensitive.';
  incorrectText.setAttribute('id', 'incorrect');
  parentElementQOne.after(incorrectText);
  event.target.answer.value = null;


  setTimeout(function () {

    var questionIncorrect = document.getElementById('incorrect');
    questionIncorrect.setAttribute('class', 'hidden');
  }, 2000);
}



// This calls the question function
question();

// This is what happens when all the questions have been answered correctly
var finalSubmit = document.getElementById('passwordResetButton');
finalSubmit.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  if (correctAnswerNumber === 3) {
    location.href = 'celebrity-hack-password-reset.html';
    // location.href = 'celebrity-hack-sb-photos.html';
  } else {
    location.href = 'securityquestions.html';
  }
}
