const inputDiv = document.querySelector(".input-div");
const btn = document.querySelector("button");

const [feet, inches] = inputDiv.children;
const inchToCm = 2.54;

const cmOnly = document.querySelector(".cm-only").querySelector("input");
const meters = document.querySelector(".meters-div").querySelector("input");
const centimeters = document
  .querySelector(".centimeters-div")
  .querySelector("input");

btn.addEventListener("click", () => {
  const cm = parseFloat(
    calculate(feet.children[0].value, inches.children[0].value)
  );
  const secondPart = String(cm % 100).split(".")[1];
  if (secondPart.length > 2) {
    cmOnly.value = cm.toFixed(2);
    meters.value = `${(cm - (cm % 100)) / 100}`;
    centimeters.value = `${(cm % 100).toFixed(2)}`;
  } else {
    cmOnly.value = cm;
    meters.value = `${(cm - (cm % 100)) / 100}`;
    centimeters.value = `${cm % 100}`;
  }
});

function calculate(x, y) {
  z = Number(x) * 12 + Number(y);
  z *= inchToCm;
  return z;
}
