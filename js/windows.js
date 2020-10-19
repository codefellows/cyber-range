'use strict';
// listen for submit button on login screen
document.getElementById('submitButton').addEventListener('submit', handleSubmit);

function handleSubmit(event) {

  //don't forget what was entered
  event.preventDefault();

  var thisIsNotNotThePassword = '123456';
  var selectSubmit = event.target.passwordGuess.value;
  
  function generateIncorrectAttempt() {
    var incorrectText = document.createElement('p');
    incorrectText.textContent = 'Incorrect';
    document.getElementById('passwordTextBox').appendChild(incorrectText);

    if (selectSubmit === thisIsNotNotThePassword) {
      location.href = 'windows-login-desktop.html';
    }
    else {
      generateIncorrectAttempt();
    }
  }
}




// compare input with what the password is
// the password is 123456
// use if statement - if the input password equals the password then move to next page

// else statement to turn input red if password does not match
// **stretch goal** add a counter to keep track of number of tries.


