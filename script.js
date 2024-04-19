const display = document.querySelector(".display");
display.textContent = '';

var firstNum = 0;

var secondNum = 0;

var operator;

var secondOperator;

function add(a, b) {
    if (secondOperator = undefined) {
        display.textContent = parseInt(a) + parseInt(b);
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = 0;
    }
    else {
        display.textContent = parseInt(a) + parseInt(b);
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = 0;
        secondOperator = undefined;
    }
}

function subtract(a , b) {
    if (secondOperator = undefined) {
        display.textContent = parseInt(a) - parseInt(b);
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = 0;
    }
    else {
        display.textContent = parseInt(a) - parseInt(b);
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = 0;
        secondOperator = undefined;
    }
}

function multiply(a, b) {
    if (secondOperator = undefined) {
        display.textContent = parseInt(a) * parseInt(b);
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = 0;
    }
    else {
        display.textContent = parseInt(a) * parseInt(b);
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = 0;
        secondOperator = undefined;
    }
}

function divide(a, b) {
    if (secondOperator = undefined) {
        display.textContent = parseInt(a) / parseInt(b);
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = 0;
    }
    else {
        display.textContent = parseInt(a) / parseInt(b);
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = 0;
        secondOperator = undefined;
    }
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

const numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => {
    button.addEventListener("click", numClick);
})
function numClick(event) {
    if (operator == undefined) {
        display.textContent += event.target.textContent;
    }
    else {
        secondOperator = operator;
        display.textContent = '';
        display.textContent += event.target.textContent;
    }
}

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", operatorClick);
})
function operatorClick(event) {
    if (operator == undefined) {
        firstNum = display.textContent;
        operator = event.target.id;
        display.textContent = '';
    }
    else {
        secondOperator = event.target.id;
        secondNum = display.textContent;
        operate(firstNum, secondNum);
    }
}

const equalOperator = document.querySelector("#equal");
equalOperator.addEventListener("click", () => {
    secondNum = display.textContent;
    operate(firstNum, secondNum);
    // debugger
})