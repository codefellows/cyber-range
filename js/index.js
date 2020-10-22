'use strict';


document.getElementById('buttonLeft').onclick = function () {
  location.href = 'windows-login-loginpage.html';
};

document.getElementById('buttonMid').onclick = function () {
  location.href = 'celebritylogin-index.html';
};

document.getElementById('buttonRight').onclick = function () {
  location.href = 'acmerocketco/arcjrmas1/imdex.html';
};
function(){
var updateButon = document.getElementById('updateDetails');
var cancelButton = document.getElementById('cancel');
var dialog = document.getElementById('Instructions');
dialog.returnValue = 'favAnimal';

function openCheck(dialog){
if(dialog.open){
console.log('Dialog open');
} else {
  console.log('Dailog closed');
}
}
//help button opens a modal
updateButon.addEventListener('click',function(){
  dialog.showModal();
  openCheck(dialog);
  });
//add cancel button to close modal dialog box
cancelButton.addEventListener('click',function(){
  dialog.closest('animalNotChosen');
  openCheck(dialog);
});

})();










