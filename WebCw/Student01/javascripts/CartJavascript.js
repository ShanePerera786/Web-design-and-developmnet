if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeButtons.length; i++) {
        var button = removeButtons[i];
        button.addEventListener('click', remove)
    }

    var inputQuantity = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < inputQuantity.length; i++) {
        var input = inputQuantity[i];
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function remove(event) {    /*create a function to remove items from the cart*/
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal() /* call updateTotal function*/
}

function quantityChanged(event) {   /*create a function to change the quantity of item*/
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()   /* call updateTotal function*/
}

function addToCartClicked(event) {  /* create a function to work add to the cart button*/
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-topic')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-cost')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src;
    addItemToCart(title, price, imageSrc);
    updateTotal()   /* call updateTotal function*/
}

function addItemToCart(title, price, imageSrc) { /*create a function to add item,price,image to the cart*/
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-topic');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return
        }
    }
    /*inner html to add all the items, prices and images to the cart which selected by the user */
    var cartRowContents = `    
        <div class="cart-item cart-column">
            <img class="cart-item-img" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-topic">${title}</span>
        </div>
        <span class="cart-cost cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', remove);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateTotal() {    /*create a function to update total price of the item and display total*/
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-cost')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-cost')[0].innerText = '$' + total
}

function increaseFontSize(objectID) {   /*create a function to increase the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize+.1)+"em";
}
function decreaseFontSize(objectID) {    /*create a function to decrease the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize-.1)+"em";
}

function purchaseClicked() {    /*create a function to work purchase button*/
    alert("Thank you for purchasing !!.. your order will be dilivered to you ");
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal();
}

