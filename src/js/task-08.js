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
  console.log(formEl);

  const formData = new FormData(event.currentTarget);
  formData.forEach((value) => {
    if (value === "") {
      alert("Все поля должны быть заполнены");
    }
    event.currentTarget.reset();
  });
}
