const buttons = document.querySelector(".buttons");
const inputs = buttons.querySelectorAll(".numbers");
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

inputs.forEach((input) => {
  input.addEventListener("click", function () {
    let digit = display.querySelectorAll(".digits");
    let displayLength = digit.length;

    if (displayLength <= 9) {
      let value = (firstNum += input.innerHTML);
      let dig = display.querySelector("div");
      dig.textContent = "";
      populateDisplay(value);
      firstNum = "";
    }
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
    console.log(result);
  } else if (operate == "-") {
    let result = subtract(first, second);
    console.log(result);
  } else if (operate == "*") {
    let result = multiply(first, second);
    console.log(result);
  } else if (operate == "/") {
    let result = divide(first, second);
    console.log(result);
  } else {
    console.log("ERRR");
  }
}
