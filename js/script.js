/* 
Author: Jake Espinosa
Contact: jacob.sa.espinosa@gmail.com
*/

// Begin function defintions.
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

function modulus(a, b) {
  return a % b;
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
    case (operator === '%'):
      return modulus(a, b);
      break;
  }
}
// End function definitions.

// Begin global variable declaration.
let firstNum = 0;
let secondNum = 0;
let operator = null;
let runningTotal = NaN;

const displayText = document.querySelector('#display-text');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.btn');
const equalButton = document.querySelector('#btn-equals');
const clearButton = document.querySelector('#btn-c');
const delButton = document.querySelector('#btn-del');
const dotButton = document.querySelector('#btn-dot');
const signButton = document.querySelector('#btn-sign');
// End global variable declaration.

numberButtons.forEach((button) => {
/* Accounts for entering the first number and all subsequent numbers,
   and for the number limit of 15 digits. */
  button.addEventListener('click', () => {
    switch (true) {
      case (displayText.textContent.length > 15):
        return;
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


operatorButtons.forEach((button) => {
/* Accounts for pressing an operator with no number entered (once or
  repeatedly, performing a series of operations (one at a time), and
  for normal use. */
  button.addEventListener('click', () =>{
    switch (true) {
      case (!(operator === null)):
        secondNum = parseFloat(displayText.textContent);
        if (isNaN(secondNum)) {
          secondNum = 0;
          firstNum = 0;
        }
        runningTotal = operate(operator, firstNum, secondNum);
        if (runningTotal === 0) {
          displayText.textContent = 'Only use one operator';
        } else {
          displayText.textContent = `${runningTotal}`;
        }
        firstNum = runningTotal;
        operator = button.textContent;
        break;
      default:
        firstNum = parseFloat(displayText.textContent);
        displayText.textContent = `${button.textContent}`;
        operator = displayText.textContent;
    }
  }); 
});

equalButton.addEventListener('click', () => {
/* Accounts for regular use, entering an operator and then pressing =,
   entering nothing and then pressing =, if the result is longer than
   15 digits, and rounding decimals that are longer than 15 digits. */
  secondNum = parseFloat(displayText.textContent);
  switch (true) {
    case ((isNaN(firstNum) || isNaN(secondNum))):
      return;
    case (secondNum === 0 && operator === '/'):
      displayText.textContent = 'Can\'t divide by zero';
      return;
    default: 
    result = operate(operator, firstNum, secondNum);
    if (result === undefined) {
      return;
    }
    if ((result.toString().length > 15) && (result % 1 !== 0)) {
      result = Math.round(result * 10000) / 10000;
      displayText.textContent = result;
    } else if ((result.toString().length > 15) && (result % 1 === 0)) {
      displayText.textContent = 'Error: please use smaller numbers';
    } else {
      result = operate(operator, firstNum, secondNum);
      displayText.textContent = result;
    }
  }
});

clearButton.addEventListener('click', () => {
  displayText.textContent = '';
  firstNum = 0;
  secondNum = 0;
  operator = null;
});

delButton.addEventListener('click', () => {
  if (parseFloat(displayText.textContent) < 0) {
    display = displayText.textContent.slice(1);
    displayText.textContent = display;
  } else {
    display = displayText.textContent.slice(0, -1);
    displayText.textContent = display;
  }
});

dotButton.addEventListener('click', () => {
/* Only allows one decimal place to be added.*/
  if (displayText.textContent.includes('.')) {
    return;
  } else if (displayText.textContent === operator) {
    displayText.textContent = '';
    displayText.textContent += '.';
  } else {
    displayText.textContent += '.';
  }
})

signButton.addEventListener('click', () => {
/* Does not make zero negative and can handle an operator being
   made negative. */
  switch (true) {
    case (displayText.textContent === ''):
    case (displayText.textContent === 0):
    case (displayText.textContent === operator):
      return;
    default:
      numberToSwitch = displayText.textContent;
      if (numberToSwitch > 0) {
        displayText.textContent = -Math.abs(numberToSwitch);
      } else {
        displayText.textContent = Math.abs(numberToSwitch);
      }
  }
});