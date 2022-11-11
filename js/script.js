function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (true) {
    case (operator === '+'):
      return add(a, b);
      break;
    case (operator === '-'):
      return subtract(a, b);
      break;
    case (operator === '*'):
      return multiply(a, b);
      break;
    case (operator === '/'):
      return divide(a, b);
      break;
  }
}

let firstNum = 0;
let secondNum = 0;
let operator;
let displayValue = 0;

const displayText = document.querySelector('#display-text');

const numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    displayText.textContent += `${button.textContent}`;
    displayValue = displayText.textContent;
  });
});