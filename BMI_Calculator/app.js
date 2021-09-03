const weightInput = document.querySelector(".weight-input");
const heightInput = document.querySelector(".height-input");
// const resultSpan = document.querySelector(".result-span");

weightInput.addEventListener("input", printResult);
heightInput.addEventListener("input", printResult);

function deleteOldResult() {
  const resultSpan = document.querySelector(".result-span");
  if (resultSpan) resultSpan.remove();
}

function createResult() {
  const fragment = document.createDocumentFragment();

  let span = document.createElement("span");
  span.classList.add("result-span");
  span.textContent = `${(
    (weightInput.value / heightInput.value / heightInput.value) *
    10000
  ).toFixed(1)}`;
  fragment.appendChild(span);
  document.body.appendChild(fragment);
}

function checkInputs() {
  if (weightInput.value.length > 0 && heightInput.value.length > 0) return 1;
  return 0;
}

function printResult() {
  const isValid = checkInputs();
  if (isValid) {
    deleteOldResult();
    createResult();
  }
  if (weightInput.value.length === 0 || heightInput.value.length === 0)
    deleteOldResult();
}

printResult();
