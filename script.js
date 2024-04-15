const display = document.querySelector(".display");
function add(a, b) {
    display.textContent = a + b;
}

function subtract(a , b) {
    display.textContent = a - b;
}

function multiply(a, b) {
    display.textContent = a * b;
}

function divide(a, b) {
    display.textContent = a / b;
}

function operate(num1, num2) {
    if (operator == "add") {
        add(num1, num2);
    }
    else if (operator == "subtract") {
        subtract(num1, num2);
    }
    else if (operator == "mulitply") {
        multiply(num1, num2);
    }
    else if (operator == "divide") {
        divide(num1, num2);
    }
}

var firstNum = 0;

var secondNum = 0;

var operator;



display.textContent = '';
const numButtons = document.querySelectorAll(".number");

function numClick(event) {
    display.textContent += event.target.textContent;
}

numButtons.forEach(button => {
    button.addEventListener("click", numClick);
})

function operatorClick(event) {
    firstNum = display.textContent;
    console.log(firstNum);
    operator = event.target.id;
    // console.log(operator);
    display.textContent = '';
    // console.log(operator);
    // console.log(firstNum);
}

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", operatorClick);
})

const equalOperator = document.querySelector("#equal")
equalOperator.addEventListener("click", () => {
    secondNum = display.textContent;
    console.log(secondNum)
    operate(firstNum, secondNum);
})