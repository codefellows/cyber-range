'use strict';

var allowedTries = 5;
var numberOfAttempts = 0;
var correctPassword = localStorage.getItem('accessData') || 'donny';
var button = document.getElementById('login-box');

function handleClick(event) {
  event.preventDefault();
  var attemptedUsername = event.target.usernameone.value;
  var attemptedPassword = event.target.passwordone.value;

  document.querySelector('.modal').style.display = 'block';

  if (attemptedUsername === '') {
    document.getElementById('modal-text').textContent = 'Please enter a username.';
  } else if (attemptedUsername !== 'Steve_Buscemi') {
    document.getElementById('modal-text').textContent = 'User not found.';
  } else if (attemptedPassword === '') {
    document.getElementById('modal-text').textContent = 'Please enter a password.';
  } else if (attemptedPassword === correctPassword) {
    location.href = 'celebrity-hack-sb-photos.html';
  } else if (++numberOfAttempts > allowedTries) {
    document.getElementById('modal-text').textContent = 'Too many attemps. Reset password?';
  } else {
    document.getElementById('modal-text').textContent = 'Password Incorrect';
  }
}

function setupIncorrectPassword() {
  let modalBtn = document.getElementById('modal-btn');
  let modal = document.querySelector('.modal');
  let closeBtn = document.querySelector('.close-btn');
  // modalBtn.onclick = function () {
  //   modal.style.display = 'block';
  // };
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// Set up the page:
button.addEventListener('submit', handleClick);
setupIncorrectPassword();
