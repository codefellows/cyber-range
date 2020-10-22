'use strict';

var numberOfTries = 3;
var numberOfAttempts = 0;
var correctPassword = 'donny';
var button = document.getElementById('login-box');


//need to add collect text box entree

function handleClick(event) {
  event.preventDefault();

  var attemptedPassword = event.target.passwordone.value;

  console.log(event.target);
  numberOfAttempts++;
  console.log('event whats happening', attemptedPassword, correctPassword);
  if (attemptedPassword === correctPassword) {
    correctPasswordEntered();

  } else if (numberOfAttempts < numberOfTries) {
    incorrectPassword();

  }
  if (numberOfAttempts === 3) {

    location.href = 'securityquestions.html';

  }

}

button.addEventListener('submit', handleClick);

function correctPasswordEntered() {
  console.log('the correct password was entered');

  location.href = 'celebrity-hack-sb-photos.html';
}


function incorrectPassword() {
  console.log('is there a incorrect password?');

  let modalBtn = document.getElementById('modal-btn');
  let modal = document.querySelector('.modal');
  let closeBtn = document.querySelector('.close-btn');
  modalBtn.onclick = function () {
    modal.style.display = 'block';
  };
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}
// var finalSubmit = document.getElementById()



// number of attempts
// alert / prompt please reset username password
// allow to try 3-5 trys to get password

// list3en for click on login button
// response that it is incorrect no matter what they enter

// hit login and told incorrect
//security questionn/password reset required prompt
// directs to security page once prompt is told

