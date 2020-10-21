'use strict';

var numberOfTrys = 3;
var numberOfAttempts = 0;

var listenerButton = document.getElementById('celebrityLoginButton');
listenerButton.addEventListener('click', handleClick);

function handleClick(event) {
    if (numberOfAttempts < numberOfTrys) {
        alert('Incorrect Password: Please Try Again');

    }

}

numberOfAttempts++;
    
}



// number of attempts
// alert / prompt please reset username password
// allow to try 3-5 trys to get password

// list3en for click on login button 
// response that it is incorrect no matter what they enter

// hit login and told incorrect
//security questionn/password reset required prompt
// directs to security page once prompt is told  

