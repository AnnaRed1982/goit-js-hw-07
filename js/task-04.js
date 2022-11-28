// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const counterValueREF = document.querySelector('#value');

const setCounterValue = (action, value) => {
  const buttonActionREF = document.querySelector(`button[data-action=${action}]`);
  buttonActionREF.addEventListener('click', () => {
    counterValue += value;
    counterValueREF.textContent = counterValue;
  });
};
setCounterValue('decrement', -1);
setCounterValue('increment', 1);

// const buttonDecrReF = document.querySelector('button[data-action="decrement"]');
// buttonDecrReF.addEventListener('click', () => {
//   counterValue -= 1;
//   counterValueREF.textContent = counterValue;
// });

// const buttonIncrReF = document.querySelector('button[data-action="increment"]');
// buttonIncrReF.addEventListener('click', () => {
//   counterValue += 1;
//   counterValueREF.textContent = counterValue;
// });
