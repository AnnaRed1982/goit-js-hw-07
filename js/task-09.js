// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
};

ref.button.addEventListener('click', onButtonClickChangeCol);

function onButtonClickChangeCol() {
  ref.body.style.backgroundColor = getRandomHexColor();
  console.log(ref.body.style.backgroundColor);
  ref.color.textContent = ref.body.style.backgroundColor;
}

// const buttonREF = document.querySelector('.change-color');
// console.log(buttonREF);
// const colorREF = document.querySelector('.color');
// console.log(colorREF);
// const bodyREF = document.querySelector('body');
// console.log(bodyREF);
