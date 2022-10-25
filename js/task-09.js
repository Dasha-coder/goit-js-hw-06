function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  btnChangeColor: document.querySelector(".change-color"),
  coloredText: document.querySelector(".color"),
};
/* const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const coloredText = document.querySelector(".color"); */

refs.btnChangeColor.addEventListener("click", clickChangeColor);

function clickChangeColor(event) {
  const randomColor = `${getRandomHexColor()}`;
  refs.body.style.backgroundColor = randomColor;
  refs.coloredText.textContent = randomColor;
}
