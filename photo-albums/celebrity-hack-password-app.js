'use strict';

function passwordVerificationError(formInput) {
  var errorMessage = document.getElementById('passwordError');
  errorMessage.textContent = 'Password entries do not match. Please try again.';
  formInput.target.newPassword.value = null;
  formInput.target.verifyPassword.value = null;
}

function handleSubmit(event) {
  event.preventDefault();
  // new password set by user set in local storage
  var password = event.target.newPassword.value;
  var passwordCheck = event.target.verifyPassword.value;
  if (password === passwordCheck) {
    localStorage.setItem('accessData', password);
    // user redirected to login page
    location.href = 'index.html';
  } else {
    passwordVerificationError(event);
  }
}

document.getElementById('reset').addEventListener('submit', handleSubmit);
