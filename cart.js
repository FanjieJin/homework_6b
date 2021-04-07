window.onload = function() {

    //show the number of the items in the cart  
    var numCart = document.getElementById('numCart');
        numCart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;

    //get the elements from html 
    var allitems = document.getElementById('all-elems');
    var OrderButton = document.getElementById('OrderButton');
    var cart = JSON.parse(localStorage.getItem('cart'));
    var total = 0;
  
    for (var i = 0; i < cart.length; i++) {

        var detail = document.createElement('div');
        detail.className = "cart-box";

        var productNumber = document.createElement('li');
        productNumber.innerHTML = "Units:" + " " + cart[i].number;

        //create a new list once a product is selected
        var productName = document.createElement('li');

         //add the name of the roll and the glazing
        var roll_name = cart[i].item + " " + "Roll";
            if (cart[i].glazing !== 'No Glazing') {
                roll_name = roll_name + '(' + cart[i].glazing + ')';
            }
        productName.innerHTML = roll_name;
        
        //add the price to the cart 
        var productAmount = document.createElement('li');
        productAmount.innerHTML = "$" + " " + cart[i].total_price;
        total = total + parseFloat(cart[i].total_price);


        var productRemove = document.createElement('li');
        var removeButton = document.createElement('button');
        var text = document.createTextNode('X');
        removeButton.appendChild(text);
        productRemove.appendChild(removeButton);
        
        //appending objects to the cart 
        var itemNew =i;
        productRemove.onclick = function() {
          removeIndex(itemNew);
        }

        detail.appendChild(productRemove);
        detail.appendChild(productAmount);
        detail.appendChild(productNumber);
        detail.appendChild(productName);
        allitems.appendChild(detail);
    }     

    //removing the items in the cart based on its index
    var removeIndex = function(index) {
        var cart = JSON.parse(localStorage.getItem('cart')); 
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
    
    //once an order is sumbitted, the cart will be cleared and users will get notification
    OrderButton.onclick = function() {
        var newCart = [];
        myJSON = JSON.stringify(newCart);
        localStorage.setItem('cart', myJSON);
        document.location.href = 'confirm.html';
    }
}

    




