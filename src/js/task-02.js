const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const gredientsEl = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i+=1) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add("item");
//  console.log(itemEl);
// }

const gredients = ingredients.map((gredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = gredient;
  itemEl.classList.add("item");
  return itemEl;
});
console.log(gredients);

gredientsEl.append(...gredients);
