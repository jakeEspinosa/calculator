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