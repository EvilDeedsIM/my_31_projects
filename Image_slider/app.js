const images = [
  "https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1531310568816-f5d0071360c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
  "https://images.unsplash.com/photo-1581904902396-1460f95198c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632196068933-23998d66a2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632134346410-fb65b96d6595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
];

const sliderWrapper = document.querySelector(".slider-wrapper");
const slider = sliderWrapper.querySelector(".slider");
let position = 0;

sliderWrapper.addEventListener("click", ({ target }) => {
  const side = target.classList[0];
  if (side === "left" || side === "right") {
    move(side);
  }
});

function move(side) {
  let positionNow = slider.style.left;
  if (side === "left") {
    if (position === -100 * (images.length - 1)) {
      position = 0;
    } else {
      position -= 100;
    }
    slider.style.left = `${position}%`;
  }
  if (side === "right") {
    if (position === 0) {
      position = -100 * (images.length - 1);
    } else {
      position += 100;
    }
    slider.style.left = `${position}%`;
  }
}

function loadImages() {
  slider.style.width = `${images.length * 100}%`;
  slider.style.left = `${position}%`;

  images.forEach((img) => {
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = img;
    slider.appendChild(image);
  });
}

loadImages();
