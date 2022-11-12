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
let runningTotal;

const displayText = document.querySelector('#display-text');

const numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (true) {
      case (!(secondNum === 0)):
        displayText.textContent = '';
        displayText.textContent += `${button.textContent}`;
        secondNum = displayText.textContent;
      case (displayText.textContent === '+'):
      case (displayText.textContent === '-'):
      case (displayText.textContent === '*'):
      case (displayText.textContent === '/'):
        displayText.textContent = '';
        displayText.textContent += `${button.textContent}`;
        displayValue = displayText.textContent;
        break;
    default:
        displayText.textContent += `${button.textContent}`;
        displayValue = displayText.textContent;
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () =>{
    switch (true) {
      case (operator === '+'):
      case (operator === '-'):
      case (operator === '*'):
      case (operator === '/'):
        secondNum = parseInt(displayValue);
        runningTotal = operate(operator, firstNum, secondNum);
        displayText.textContent = `${runningTotal}`;
        firstNum = runningTotal;
        operator = button.textContent;
        break;
      default:
        firstNum = parseInt(displayValue);
        displayText.textContent = `${button.textContent}`;
        operator = displayText.textContent;
    }
  });
});

const equalButton = document.querySelector('#btn-equals');
equalButton.addEventListener('click', () => {
  secondNum = parseInt(displayValue);
  displayValue = operate(operator, firstNum, secondNum);
  displayText.textContent = displayValue;
});

const clearButton = document.querySelector('#btn-c');
clearButton.addEventListener('click', () => {
  displayText.textContent = '';
  firstNum = 0;
  secondNum = 0;
  operator = '';
  displayValue = 0;
} )