const display = document.querySelector(".display");
display.textContent = '';

var firstNum = null;

var secondNum = null;

var operator = undefined;

var secondOperator = undefined;

var i = null;

function add(a, b) {
    if (secondOperator == undefined) {
        display.textContent = Math.round((parseFloat(a) + parseFloat(b))*10000000)/10000000;
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = null;
    }
    else {
        display.textContent = Math.round((parseFloat(a) + parseFloat(b))*10000000)/10000000;
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = null;
        secondOperator = undefined;
        i = true;
    }
}

function subtract(a , b) {
    if (secondOperator == undefined) {
        display.textContent = Math.round((parseFloat(a) - parseFloat(b))*10000000)/10000000;
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = null;
    }
    else {
        display.textContent = Math.round((parseFloat(a) - parseFloat(b))*10000000)/10000000;
        firstNum = display.textContent;
        operator = secondOperator;
        console.log(operator);
        secondNum = null;
        secondOperator = undefined;
        i = true;
    }
}

function multiply(a, b) {
    if (secondOperator == undefined) {
        display.textContent = Math.round((parseFloat(a) * parseFloat(b))*10000000)/10000000;
        operator = undefined;
        console.log(operator)
        firstNum = display.textContent;
        secondNum = null;
    }
    else {
        display.textContent = Math.round((parseFloat(a) * parseFloat(b))*10000000)/10000000;
        firstNum = display.textContent;
        operator = secondOperator;
        secondNum = null;
        secondOperator = undefined;
        i = true;
    }
}

function divide(a, b) {
    if (parseInt(b) == 0) {
        display.textContent = "ERROR";
    }
    else {
        if (secondOperator == undefined) {
            display.textContent = Math.round((parseFloat(a) / parseFloat(b))*10000000)/10000000;
            operator = undefined;
            console.log(operator)
            firstNum = display.textContent;
            secondNum = null;
        }
        else {
            display.textContent = Math.round((parseFloat(a) / parseFloat(b))*10000000)/10000000;
            firstNum = display.textContent;
            operator = secondOperator;
            secondNum = null;
            secondOperator = undefined;
            i = true;
        }
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
    if (display.textContent == "ERROR") {
        display.textContent = '';
        firstNum = null;
        secondNum = null;
        operator = undefined;
        secondOperator =  undefined;
    }

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
    if ((operator !== undefined) && (firstNum !== null) && (display.textContent !== '')) {
        secondNum = display.textContent;
        operate(firstNum, secondNum);
    }
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = '';
    firstNum = null;
    secondNum = null;
    operator = undefined;
    secondOperator =  undefined;
});

// const backSpaceButton = document.querySelector("#backspace")
// backSpaceButton.addEventListener("click", () => {
//     let arr = display.textContent.split('');
//     arr.pop();
//     display.textContent = arr.join("");
// });

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", (event) => {
    let arr = display.textContent.split('');
    if (arr.includes(".") == false) {
        display.textContent += event.target.textContent;
    }
});

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click", () => {
    display.textContent = Math.round((parseFloat(display.textContent) * .01) * 10000000) / 10000000;
})

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", () => {
    if (display.textContent !== '') {
        display.textContent *= -1;
    } 
})