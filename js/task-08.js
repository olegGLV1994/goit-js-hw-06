const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitInput);

function onSubmitInput(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  const formEl = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  }
  console.log(`Email: ${mail}, Password: ${password}`);
  event.currentTarget.reset();
}
