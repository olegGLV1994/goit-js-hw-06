const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", changeOutputName);

function changeOutputName() {
  if ((outputName.textContent = inputName.value)) {
    inputName.value;
  } else {
    outputName.textContent = "Anonymous";
  }
}
