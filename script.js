const buttons = document.querySelector(".buttons");
const numInputs = buttons.querySelectorAll(".numbers");
const equalsButton = buttons.querySelector("#calcEquals");
const addButton = buttons.querySelector("#calcAdd");
let storedValue = "";
let firstNum = "";
let secondNum = "";
let operator = undefined;
let display = document.querySelector("#calcDisplay");
let displayValue = "000000000";

function populateDisplay(nums) {
  let dig = document.createElement("div");
  display.insertAdjacentElement("beforeend", dig);
  dig.textContent = nums;
  dig.style.fontSize = "30px";
  dig.className = "digits";
}

populateDisplay(displayValue);

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
  divs.textContent = "";

  divs.forEach((div) => div.remove());
  populateDisplay(value);
});

equalsButton.addEventListener("click", () => {
  let dig = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < dig.length; i++) {
    arr.push(dig[i].innerHTML);
  }

  arr.splice(0, 1);
  let joined = arr.join("");

  secondNum = Number(joined);

  let result = operate(storedValue, secondNum, operator);
  dig.forEach((div) => div.remove());
  populateDisplay(result)
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

function operate(first, second, operate) {
  if (operate == "+") {
    let result = add(first, second);
    return(result);
  } else if (operate == "-") {
    let result = subtract(first, second);
    return(result);
  } else if (operate == "*") {
    let result = multiply(first, second);
    return(result);
  } else if (operate == "/") {
    let result = divide(first, second);
    return(result);
  } else {
    return("ERRR");
  }
}
