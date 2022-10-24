const form = document.querySelector(".login-form");
const input = document.querySelector(".login-form input");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!formElements.email.value.length || !formElements.password.value.length) {
    alert("Всі поля мають бути заповнені!!");
  } else {
    const formData = { mail, password };
    console.log(formData);
  }
  form.reset();
}
