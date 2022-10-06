const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const gredientsEl = document.querySelector("#ingredients");

const gredients = ingredients.map((gredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = gredient;
  itemEl.classList.add("item");
  return itemEl;
});
console.log(gredients);

gredientsEl.append(...gredients);
