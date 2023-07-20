const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ul = document.querySelector("ingredients");
// ingredients.forEach(function(ingredient) {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.appendChild(li);
// });


const ulElements = document.createElement("ul");
for (const ingredient of ingredients) {
  const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    liElement.classList.add("item");
    ulElements.appendChild(liElement);
}
document.body.appendChild(ulElements);