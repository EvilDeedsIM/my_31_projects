const input = document.querySelector(".input");
const btnContainer = document.querySelector(".buttons");

btnContainer.addEventListener("click", checkButton);

function checkButton({ target }) {
  const symbol = target.dataset.symbol;
  if (symbol === "=" && input.value != "") {
    input.value = eval(input.value).toFixed(1);
    return;
  }
  if (symbol === "c") {
    input.value = "";
    return;
  }
  if (symbol != "=" && symbol != "c") input.value += symbol;
}
