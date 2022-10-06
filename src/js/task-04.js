
const btnValuePlus = document.querySelector('button[ data-action="increment"]');

const btnValueMin = document.querySelector('button[ data-action="decrement"]');

const spanEl = document.querySelector("#value");
let counterValue = 0


btnValuePlus.addEventListener("click", () =>{
   counterValue +=1
   spanEl.textContent = counterValue;
  

});

 btnValueMin.addEventListener("click", () => {
   counterValue -= 1;
   spanEl.textContent = counterValue;
 });