'use strict';

var thisIsNotNotThePassword = '123456';
var loginAttempts = 0;
var attemptLimit = 5;

//don't forget what was entered
// function generateIncorrectAttempt() {
//   var incorrectText = document.createElement('p');
//   var passwordBox = document.getElementById('passwordTextBox');

//   if (passwordBox.firstChild) {
//     passwordBox.removeChild(passwordBox.firstChild);
//   }
//   incorrectText.textContent = 'Incorrect';
//   passwordBox.appendChild(incorrectText);
// }

function generateIncorrectAttempt() {
  // console.log(test);
  var incorrectText = document.createElement('p');
  var passwordBox = document.getElementById('passwordTextBox');
  if (loginAttempts < attemptLimit) {
    if (passwordBox.firstChild) {
      passwordBox.removeChild(passwordBox.firstChild);
    }
    incorrectText.textContent = `Incorrect username or password. ${attemptLimit - loginAttempts} attempts left.`;
    passwordBox.appendChild(incorrectText);
  } else if (loginAttempts >= attemptLimit) {
    // loginSubmit.removeEventListener('submit', handleSubmit);
    // alert('Login attempt limit reached. Account locked for 1 hour.');
    if (passwordBox.firstChild) {
      passwordBox.removeChild(passwordBox.firstChild);
    }
    incorrectText.textContent = 'Login attempt limit reached. Account locked for 1 hour.';
  }

}

function handleSubmit(event) {
  event.preventDefault();
  loginAttempts++;
  var userSubmit = event.target.userName.value;
  userSubmit = Base64.encode(userSubmit);
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

//3rd-party bas64 transcoding script: http://www.webtoolkit.info/javascript_base64.html#.X49WDNBKhhH
var Base64 = {
  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  // public method for encoding
  encode: function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
  },
  // public method for decoding
  decode: function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = Base64._utf8_decode(output);
    return output;
  },
  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
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
  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = "";
    var i = 0;
    var c = 0;
    var c2 = 0;
    var c3 = 0;
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

function urlParamInjection(event) {
  event.preventDefault();
  var uuidUserNameInput = event.target.uuidUserName.value;
  var uuidPasswordInput = event.target.uuidPassword.value;
  uuidUserNameInput = Base64.encode(uuidUserNameInput);
  uuidPasswordInput = Base64.encode(uuidPasswordInput);
  window.location.hash = `uuid=${uuidUserNameInput}|${uuidPasswordInput}`;
}

// function loginUserNameInjection() {
//   var uuidParam = '#uuid='
//   var urlPull = location.href;
//   var hashIndex = urlPull.indexOf(uuidParam);
//   var paramBreakIndex = urlPull.indexOf('|');
//   var uidUserNameParamSlice = urlPull.slice((hashIndex + uuidParam.length), paramBreakIndex);



//   var decodedUserName = document.createElement('p');
//   decodedUserName.setAttribute('id', 'userNameData');
//   decodedUserName.textContent = Base64.decode(uidUserNameParamSlice);
//   var loginForm = document.getElementById('loginInputAnchor');
//   var userNameEntry = document.getElementById('userNameInput');
//   loginForm.replaceChild(decodedUserName, loginForm.childNodes[2]);
// }

function loginUserNameInjection() {
  var uuidParam = '#uuid='
  var urlPull = location.href;
  var hashIndex = urlPull.indexOf(uuidParam);
  if (hashIndex !== -1) {
    var paramBreakIndex = urlPull.indexOf('|');
    var uidUserNameParamSlice = urlPull.slice((hashIndex + uuidParam.length), paramBreakIndex);
    var decodedUserName = document.createElement('p');
    decodedUserName.setAttribute('id', 'userNameData');
    decodedUserName.textContent = Base64.decode(uidUserNameParamSlice);
    var loginForm = document.getElementById('loginInputAnchor');
    var userNameEntry = document.getElementById('userNameInput');
    loginForm.replaceChild(decodedUserName, loginForm.childNodes[2]);
  }
}


// listen for submit button on login screen
var loginSubmit = document.getElementById('userLogin').addEventListener('submit', handleSubmit);
var urlUUIDParam = document.getElementById('uuidParamDataEntry').addEventListener('submit', urlParamInjection)

// **stretch goal** add a counter to keep track of number of tries.
loginUserNameInjection();
