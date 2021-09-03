function createInput(time) {
  const input = document.createElement("input");
  input.setAttribute("placeholder", time);
  input.setAttribute("type", "number");
  input.classList.add(`input-${time}`);
  return input;
}

function createButton(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("btn");
  return btn;
}

function createMainContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  const hours = createInput("hours");
  const minutes = createInput("minutes");
  const seconds = createInput("seconds");

  const startBtn = createButton("Start");
  const pauseBtn = createButton("Pause");
  const resetBtn = createButton("Reset");

  container.appendChild(hours);
  container.appendChild(minutes);
  container.appendChild(seconds);
  container.appendChild(startBtn);
  container.appendChild(pauseBtn);
  container.appendChild(resetBtn);

  document.body.appendChild(container);
}

createMainContainer();

const container = document.querySelector(".container");
const inputHours = container.querySelector(".input-hours");
const inputMinutes = container.querySelector(".input-minutes");
const inputSeconds = container.querySelector(".input-seconds");

let countdownStart;
let seconds;

function countSeconds(hrs, min, sec) {
  let seconds =
    Number(hrs.value) * 3600 + Number(min.value) * 60 + Number(sec.value);

  return seconds;
}

function setInputValues(sec) {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;

  inputHours.value = hours;
  inputMinutes.value = minutes;
  inputSeconds.value = seconds;
}

function countdown() {
  if (!seconds) {
    clearInterval(countdownStart);
    return;
  }

  --seconds;
  setInputValues(seconds);
}

container.addEventListener("click", ({ target }) => {
  if (target.classList.contains("btn")) {
    // Reset Button
    if (target.textContent === "Reset") {
      clearInterval(countdownStart);

      const inputs = container.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = "";
      });
    }

    // Start Button
    if (target.textContent === "Start") {
      seconds = countSeconds(inputHours, inputMinutes, inputSeconds);

      countdownStart = setInterval(countdown, 1000);
    }

    // Pause Button
    if (target.textContent === "Pause") {
      console.log("pause");
      clearInterval(countdownStart);
    }
  }
});
