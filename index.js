"use strict";

// secret number - .number
// check button - .check
// guess number input - .guess
// message for feedback - .message
// score - .score
// highscore - .highscore
// again button - .again

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value); // Number is used to turn input into a number, .value to read the value of input

  // IF THERE IS NO NUMBER INPUT
  if (!guess) {
    document.querySelector(".message").textContent = "Input Number Please";
  } else if (guess === secretNumber) {
    // WINNING SCREEN
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "You Win!";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < secretNumber) {
    // LOOSING SCREEN
    score--;
    document.querySelector(".message").textContent = "Guess Higher";
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector("body").style.backgroundColor = "#FF474C";
      document.querySelector(".message").textContent = "You Lose!";
    }
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Guess Lower";
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector("body").style.backgroundColor = "#FF474C";
      document.querySelector(".message").textContent = "You Lose!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score = 20;
  document.querySelector(".number").textContent =
    Math.trunc(Math.random() * 20) + 1;
});
