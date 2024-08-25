let firstNum = undefined;
let secondNum = undefined;
let operator = "+";



function add (a, b) {
    return (a + b)
}

function subtract (a,b) {
    return (a - b)
}

function multiply (a,b) {
    return (a * b)
}

function divide (a,b) {
    return (a / b)
}

function operate(first, second, operate) {
if (operate == "+") {
    let result = add (first, second); 
    console.log(result) 
}
else if (operate == "-") {
    let result = subtract(first, second);
    console.log(result)
}
else if (operate == "*") {
    let result =  multiply(first, second);
    console.log(result)
}
else if (operate == "/") {
    let result = divide(first, second);
    console.log(result)
} else {
    (console.log("ERRR"))
}

}

