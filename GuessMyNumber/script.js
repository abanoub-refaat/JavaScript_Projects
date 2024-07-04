"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === number) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = number;
    //Changing the style when the answer is correct.
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //Checking for the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the Game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
