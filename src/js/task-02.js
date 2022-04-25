const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;

  return itemEl;    
});
console.log(ingredientsEl)

  const listEl = document.querySelector('#ingredients');
listEl.append(...ingredientsEl);
  // console.log(listEl);
