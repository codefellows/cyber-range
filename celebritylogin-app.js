'use strict';

var numberOfTries = 3;
var numberOfAttempts = 0;

var listenerButton = document.getElementById('celebrityLoginButton');


function handleClick(event) {
  event.preventDefault();
  numberOfAttempts++;
  if (numberOfAttempts < numberOfTries) {
    alert('Incorrect Password: Please Try Again');

  } else if (numberOfAttempts === numberOfTries) {
    alert('Too Many Attempts, Please Reset Password');

  }
}


listenerButton.addEventListener('click', handleClick);

// number of attempts
// alert / prompt please reset username password
// allow to try 3-5 trys to get password

// list3en for click on login button
// response that it is incorrect no matter what they enter

// hit login and told incorrect
//security questionn/password reset required prompt
// directs to security page once prompt is told

