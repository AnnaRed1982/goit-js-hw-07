// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsREF = document.querySelector('#ingredients');

const ingridientsList = ingredients => {
  return ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.textContent = ingredient;
    element.classList.add('item');
    console.log(element);
    return element;
  });
};

const ingredientsNew = ingridientsList(ingredients);
listIngredientsREF.append(...ingredientsNew);

// const list = document.querySelector('#ingredients');
// const ingredientsNew = ingredients.map((ingred) =>`<li class="item">${ingred}</li>`).join("");
// list.innerHTML = ingredientsNew;

// const listREF = document.querySelector('#ingredients');
// const ingridient = elem => {
//   const element = document.createElement('li');
//   element.textContent = elem;
//   element.classList.add('item');
//   console.log(element);
//   return element;
// };
// const ingredientsNew = ingredients.map(elem => ingridient(elem));
// listREF.append(...ingredientsNew);
