'use strict';

// URL modifier and data constants
const adminModeRegExp = /\?admin=true/;
const uuidParam = 'uuid=';
const uuidParamBreak = '|';
const badPasswords = ['123456', '123456789', 'password', 'qwerty', '12345678',
  '12345', '123123', '111111', '1234', '1234567890',
  '1234567', 'abc123', '1q2w3e4r5t', 'q1w2e3r4t5y6', 'iloveyou',
  '123', '000000', '123321', '1q2w3e4r', 'qwertyuiop'];
// Default user data
let accountUserName = 'Administrator';
let accountUserPassword;

// Conditional local storage parsing that generates default user data if null
function dataRetrieval() {
  if (localStorage.getItem('storedUserName') && localStorage.getItem('storedPassword')) {
    let retrievedUserName = localStorage.getItem('storedUserName');
    accountUserName = JSON.parse(retrievedUserName);
    let retrievedPassword = localStorage.getItem('storedPassword');
    accountUserPassword = JSON.parse(retrievedPassword);
  } else {
    accountUserPassword = randomArrayItem(badPasswords);
    dataStorage(accountUserName, accountUserPassword);
  }
}

// CSS trigger for admin scenario controls
function adminMode() {
  if (location.href.search(adminModeRegExp) !== -1) { document.getElementById('controlBox').style.visibility = 'visible'; }
}

// Transcoding and transportation of admin input user data to address box
function urlParamInjection(event) {
  event.preventDefault();
  let uuidUserNameInput = event.target.uuidUserName.value;
  if (!uuidUserNameInput) { uuidUserNameInput = accountUserName; }
  let uuidPasswordInput = event.target.uuidPassword.value;
  if (!uuidPasswordInput) { uuidPasswordInput = randomArrayItem(badPasswords); }
  uuidUserNameInput = Base64.encode(uuidUserNameInput);
  uuidPasswordInput = Base64.encode(uuidPasswordInput);
  window.location.hash = uuidParam + uuidUserNameInput + uuidParamBreak + uuidPasswordInput;
  event.target.uuidUserName.value = null;
  event.target.uuidPassword.value = null;
}

// Selector for random bad password or item from other array
function randomArrayItem(array) { return array[Math.floor(Math.random() * (array.length - 1))]; }

//3rd-party bas64 transcoding script: http://www.webtoolkit.info/javascript_base64.html#.X49WDNBKhhH
let Base64 = {
  // Private property
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  // Public method for encoding
  encode: function (input) {
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = Base64._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) { enc3 = enc4 = 64; }
      else if (isNaN(chr3)) { enc4 = 64; }
      output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
  },
  // Public method for decoding
  decode: function (input) {
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = input.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) { output = output + String.fromCharCode(chr2); }
      if (enc4 !== 64) { output = output + String.fromCharCode(chr3); }
    }
    output = Base64._utf8_decode(output);
    return output;
  },
  // Private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, '\n');
    let utftext = '';
    for (let n = 0; n < string.length; n++) {
      let c = string.charCodeAt(n);
      if (c < 128) { utftext += String.fromCharCode(c); }
      else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },
  // Private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    let string = '';
    let i = 0;
    let c = 0;
    let c2 = 0;
    let c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
};

// Extracts, decodes, and locally stores admin input UUID parameters from URL based on confirmed URL modification (pressing enter)
function urlAccountDataExtraction() {
  let urlPull = location.href;
  let hashIndex = urlPull.indexOf('#');
  if (hashIndex !== -1) {
    let paramBreakIndex = urlPull.indexOf(uuidParamBreak);
    accountUserName = Base64.decode(urlPull.slice((hashIndex + uuidParam.length + 1), paramBreakIndex));
    accountUserPassword = Base64.decode(urlPull.slice(-(urlPull.length - paramBreakIndex) + 1));
    loginBoxInjection();
    dataStorage(accountUserName, accountUserPassword);
  }
}

// Overwrites username input field with extracted UUID parameter data
function loginBoxInjection() {
  let loginForm = document.getElementById('userNameBox');
  let userNameEntry = document.getElementById('userNameInput');
  let decodedUserName = document.createElement('p');
  decodedUserName.setAttribute('id', 'userNameData');
  decodedUserName.textContent = accountUserName;
  loginForm.replaceChild(decodedUserName, userNameEntry);
}

// Local storage execution function
function dataStorage(userName, password) {
  let convertedUserName = JSON.stringify(userName);
  localStorage.setItem('storedUserName', convertedUserName);
  let convertedPassword = JSON.stringify(password);
  localStorage.setItem('storedPassword', convertedPassword);
}

// Event handler for password input in login form
function handleSubmit(event) {
  event.preventDefault();
  let passwordSubmit = event.target.passwordGuess.value;
  if (passwordSubmit === accountUserPassword) { location.href = 'windows-login-desktop.html'; }
  else {
    event.target.passwordGuess.value = null;
    let incorrectText = document.createElement('p');
    incorrectText.setAttribute('id', 'swing');
    let passwordBox = document.getElementById('passwordTextBox');
    if (passwordBox.firstChild) { passwordBox.removeChild(passwordBox.firstChild); }
    incorrectText.textContent = 'Incorrect username or password.';
    passwordBox.appendChild(incorrectText);
  }
}

// Login form event listener
document.getElementById('userLogin').addEventListener('submit', handleSubmit);
// Admin scenario controls event listener
document.getElementById('uuidParamDataEntry').addEventListener('submit', urlParamInjection);
// Page reset trigger with data and parameter clearance
document.getElementById('resetButton').onclick = function () {
  localStorage.clear('storedPassword');
  location.href = 'windows-login-loginpage.html';
};

adminMode();
dataRetrieval();
urlAccountDataExtraction();
