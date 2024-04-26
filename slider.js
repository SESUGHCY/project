const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const test = document.querySelector(".test");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 600}px)`;
  console.log(slideNumber * 600);
  slideNumber++;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  //   changeColor();
});
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
  slideNumber--;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
  slideNumber = length;
};
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "black";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};
console.log(buttons);
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 600}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "black";
  });
});

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "black";
};
