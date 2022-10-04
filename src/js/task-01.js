const categoriesEl = document.querySelectorAll("#categories ul");
console.log(`Number of categories: ${categoriesEl.length}`);

const titleAnimalsEl = document.querySelectorAll("h2");
console.log(`Category: ${titleAnimalsEl[0].textContent}`);

const animalsEl = document.querySelector(".item ul");
const animalItemEl = animalsEl.children;
console.log(`Element: ${animalItemEl.length}`);
console.log(`Category: ${titleAnimalsEl[1].textContent}`);
console.log(`Elements: ${categoriesEl[1].children.length}`);
console.log(`Category: ${titleAnimalsEl[2].textContent}`);
console.log(`Element: ${categoriesEl[2].children.length}`);
