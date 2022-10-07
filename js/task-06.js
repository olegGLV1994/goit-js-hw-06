const inputEl = document.querySelector("input[data-length='6']");

console.log(inputEl);

inputEl.addEventListener("blur", inputBlur);

function inputBlur() {
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.style.borderColor = "#4caf50";
  } else {
    inputEl.style.borderColor = "#f44336";
  }
}
