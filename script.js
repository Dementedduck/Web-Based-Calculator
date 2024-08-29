const buttons = document.querySelector(".buttons");
const numInputs = buttons.querySelectorAll(".numbers");
const equalsButton = buttons.querySelector("#calcEquals");
const addButton = buttons.querySelector("#calcAdd");
const minusButton = buttons.querySelector("#calcMinus");
const multiplyButton = buttons.querySelector("#calcMultiply");
const divideButton = buttons.querySelector("#calcDivide");
const clearButton = buttons.querySelector("#calcClear");
let storedValue = "";
let storedValueEqual = "";
let firstNum = "";
let secondNum = "";
let operator = undefined;

let display = document.querySelector("#calcDisplay");

let displayValue = "000000000";
populateDisplay(displayValue);

function clearAll() {
  let divs = display.querySelectorAll("div");
  divs.forEach((div) => div.remove());
  storedValue = "";
  storedValueEqual = "";
  firstNum = "";
  secondNum = "";
  operator = undefined;
  displayValue = "000000000";
  populateDisplay(displayValue);
}

function populateDisplay(nums) {
  let dig = document.createElement("div");
  display.insertAdjacentElement("beforeend", dig);
  dig.textContent = nums;
  dig.style.fontSize = "30px";
  dig.className = "digits";
}

clearButton.addEventListener("click", () => {
  clearAll();
});

divideButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }
  arr.splice(0, 1);
  let joined = arr.join("");
  storedValue = Number(joined);
  operator = "/";

  divs.forEach((div) => div.remove());
  populateDisplay(value);
});

multiplyButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }
  arr.splice(0, 1);
  let joined = arr.join("");
  storedValue = Number(joined);
  operator = "*";

  divs.forEach((div) => div.remove());
  populateDisplay(value);
});

minusButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }
  arr.splice(0, 1);
  let joined = arr.join("");
  storedValue = Number(joined);
  operator = "-";

  divs.forEach((div) => div.remove());
  populateDisplay(value);
});

addButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }

  arr.splice(0, 1);
  let joined = arr.join("");
  storedValue = Number(joined);
  operator = "+";

  divs.forEach((div) => div.remove());
  populateDisplay(value);
});

equalsButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }

  arr.splice(0, 1);
  let joined = arr.join("");

  secondNum = Number(joined);

  let result = operate(storedValue, storedValueEqual, secondNum, operator);
  let resultString = result.toString();
  let digits = resultString.split("");

  if (digits.length <= 9) {
    divs.forEach((div) => div.remove());
    populateDisplay(result);

    storedValueEqual = result;
  } else {
    divs.forEach((div) => div.remove());
    populateDisplay("ERR");
  }
});

numInputs.forEach((input) => {
  input.addEventListener("click", () => {
    let digit = display.querySelectorAll(".digits");

    if (digit.length <= 9) {
      let value = (firstNum += input.innerHTML);
      let dig = display.querySelector("div");
      dig.textContent = "";
      populateDisplay(value);
      firstNum = "";
    }
    value = "";
  });
});

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

function operate(first, firstOptional, second, operate) {
  if (operate == "+" && storedValueEqual == "") {
    let result = add(first, second);
    return result;
  } else if (operate == "-" && storedValueEqual == "") {
    let result = subtract(first, second);
    return result;
  } else if (operate == "*" && storedValueEqual == "") {
    let result = multiply(first, second);
    return result;
  } else if (operate == "/" && storedValueEqual == "") {
    let result = divide(first, second);
    return result;
  } else if (operate == "+" && storedValueEqual !== "") {
    let result = add(firstOptional, second);
    return result;
  } else if (operate == "-" && storedValueEqual !== "") {
    let result = subtract(firstOptional, second);
    return result;
  } else if (operate == "*" && storedValueEqual !== "") {
    let result = multiply(firstOptional, second);
    return result;
  } else if (operate == "/" && storedValueEqual !== "") {
    let result = divide(firstOptional, second);
    return result;
  } else {
    return "ERRR";
  }
}
