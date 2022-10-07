function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", onClickButton);

function onClickButton() {
  const changeColorBody = getRandomHexColor();
  bodyEl.style.backgroundColor = changeColorBody;
  spanEl.textContent = changeColorBody;
}
