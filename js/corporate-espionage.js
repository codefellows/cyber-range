alert('Do you have what it takes to hack the Acme Rocket Co. store front? You\'ve heard rumors they are working on a new model called the Javelin Rocket Model b Series 3 the details are set to be released in the next month. Do you think you can hack their site and get the scoop before anyone else does?');

var shoppingCart = [];

var cartTotalPrice = 0;

function addToCart(name,model,price){

    var singleProduct = {};
    singleProduct.name=name;
    singleProduct.model=model;
    singleProduct.price=price;

    shoppingCart.push(singleProduct);
}

console.log(addToCart);