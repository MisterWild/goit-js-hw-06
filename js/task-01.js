const countCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategoriesEl.length}`);
console.log();

const tittleEl = document.querySelectorAll(".item h2");
tittleEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
  console.log();
});