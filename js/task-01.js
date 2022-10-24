"use strict";
const categoriesList = document.querySelector("#categories");
const quantityCategoriesItem = categoriesList.children.length;
console.log(`Number of categories: ${quantityCategoriesItem}`);

const categoriesItems = document.querySelectorAll(".item");

for (let i = 0; i < quantityCategoriesItem; i++) {
  const categoriesTitle = categoriesItems[i].firstElementChild;
  const categoryUnits = categoriesItems[i].querySelectorAll("li").length;
  console.log(
    `Category: ${categoriesTitle.textContent}\n Elements: ${categoryUnits}`
  );
}
