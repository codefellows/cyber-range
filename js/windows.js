'use strict';

var thisIsNotNotThePassword = '123456';

//don't forget what was entered
function generateIncorrectAttempt() {
  var incorrectText = document.createElement('p');
  var passwordBox = document.getElementById('passwordTextBox');

  if (passwordBox.firstChild) {
    passwordBox.removeChild(passwordBox.firstChild);
  }
  incorrectText.textContent = 'Incorrect';
  passwordBox.appendChild(incorrectText);
}

function handleSubmit(event) {
  event.preventDefault();
  var selectSubmit = event.target.passwordGuess.value;
  // compare input with what the password is
  if (selectSubmit === thisIsNotNotThePassword) {
    location.href = 'windows-login-desktop.html';
  } else {
    // else statement to turn input red if password does not match
    generateIncorrectAttempt();
  }
}

// listen for submit button on login screen
document.getElementById('submitButton').addEventListener('submit', handleSubmit);

// **stretch goal** add a counter to keep track of number of tries.
