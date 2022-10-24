const refs = {
  inputFontSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputFontSize.addEventListener("input", changeFontSaze);

function changeFontSaze(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
