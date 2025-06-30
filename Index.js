document.getElementById("rollDiceBtn").addEventListener("click", function() {
  // Get player names from input fields, use defaults if empty
  var player1Name = document.getElementById("player1Name").value || "Player 1";
  var player2Name = document.getElementById("player2Name").value || "Player 2";

  // Generate random numbers for both players
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set dice images
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img1").setAttribute("src", randomDiceImage1);
  document.querySelector(".img2").setAttribute("src", randomDiceImage2);

  // Update player name labels under each dice
  document.getElementById("player1Label").textContent = player1Name;
  document.getElementById("player2Label").textContent = player2Name;

  // Update heading based on winner/draw, using player names
  var heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 " + player1Name + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = player2Name + " Wins! 🚩";
  } else {
    heading.textContent = "Draw!";
  }
});