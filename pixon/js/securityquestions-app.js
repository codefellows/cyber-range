'use strict';

// Security questions and answers
const securityQuestionOneElement = document.getElementById('securityquestion-box').addEventListener('submit', handleSubmit);
const finalSubmit = document.getElementById('passwordResetButton');
const questionText = ['Question One: Where was I born?',
  'Question Two: What is my mother\'s maiden name?',
  'Question Three: What truck did I used to drive for work?',
  'Thank you. Proceed to password reset.'];
const answerText = ['brooklyn', 'wilson', 'ice cream truck'];

// Password reset validation and access
finalSubmit.addEventListener('click', handleClick);
let correctAnswerNumber = 0;
function handleClick(event) {
  event.preventDefault();
  if (correctAnswerNumber === 3) { location.href = 'celebrity-hack-password-reset.html'; }
  else { location.href = 'securityquestions.html'; }
}

// Grabbing the id "question" and populating it with content from array
function question() {
  let questionInput = document.getElementById('question');
  questionInput.textContent = questionText[correctAnswerNumber];
}

// handle function that either provides a correct or incorrect response submitted by the user.
function handleSubmit(event) {
  event.preventDefault();
  let userInput = event.target.answer.value;
  if (answerText[correctAnswerNumber] === userInput) {
    correctAnswerNumber++;
    correctAttempt(event);
    question();
    if (correctAnswerNumber === 3) { document.getElementById('passwordResetButton').setAttribute('class', ''); }
  }
  else { incorrectAttempt(event); }
  let labelElement = document.getElementById('answerResponse');
  let attemptResponse = labelElement.lastChild;
  labelElement.removeChild(attemptResponse);
}

// If the input is correct, this is the function that happens
function correctAttempt(event) {

  let correctText = document.createElement('p');
  let parentElementQOne = document.getElementById('answerInput');
  correctText.textContent = 'Correct!';
  correctText.setAttribute('id', 'correct');
  parentElementQOne.after(correctText);
  event.target.answer.value = null;

  setTimeout(function () {
    let questionCorrect = document.getElementById('correct');
    questionCorrect.setAttribute('class', 'hidden');
  }, 2000);
}

// If the input is incorrect, this is the function that runs
function incorrectAttempt(event) {
  let incorrectText = document.createElement('p');
  let parentElementQOne = document.getElementById('answerInput');
  incorrectText.textContent = 'Incorrect. Remember answers are case sensitive.';
  incorrectText.setAttribute('id', 'incorrect');
  parentElementQOne.after(incorrectText);
  event.target.answer.value = null;

  setTimeout(function () {
    let questionIncorrect = document.getElementById('incorrect');
    questionIncorrect.setAttribute('class', 'hidden');
  }, 2000);
}

// Initializes security Q&A program
question();
