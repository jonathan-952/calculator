const display = document.querySelector(".display");
display.textContent = '';

var firstNum = 0;

var secondNum = 0;

var operator = undefined;

var secondOperator = undefined;

var i = null;

function add(a, b) {
    if (secondOperator == undefined) {
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
        i = true;
    }
}

function subtract(a , b) {
    if (secondOperator == undefined) {
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
        console.log(operator);
        secondNum = 0;
        secondOperator = undefined;
        i = true;
    }
}

function multiply(a, b) {
    if (secondOperator == undefined) {
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
        i = true;
    }
}

function divide(a, b) {
    if (secondOperator == undefined) {
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
        i = true;
    }
}

function operate(num1, num2) {
    if (operator == "add") {
        add(num1, num2);
    }
    else if (operator == "subtract") {
        subtract(num1, num2);
    }
    else if (operator == "multiply") {
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
        if (i == true) {
            display.textContent = '';
        }
        i = false;
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
        console.log(secondOperator);
        secondNum = display.textContent;
        operate(firstNum, secondNum);
    }
}

const equalOperator = document.querySelector("#equal");
equalOperator.addEventListener("click", () => {
    secondNum = display.textContent;
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
    // all variables are being stored correctly
    // operate is not working, this seems to be the bug
    operate(firstNum, secondNum);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = '';
    firstNum = 0;
    secondNum = 0;
    operator = undefined;
    secondOperator =  undefined;
});