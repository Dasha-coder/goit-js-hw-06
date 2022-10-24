const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", textType);

function textType(event) {
  if (input.value.length) {
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
}
