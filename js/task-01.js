const categoriesREF = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesREF.length);

categoriesREF.forEach(elem => {
  const titleREF = elem.firstElementChild;
  console.log('Category: ', titleREF.textContent);

  const elementsREF = elem.lastElementChild.children;
  console.log('Elements:', elementsREF.length);
});
// const title = elem.querySelector('h2');
// const elements = elem.querySelectorAll('li');