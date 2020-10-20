'use strict';

var thisIsNotNotThePassword = '123456';

// var userTest = prompt('Enter user name: ');

// window.location.hash = `uid=${userTest}`;

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
  var userSubmit = event.target.userName.value;
  window.location.hash = `uid=${userSubmit}`;
  var passwordSubmit = event.target.passwordGuess.value;
  // compare input with what the password is
  if (passwordSubmit === thisIsNotNotThePassword) {
    location.href = 'windows-login-desktop.html';
  } else {
    // else statement to turn input red if password does not match
    generateIncorrectAttempt();
  }
}

// listen for submit button on login screen
document.getElementById('submitButton').addEventListener('submit', handleSubmit);

// **stretch goal** add a counter to keep track of number of tries.
