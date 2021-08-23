const quotes = [
  "Be yourself. Everyone else is already taken.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "If you tell the truth, you don't have to remember anything.",
];

const quote = document.querySelector(".quote");
const quoteDiv = document.querySelector(".container");

quoteDiv.addEventListener("click", changeQuote);

function changeQuote() {
  let text = quote.innerHTML;
  let newText = newQuote();
  if (text !== newText) {
    quote.innerHTML = newText;
    return;
  }
  changeQuote();
}

function newQuote() {
  return getRandomQuote(quotes);
}

function getRandomQuote(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

changeQuote();
