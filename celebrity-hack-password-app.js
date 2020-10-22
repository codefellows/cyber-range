'use strict';

// add to local storage
// password to be correct 
// button to click and link to page
// event listener listening for submit



function handleSubmit(event) {
  event.preventDefault();
  var newPassword = event.target.password.value;
  //console.log(newPassword);
  var generateStoredData = JSON.stringify(newPassword);
  localStorage.setItem('accessData', generateStoredData);

  location.href = 'celebrity-hack-sb-photos.html';
}

document.getElementById('reset').addEventListener('submit', handleSubmit);
var test = document.getElementById('reset');
//console.log(test);
