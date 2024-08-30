const buttons = document.querySelector(".buttons");
const numInputs = buttons.querySelectorAll(".numbers");
const equalsButton = buttons.querySelector("#calcEquals");
const addButton = buttons.querySelector("#calcAdd");
const minusButton = buttons.querySelector("#calcMinus");
const multiplyButton = buttons.querySelector("#calcMultiply");
const divideButton = buttons.querySelector("#calcDivide");
const clearButton = buttons.querySelector("#calcClear");
const undoButton = buttons.querySelector("#calcUndo");
const decimalButton = buttons.querySelector("#calcDecimal")

let storedAnswer = "";
let storedValue = "";
let storedValueEqual = "";
let firstNum = "";
let secondNum = "";
let operator = undefined;

let display = document.querySelector("#calcDisplay");

//Functions

function undo() {
  let divs = display.querySelectorAll("div");
  let arr = []
  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }

  let result = arr.toString()
    .replace(/,/g,"")
    .slice(0, -1)
    divs.forEach((div) => div.remove());
    populateDisplay(result)
}

function clearAll() {
  let divs = display.querySelectorAll("div");
  divs.forEach((div) => div.remove());
  storedValue = "";
  storedValueEqual = "";
  firstNum = "";
  secondNum = "";
  operator = undefined;
  populateDisplay("");
}


function populateDisplay(nums) {
  let dig = document.createElement("div");
  display.insertAdjacentElement("beforeend", dig);
  dig.textContent = nums;
  dig.style.fontSize = "30px";
  dig.className = "digits";
}

function numControl(input) {
  let digit = display.querySelectorAll(".digits");
  if (digit.length <= 9 && storedValueEqual == "") {
    let value = (firstNum += input.innerHTML);
    populateDisplay(value);
    firstNum = "";
  } else if (digit.length <= 9 && storedValueEqual != "") {
    digit.forEach((div) => div.remove());
    let value = (firstNum += input.innerHTML);
    populateDisplay(value);
    firstNum = "";
    storedValueEqual = "";
  }
value = "";
}

//Operations 

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

//Operator

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

//Button Events
document.addEventListener("keydown", function(e) {
  if (e.key == 1) {
document.getElementById("one").click()
  }
  if (e.key == 2) {
    document.getElementById("two").click()
  }if (e.key == 3) {
    document.getElementById("three").click()
  }if (e.key == 4) {
    document.getElementById("four").click()
  }if (e.key == 5) {
    document.getElementById("five").click()
  }if (e.key == 6) {
    document.getElementById("six").click()
  }if (e.key == 7) {
    document.getElementById("seven").click()
  }if (e.key == 8) {
    document.getElementById("eight").click()
  }if (e.key == 9) {
    document.getElementById("nine").click()
  }if (e.key == 0) {
    document.getElementById("zero").click()

  }if (e.key == "+") {
    document.getElementById("calcAdd").click()
  }if (e.key == "-") {
    document.getElementById("calcMinus").click()
  }if (e.key == "x") {
    document.getElementById("calcMultiply").click()
  }if (e.key == "/") {
    document.getElementById("calcDivide").click()
  }if (e.key == "=") {
    document.getElementById("calcEquals").click()
  }if (e.key == ".") {
    document.getElementById("calcDecimal").click()
  }if (e.key == "Backspace") {
    document.getElementById("calcUndo").click()
  }if (e.key == "Escape") {
    document.getElementById("calcClear").click()
  }
})


decimalButton.addEventListener("click",() => {
decimalState = true
})

undoButton.addEventListener("click", () => {
  undo();
})

clearButton.addEventListener("click", () => {
  clearAll();
});

divideButton.addEventListener("click", () => {
  let divs = display.querySelectorAll("div");
  let arr = [];

  for (let i = 0; i < divs.length; i++) {
    arr.push(divs[i].innerHTML);
  }
  
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

  let joined = arr.join("");

  secondNum = Number(joined);

  let result = operate(storedValue, storedValueEqual, secondNum, operator);
  let resultRounded = +result.toFixed(3)
  let resultString = resultRounded.toString();
  let digits = resultString.split("");

  if (digits.length <= 9) {
    divs.forEach((div) => div.remove());
    populateDisplay(resultRounded);
    storedValueEqual = result;
  } else {
    divs.forEach((div) => div.remove());
    populateDisplay("ERR");
  }
});

numInputs.forEach((input) => {
  input.addEventListener("click", () => {
    numControl(input)
  });
});

