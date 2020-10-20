'use strict';

var thisIsNotNotThePassword = '123456';

document.getElementById('submitButton').addEventListener('submit', handleSubmit);
// listen for submit button on login screen
console.log('123456');
function generateIncorrectAttempt() {
  var incorrectText = document.createElement('p');
  var passwordBox = document.getElementById('passwordTextBox');
  while (passwordBox.firstChild) {
    passwordBox.removeChild(passwordBox.firstChild);
   }
  incorrectText.textContent = 'Incorrect';
  passwordBox.appendChild(incorrectText);
  
}
console.log(generateIncorrectAttempt());
function handleSubmit(event) {
  event.preventDefault();
  var selectSubmit = event.target.passwordGuess.value;
  console.log(event.target);
  if (selectSubmit === thisIsNotNotThePassword) {
    location.href = 'windows-login-desktop.html';
  } else {
    generateIncorrectAttempt();
  }
}


  //don't forget what was entered
  
  
  

    





// compare input with what the password is
// the password is 123456
// use if statement - if the input password equals the password then move to next page

// else statement to turn input red if password does not match
// **stretch goal** add a counter to keep track of number of tries.


