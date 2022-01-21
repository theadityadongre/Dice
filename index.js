var randomNumber1 = (Math.random() * 6) + 1 ; // 1 to 6 dice
randomNumber1 = Math.floor(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png   //naming

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png   //selection

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);





var randomNumber2 = (Math.random() * 6) + 1 ;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}


// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
