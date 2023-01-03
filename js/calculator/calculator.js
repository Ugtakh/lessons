// Variables
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const display = document.querySelector(".input");
const acBtn = document.querySelector(".clearBtn");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".deleteBtn");
let currentOperator = null;
let firstNum = null;
let secondNum = null;
let resetDisplay = false;
let result = null;

// Arithmatic operator functions
const add = (x, y) => {
  return parseFloat(x) + parseFloat(y);
};

const subtract = (x, y) => {
  return parseFloat(x) - parseFloat(y);
};

const divide = (x, y) => {
  return parseFloat(x) / parseFloat(y);
};

const multiply = (x, y) => {
  return parseFloat(x) * parseFloat(y);
};

// View functions
const renderDisplay = (text) => {
  display.value += text;
};

const clearDisplay = () => {
  display.value = "";
};

const reset = () => {
  firstNum = null;
  secondNum = null;
  currentOperator = null;
  clearDisplay();
};

function getValues() {
  return display.value;
}

function setOperand(value) {
  if (firstNum == null) {
    firstNum = value;
  } else {
    secondNum = value;
  }
}

function calculateResult() {
  if (firstNum && currentOperator && !resetDisplay && !secondNum) {
    setOperand(getValues());
    return operation(
      parseFloat(firstNum),
      parseFloat(secondNum),
      currentOperator
    );
  }
  return result;
}

function setTheOperator(operator) {
  if (currentOperator == null) {
    currentOperator = operator;
  } else if (firstNum && secondNum) {
    result = operation(
      parseFloat(firstNum),
      parseFloat(secondNum),
      currentOperator
    );
    console.log(result);
    clearDisplay();
    renderDisplay(result);
    firstNum = result;
    secondNum = null;
    currentOperator = operator;
  }
}

function operation(x, y, operator) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "/") {
    return divide(x, y).toFixed(5);
  } else if (operator === "*") {
    return multiply(x, y);
  } else {
    return null;
  }
}

// Connect event listener numbers buttons
numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (resetDisplay) {
      clearDisplay();
    }
    renderDisplay(value);
    resetDisplay = false;
  });
});

// Connect event listener operator buttons
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const keyText = e.target.innerText;
    setOperand(getValues());
    setTheOperator(keyText);
    resetDisplay = true;
  });
});

// Connect event listener ac buttons
acBtn.addEventListener("click", () => {
  reset();
});

// Connect event listener equal buttons
equalBtn.addEventListener("click", () => {
  console.log("equal");
  result = calculateResult();
  clearDisplay();
  console.log("equal", result);
  if (result) {
    renderDisplay(result);
  }
});

// Connect event listener delete buttons
deleteBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
