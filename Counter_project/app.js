const text = document.querySelector(".text");
const counter = document.querySelector(".counter");

counter.addEventListener("click", (event) => {
  changeText(event.target);
});

function changeText(target) {
  let num = parseInt(text.textContent);
  if (target.classList.contains("add-btn")) {
    text.innerHTML = ++num;
    colorCheck();
  }
  if (target.classList.contains("substract-btn")) {
    text.innerHTML = --num;
    colorCheck();
  }
}

function colorCheck() {
  if (parseInt(text.textContent) < 0) {
    text.style.color = "#cc4444";
  } else {
    text.style.color = "#222";
  }
}
