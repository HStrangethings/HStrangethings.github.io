// alert("starter html js css");
// window.addEventListener("DOMContentLoaded", () => {
  // alert("JS and CSS are successfully linked! Welcome to Field Hockey!");
// });


var id1 = document.getElementById("id1");
var btn = document.getElementById("modeBtn");

console.log(id1); // debug: shows the wrapper div in console

btn.addEventListener("click", function () {
  id1.classList.toggle("dark-mode"); // Toggle dark/light mode
});



document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    "about",
    "rules",
    "tactics",
    "variants"
  ];

  function hideAll() {
    pages.forEach(id => {
      document.getElementById(id).style.display = "none";
    });
  }

  pages.forEach(id => {
    document.getElementById(id + "Btn").addEventListener("click", function () {
      hideAll();
      document.getElementById(id).style.display = "block";
    });
  });

  hideAll();
  document.getElementById("about").style.display = "block"; // Default visible
});


var playerForm = document.getElementById("playerForm");
var shootoutArea = document.getElementById("shootoutArea");
var greeting = document.getElementById("greeting");
var scoreDisplay = document.getElementById("score");
var resultText = document.getElementById("resultText");
var goalButtons = document.getElementById("goalButtons");
var resetBtn = document.getElementById("resetBtn");

var score = 0;
var shots = 0;
var maxShots = 5;

playerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("playerName").value;
  greeting.textContent = `Good luck, ${name}!`;
  playerForm.style.display = "none";
  shootoutArea.style.display = "block";
});

goalButtons.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && shots < maxShots) {
    var playerChoice = e.target.dataset.direction;
    var goalieChoice = ["left", "center", "right"][Math.floor(Math.random() * 3)];

    if (playerChoice === goalieChoice) {
      resultText.textContent = "Blocked by the goalkeeper!";
    } else {
      resultText.textContent = "GOAL!";
      score++;
    }

    shots++;
    scoreDisplay.textContent = score;

    if (shots === maxShots) {
      resultText.textContent += ` Game over! Final Score: ${score}/5`;
    }
  }
});

resetBtn.addEventListener("click", function () {
  score = 0;
  shots = 0;
  scoreDisplay.textContent = "0";
  resultText.textContent = "";
  document.getElementById("playerName").value = "";
  playerForm.style.display = "block";
  shootoutArea.style.display = "none";
});