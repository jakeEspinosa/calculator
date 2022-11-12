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
let operator = null;
let runningTotal = NaN;

const displayText = document.querySelector('#display-text');

const numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (true) {
      case (secondNum !== 0):
        displayText.textContent = `${button.textContent}`;
        secondNum = displayText.textContent;
        break;
      case (displayText.textContent === operator):
        displayText.textContent = '';
        displayText.textContent += `${button.textContent}`;
        break;
    default:
        displayText.textContent += `${button.textContent}`;
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () =>{
    switch (true) {
      case (!(operator === null)):
        secondNum = parseInt(displayText.textContent);
        if (isNaN(secondNum)) {
          secondNum = 0;
          firstNum = 0;
        }
        runningTotal = operate(operator, firstNum, secondNum);
        if (runningTotal === 0) {
          displayText.textContent = '';
        } else {
          displayText.textContent = `${runningTotal}`;
        }
        firstNum = runningTotal;
        operator = button.textContent;
        break;
      default:
        firstNum = parseInt(displayText.textContent);
        displayText.textContent = `${button.textContent}`;
        operator = displayText.textContent;
    }
  });
});

const equalButton = document.querySelector('#btn-equals');
equalButton.addEventListener('click', () => {
  if (secondNum === 0 && operator === '/') {
    displayText.textContent = 'Can\'t divide by zero';
    return;
  }
  secondNum = parseInt(displayText.textContent);
  displayText.textContent = operate(operator, firstNum, secondNum);
});

const clearButton = document.querySelector('#btn-c');
clearButton.addEventListener('click', () => {
  displayText.textContent = '';
  firstNum = 0;
  secondNum = 0;
  operator = null;
} )