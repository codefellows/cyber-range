// alert('Do you have what it takes to hack the Acme Rocket Co. store front? You\'ve heard rumors they are working on a new model called the Javelin Rocket Model b Series 3 the details are set to be released in the next month. Do you think you can hack their site and get the scoop before anyone else does?');

function instructionsForHacking(){
  var updateButon = document.getElementById('updateDetails');
  var cancelButton = document.getElementById('cancel');
  var dialog = document.getElementById('favDialog');
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

}
instructionsForHacking();