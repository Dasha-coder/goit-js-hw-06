function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//---------------------------------------------------------//

/*               Не готов до перевірки             */

//--------------------------------------------------------//

const conteinerDiv = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

buttonCreate.addEventListener("click", createBoxes);
buttonCreate.addEventListener("click", destroyElement);
input.addEventListener("click", createBoxes);

function createElement(event) {
  conteinerDiv.append(createBoxes());
}
function destroyElement(event) {
  conteinerDiv.remove(...arr);
}

const arr = [];
function createBoxes(event) {
  let amount = event.currentTarget;
  console.log(`Кнопка: ${event.currentTarget.value}`);
  for (let i = 0; i === amount; i++) {
    document.createElement("div");
    arr.push([i]);
    // console.log(arr);
  }
  // console.log(arr);
  return arr;
}
