const buttonsDiv = document.querySelector(".buttons");
const allButtons = document.querySelectorAll(".btn");
const yourChoiceDiv = document.querySelector(".choice__you");
const botChoiceDiv = document.querySelector(".choice__bot");
const yourScoreDiv = document.querySelector(".score__you");
const botScoreDiv = document.querySelector(".score__bot");

let yourChoice = "point-down";
let botChoice = "point-down";
let yourScore = 0;
let botScore = 0;

const rps = ["rock", "paper", "scissors"];

buttonsDiv.addEventListener("click", ({ target }) => {
  buttonsOnOff();
  changeChoice("you", target.id);
  setTimeout(() => {
    changeChoice("bot", getRandomChoice());

    setTimeout(() => {
      checkWinner();
      printScore();
      buttonsOnOff();
    }, 300);
  }, 1000);
});

function changeChoice(player, choice) {
  if (player === "you") {
    yourChoice = choice;
    printChoice(yourChoiceDiv, yourChoice);
  }
  if (player === "bot") {
    botChoice = choice;
    printChoice(botChoiceDiv, botChoice);
  }
}

function getRandomChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function checkWinner() {
  if (yourChoice === botChoice) return;

  if (yourChoice === "rock" && botChoice === "paper") {
    botScore++;
    return;
  }
  if (yourChoice === "paper" && botChoice === "rock") {
    yourScore++;
    return;
  }

  if (yourChoice === "rock" && botChoice === "scissors") {
    yourScore++;
    return;
  }
  if (yourChoice === "scissors" && botChoice === "rock") {
    botScore++;
    return;
  }

  if (yourChoice === "paper" && botChoice === "scissors") {
    botScore++;
    return;
  }
  if (yourChoice === "scissors" && botChoice === "paper") {
    yourScore++;
    return;
  }
}

function printScore() {
  yourScoreDiv.textContent = yourScore;
  botScoreDiv.textContent = botScore;
}

function printChoice(player, playerChoice) {
  player.innerHTML = "";
  setTimeout(() => {
    player.innerHTML = `<i class="far fa-hand-${playerChoice}"></i>`;
  }, 300);
}

function buttonsOnOff() {
  if (allButtons[0].disabled) {
    allButtons.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
    return;
  }
  if (!allButtons[0].disabled) {
    allButtons.forEach((btn) => {
      btn.setAttribute("disabled", "");
    });
    return;
  }
}

printScore();
printChoice(yourChoiceDiv, yourChoice);
printChoice(botChoiceDiv, botChoice);
