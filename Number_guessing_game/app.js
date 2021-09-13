const input = document.querySelector("input");
const tryBtn = document.querySelector("button");
let counter = 0;

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

const number = getRandomNumber();

function checkNumber(value) {
  console.log(value);
  if (!isNaN(value) && value >= 1 && value <= 100) {
    if (value === number) return "You win";
    if (value < number) return "Too low";
    if (value > number) return "Too high";
  }
  return "Use numbers from 1 to 100";
}

function clearInput() {
  input.value = "";
}

function print() {
  const infoDiv = document.querySelector(".info");
  const tryDiv = document.querySelector(".try");

  if (!infoDiv) {
    const info = document.createElement("span");
    info.textContent = checkNumber(Number(input.value));
    info.classList.add("info");
    document.body.appendChild(info);
  } else {
    infoDiv.textContent = checkNumber(Number(input.value));
  }

  if (!tryDiv) {
    const tryNum = document.createElement("span");
    tryNum.textContent = `Try: ${counter}`;
    tryNum.classList.add("try");
    document.body.appendChild(tryNum);
  } else {
    tryDiv.textContent = `Try: ${counter}`;
  }

  clearInput();
}

tryBtn.addEventListener("click", () => {
  ++counter;
  print();
});
