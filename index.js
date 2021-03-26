
  var player1Dice = Math.floor(Math.random() * 6) + 1;
  var player2Dice = Math.floor(Math.random() * 6) + 1;

  var imagePlayer1 = "images/dice" + player1Dice + ".png";
  var imagePlayer2 = "images/dice" + player2Dice + ".png";

  document.querySelector(".img1").setAttribute("src", imagePlayer1);
  document.querySelector(".img2").setAttribute("src", imagePlayer2);

  if (player1Dice === player2Dice) {
    document.querySelector(".main-title").innerHTML = "Draw!";
  } else if (player1Dice > player2Dice) {
    document.querySelector(".main-title").innerHTML = "Player 1 wins!";
  } else {
    document.querySelector(".main-title").innerHTML = "Player 2 wins!";
  }
