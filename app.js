addButtonEvents();


function addButtonEvents() {
    const numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach((button) => {
        button.addEventListener("click", numberButtonClick);
    });

    const operatorButton = document.querySelectorAll(".operator-button");
    operatorButton.forEach((button) => {
        button.addEventListener("click", operatorButtonClick);
    });
}

function numberButtonClick(e) {
    display = document.querySelector("#display");
    display.innerText += e.target.innerText;
}

function operatorButtonClick(e) {
    display = document.querySelector("#display");
    display.innerText += e.target.innerText;
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}