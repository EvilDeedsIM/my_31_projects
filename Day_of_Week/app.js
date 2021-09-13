const day = new Date().toLocaleDateString("en-EN", { weekday: "long" });

const span = document.createElement("span");
span.textContent = day;
span.style.fontSize = "2.5rem";
span.style.fontWeight = "700";
document.body.appendChild(span);
