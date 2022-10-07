// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemEl = document.querySelectorAll(".item");
console.log(
  "Number of categories:",
  document.querySelectorAll("#categories ul").length
);

itemEl.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
