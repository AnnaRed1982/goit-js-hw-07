// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов
//  в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const ref = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const newDivArray = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    newDivArray.push(newDiv);
    size += 10;
  }
  ref.boxes.append(...newDivArray);
}

function destroyBoxes() {
  ref.boxes.innerHTML = '';
}

ref.input.addEventListener('blur', event => {
  let amount = Number(event.currentTarget.value);

  ref.buttonCreate.addEventListener('click', () => {
    createBoxes(amount);
    amount = 0;
  });
  ref.input.value = '';
});

ref.buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});
