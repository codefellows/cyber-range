'use strict';

var securityQuestionOneElement = document.getElementById('securityQuestionOne');
securityQuestionOneElement.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();
    var correctAnswerOne = 'Brooklyn'
    var userInputOne = event.target.answer1.value
    if (correctAnswerOne === userInputOne) {
        // if correct do this
        //if incorrect do this other thing
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


