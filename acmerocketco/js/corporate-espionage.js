// alert('Do you have what it takes to hack the Acme Rocket Co. store front? You\'ve heard rumors they are working on a new model called the Javelin Rocket Model b Series 3 the details are set to be released in the next month. Do you think you can hack their site and get the scoop before anyone else does?');

var shoppingCart = [];
var cartTotalPrice = 0;

// function checkLocal(){
//     var getCartFromStorage = localStorage.getItem('savedCart');
//     var parsedCart = JSON.parse(getCartFromStorage);

//     if (localStorage.getItem('savedCart'))
//     shoppingCart.length = 0;
//     for (var i = 0; i<parsedCart.length; i++);{
//         new AddToCart(savedCart[i].name,savedCart[i].model,savedCart[i].price)
//     }
// }

function AddToCart(name, model, price) {

  var singleProduct = {};
  singleProduct.name = name;
  singleProduct.model = model;
  singleProduct.price = price;

  shoppingCart.push(singleProduct);
}

//checkLocal();


//document.getElementById('moneymaker').onclick(){
// new AddToCart;
//}

console.log(shoppingCart);

var saveUserCart = JSON.stringify(shoppingCart);
localStorage.setItem('savedCart', saveUserCart);


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