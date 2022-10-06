
const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", valueSize);

function valueSize() {
 spanEl.style.fontSize = inputEl.value + 'px'
}