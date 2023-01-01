//JS FOR FIRST DICE-------------------------------

var randomVariable1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" +randomVariable1+".png";
var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//JS FOR SECOND DICE-------------------------------

var randomVariable2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" +randomVariable2 +".png";
var randomImageSource = "images/"+randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

// WINNER DECLARATION-------------------------


    if (randomVariable1 > randomVariable2){
        document.querySelector("h1").innerHTML = "🤴Player1 wins! ";
    } else if ( randomVariable1 < randomVariable2 ) {
        document.querySelector("h1").innerHTML = "Player2 wins!🤴";
    } else {
        document.querySelector("h1").innerHTML = "DRAW!";
    }


 
