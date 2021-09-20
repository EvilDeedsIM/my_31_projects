const img = document.querySelector(".img-coin");
const buttonsDiv = document.querySelector(".buttons");
const playerSelect = document.querySelector(".selected__player");
const playerScore = document.querySelector(".score__player");
const computerSelect = document.querySelector(".selected__computer");
const computerScore = document.querySelector(".score__computer");
const sides = ["Heads", "Tails"];
const comment = document.querySelector(".comment")

buttonsDiv.addEventListener("click", ({ target }) => {
  // console.log(target.textContent);
  getComputerSide();
  const side = target.textContent;
  if (side === "Heads") {
    changeChosenSide(side);
    rotateImage();
  }
  if (side === "Tails") {
    changeChosenSide(side);
    rotateImage();
  }
});

function changeChosenSide(side) {
  playerSelect.children[0].textContent = side;
  computerSelect.children[0].textContent = getComputerSide();
}

function getComputerSide() {
  const side = sides[Math.floor(Math.random() * 2)];
  return side;
}

function rotateImage() {
  let interval = 500;
  let rotator = setInterval(rotate, interval);
  const SPEED = Math.round(Math.random() * 100 - 30) + 30;
  function rotate() {
    changeImgSide()

    if (interval > 50) {
      interval -= SPEED;
      clearInterval(rotator);
      rotator = setInterval(rotate, interval);
      return;
    }
    clearInterval(rotator);
    checkResults(img.src.split("/").pop().split(".").shift());
  }
}

function changeImgSide() {
  const imgSide = img.src.split("/").pop();
  if (imgSide === "heads.png") {
    img.src = "./tails.png";
  } else {
    img.src = "./heads.png";
  }
}

function checkResults(coinSide) {
  let player = playerSelect.children[0].textContent.toLowerCase();
  let comp = computerSelect.children[0].textContent.toLowerCase();
  console.log(player, comp);
  console.log(coinSide);

  if (coinSide === player) {
    playerScore.children[0].textContent =
      Number(playerScore.children[0].textContent) + 1;
  }
  if (coinSide === comp) {
    computerScore.children[0].textContent =
      Number(computerScore.children[0].textContent) + 1;
  }

  if (
    playerScore.children[0].textContent ===
      computerScore.children[0].textContent &&
    playerScore.children[0].textContent === "5"
  ) {
    comment.textContent = "Draft"
    console.log("draft");
    return;
  }
  if (playerScore.children[0].textContent === "5") {
    comment.textContent = "You Win"
    console.log("you win");
    return;
  }
  if (computerScore.children[0].textContent === "5") {
    comment.textContent = "You Lose"
    console.log("comp win");
    return;
  }
}
