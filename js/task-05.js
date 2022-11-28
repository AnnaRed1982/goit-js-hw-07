// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInputREF = document.querySelector('#name-input');
const nameOutputREF = document.querySelector('#name-output');

nameInputREF.addEventListener('input', event => {
  const name = event.currentTarget.value;
  nameOutputREF.textContent = name;

  if (name === '') {
    nameOutputREF.textContent = 'Anonymous';
  }
});

// const nameInputValue = nameInputREF.value;
// console.log(nameInputREF.value);

// const nameOutputREF = document.querySelector('#name-output');
// nameOutputREF.textContent = nameInputValue;
// console.log(nameOutputREF)

