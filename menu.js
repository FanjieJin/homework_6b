//get the right product to be loaded in the product detail page
window.onload = function(){

    var originalDiv = document.getElementById('original');
    originalDiv.onclick = function() {
        var typeRoll = { name: 'Original',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '3.00',
                       imgLink: 'img/roll2.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }
    
    var walnutDiv = document.getElementById('walnut');
    walnutDiv.onclick = function() {
        var typeRoll = { name: 'Walnut',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '5',
                       imgLink: 'img/roll3.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }
    
    var glutenFreeDiv = document.getElementById('glutenFree');
    glutenFreeDiv.onclick = function() {
        var typeRoll = { name: 'Gluten Free',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '3.00',
                       imgLink: 'img/roll2.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }
    
    var caramelPecanDiv = document.getElementById('caramel');
    caramelPecanDiv.onclick = function() {
        var typeRoll = { name: 'Caramel Pecan',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '4',
                       imgLink: 'img/roll5.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }

     var pumpkinDiv = document.getElementById('pumpkin');
    pumpkinDiv.onclick = function() {
        var typeRoll = { name: 'Pumpkin Spice',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '4',
                       imgLink: 'img/roll6.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }

     var blueberryDiv = document.getElementById('blueberry');
    blueberryDiv.onclick = function() {
        var typeRoll = { name: 'Blueberry',
                       description: 'Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there.',
                       price: '4',
                       imgLink: 'img/roll1.png'};
        myJSON = JSON.stringify(typeRoll);
        localStorage.setItem('typeRoll', myJSON);
        document.location.href = 'rolls.html';
    }

    //update the number on the cart once a prodcut is selected
    var numCart = document.getElementById('numCart');
    numCart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    console.log(JSON.parse(localStorage.getItem('cart')).length);


}

