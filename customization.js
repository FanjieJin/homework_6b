//global variables 
var myImage = 'img/roll2.png';
var myGlazing = 'No Glazing';
var myNumber = '1';
var myPrice = '4';

window.onload = function() {

    updateRoll();
    numberPicker();
    glazingPicker();
    addProducts();


    //update the number on the cart 
    var numCart = document.getElementById('numCart');
    var myCart = localStorage.getItem('cart');
    numCart.innerHTML =JSON.parse(myCart).length;
}

// update the info of the rolls in the product-detail page
var updateRoll = function() {

    var typeRoll = JSON.parse(localStorage.getItem('typeRoll'));
    var rollName = document.getElementById('rollName'); 
    var rollPrice = document.getElementById('rollPrice'); 
    var rollDescription = document.getElementById('rollDescription'); 
    var rollImage = document.getElementById('rollImage');
    
    rollName.innerHTML = typeRoll.name;
    myItemType = typeRoll.name;
    rollPrice.innerHTML = "$" + typeRoll.price;
    myPrice = typeRoll.price;
    rollDescription.innerHTML = typeRoll.description;
    rollImage.setAttribute('src', typeRoll.imgLink);
};

// update the price when the respective number is clicked
var numberPicker = function() {
    var oneButton = document.getElementById("oneRoll");
    var threeButton = document.getElementById("threeRolls");
    var sixButton = document.getElementById("sixRolls");
    var twelveButton = document.getElementById("twelveRolls");
    
    //onclick effect for number picking
    oneButton.onclick = function() {
        oneButton.style.background = "rgb(109, 110, 164)";
        oneButton.style.color = 'white'; 
        threeButton.style.background = 'white';
        sixButton.style.background = 'white';
        twelveButton.style.background = 'white';
        threeButton.style.color = "rgb(109, 110, 164)";
        sixButton.style.color = "rgb(109, 110, 164)";
        twelveButton.style.color = "rgb(109, 110, 164)";
        myNumber = parseFloat("1");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    threeButton.onclick = function() {

        threeButton.style.background = "rgb(109, 110, 164)";
        threeButton.style.color = 'white';
        oneButton.style.background = 'white';
        sixButton.style.background = 'white';
        twelveButton.style.background = 'white';
        oneButton.style.color = "rgb(109, 110, 164)";
        sixButton.style.color = "rgb(109, 110, 164)";
        twelveButton.style.color = "rgb(109, 110, 164)";
        myNumber = parseFloat("3");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    sixButton.onclick = function() {
        sixButton.style.background = "rgb(109, 110, 164)";
        sixButton.style.color = 'white';
        threeButton.style.background = 'white';
        oneButton.style.background = 'white';
        twelveButton.style.background = 'white';    
        threeButton.style.color = "rgb(109, 110, 164)";
        oneButton.style.color = "rgb(109, 110, 164)";
        twelveButton.style.color = "rgb(109, 110, 164)";
        myNumber = parseFloat("6");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    twelveButton.onclick = function() {
        twelveButton.style.background = "rgb(109, 110, 164)";
        twelveButton.style.color = 'white';
        threeButton.style.background = 'white';
        sixButton.style.background = 'white';
        oneButton.style.background = 'white';
        threeButton.style.color = "rgb(109, 110, 164)";
        sixButton.style.color = "rgb(109, 110, 164)";
        oneButton.style.color = "rgb(109, 110, 164)";
        myNumber = parseFloat("12");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
};

//update the glazing of the selected roll
var glazingPicker = function() {
    var noGlazeButton = document.getElementById("noGlaze");
    var chocoGlazeButton = document.getElementById("choco");
    var sugarMilkButton = document.getElementById("sugarMilk");
    var vanillaMilkButton = document.getElementById("vanillaMilk");
    var rollImg = document.getElementById("rollImage");
    
    //onclick effect for the glazing
    noGlazeButton.onclick = function() {
        noGlazeButton.style.background = "rgb(109, 110, 164)";
        noGlazeButton.style.color = 'white';
        chocoGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        chocoGlazeButton.style.color = "rgb(109, 110, 164)";
        sugarMilkButton.style.color = "rgb(109, 110, 164)";
        vanillaMilkButton.style.color = "rgb(109, 110, 164)";
        myGlazing = 'No Glazing';
    }
    
    chocoGlazeButton.onclick = function() {
        chocoGlazeButton.style.background = "rgb(109, 110, 164)";
        chocoGlazeButton.style.color = 'white';
        
        noGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        
        noGlazeButton.style.color = "rgb(109, 110, 164)";
        sugarMilkButton.style.color = "rgb(109, 110, 164)";
        vanillaMilkButton.style.color = "rgb(109, 110, 164)";
        myGlazing = 'Double Chocolate';
    }
    
    sugarMilkButton.onclick = function() {
        sugarMilkButton.style.background = "rgb(109, 110, 164)";
        sugarMilkButton.style.color = 'white';
        
        chocoGlazeButton.style.background = 'white';
        noGlazeButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        
        chocoGlazeButton.style.color = "rgb(109, 110, 164)";
        noGlazeButton.style.color = "rgb(109, 110, 164)";
        vanillaMilkButton.style.color = "rgb(109, 110, 164)";
        myGlazing = 'Sugar-Milk';
    } 
    
    vanillaMilkButton.onclick = function() {
        vanillaMilkButton.style.background = "rgb(109, 110, 164)";
        vanillaMilkButton.style.color = 'white';
        
        chocoGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        noGlazeButton.style.background = 'white';
        
        chocoGlazeButton.style.color = "rgb(109, 110, 164)";
        sugarMilkButton.style.color = "rgb(109, 110, 164)";
        noGlazeButton.style.color = "rgb(109, 110, 164)";
        myGlazing = 'Vanilla-Milk';

    }
};


var addProducts = function() {
    
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.onclick = function() {
        var rollobject = {
            item:  myItemType,
            number: myNumber,
            glazing: myGlazing,
            price: myPrice,
            total_price: parseFloat(myPrice) * myNumber,
            image: myImage,
        };
        
        var cart = localStorage.getItem('cart');
        if (cart == null) {
            var mycart = [];
            mycart.push(rollobject);
            localStorage.setItem('cart', JSON.stringify(mycart));
        }
        else {
            
            var mycart = JSON.parse(localStorage.getItem('cart'))
            mycart.push(rollobject)
            localStorage.setItem('cart', JSON.stringify(mycart)) 
        }

        document.location.href = 'rolls.html';
    }; 
};

//Carousel starts here 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
