//const button = document.querySelectorAll("button");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const span = document.querySelector("#value");

let counterValue = 0;

const decrement = (evt) => {
  counterValue = Number(span.textContent) - 1;
  span.innerHTML = counterValue;
};

const increment = (event) => {
  counterValue = Number(span.textContent) + 1;
  span.innerHTML = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
