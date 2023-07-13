const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
const categoriesCount = categoriesItems.length;
  console.log(`Number of categories: ${categoriesCount}`);

categoriesItems.forEach((item) => {

  const categoriesTitle = item.querySelector("h2").textContent;
  const categoriesElemntsCounts = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesElemntsCounts}`);
});
