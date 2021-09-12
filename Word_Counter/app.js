const textarea = document.querySelector("textarea");

textarea.addEventListener("input", printCount);

function printCount() {
  const str = this.value;
  const words = str.split(" ").filter((el) => el !== "");
  createCounterElement("Words", words.length);
  createCounterElement("Characters", str.length);
}

function createCounterElement(text, value = 0) {
  const el = document.querySelector(`.${text.toLowerCase()}`);
  if (!el) {
    const span = document.createElement("span");
    span.textContent = `${text}: ${value}`;
    span.classList.add(text.toLowerCase());
    document.body.appendChild(span);
    return;
  }
  el.textContent = `${text}: ${value}`;
}
