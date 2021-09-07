const billInput = document.querySelector(".bill-input");
const tipInput = document.querySelector(".tip-input");
const tipText = document.querySelector(".tip-text");
const tipOutput = document.querySelector(".tip-output");
const totalBillOutput = document.querySelector(".total-bill-output");
// console.log(tipInput.value);
let bill = billInput.value;
let tipValue = tipInput.value;

let tipCount = (bill * tipValue) / 100;

tipInput.addEventListener("input", print);

billInput.addEventListener("input", print);

function print() {
  tipValue = tipInput.value;
  bill = billInput.value;

  tipText.textContent = `${tipValue}%`;

  tipCount = (bill * tipValue) / 100;
  tipOutput.textContent = `${tipCount.toFixed(2)}$`;

  totalBillOutput.textContent = `${(Number(bill) + tipCount).toFixed(2)}$`;
}
