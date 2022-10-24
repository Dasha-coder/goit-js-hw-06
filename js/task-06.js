const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputValidator);

function inputValidator(event) {
  console.log(Number(input.dataset.length));
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    console.log(input);
  }
}
