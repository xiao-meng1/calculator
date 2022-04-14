handleButtons();

function handleButtons() {
    addButtonEvents();

    let num1 = "";
    let num2 = "";
    let operator = "";

    function addButtonEvents() {
        const numberButtons = document.querySelectorAll(".number-button");
        numberButtons.forEach((button) => {
            button.addEventListener("click", numberButtonClick);
        });

        const operatorButton = document.querySelectorAll(".operator-button");
        operatorButton.forEach((button) => {
            button.addEventListener("click", operatorButtonClick);
        });

        const equalsButton = document.querySelector("#equals-button");
        equalsButton.addEventListener("click", equalsButtonClick);

        const clearButton = document.querySelector("#clear-button");
        clearButton.addEventListener("click", clearButtonClick);

        const deleteButton = document.querySelector("#delete-button");
        deleteButton.addEventListener("click", deleteButtonClick);
    }

    function numberButtonClick(e) {
        display = document.querySelector("#display");
        if (display.innerText === "SYNTAX ERROR") return;
        
        if (e.target.innerText === "(-)") {
            display.innerText += "-";
        } else {
            display.innerText += e.target.innerText;
        }
    }

    function operatorButtonClick(e) {
        display = document.querySelector("#display");
        if (display.innerText === "SYNTAX ERROR") return;
        
        if (num1 !== "" && operator !== "") {
            equalsButtonClick();
        }
        
        if (display.innerText === "SYNTAX ERROR") return;

        num1 = display.innerText;
        operator = e.target.innerText;
        display.innerText += e.target.innerText;
    }

    function equalsButtonClick() {
        display = document.querySelector("#display");
        if (display.innerText === "SYNTAX ERROR") return;

        num2 = display.innerText.slice(num1.concat(operator).length);
        if (num2 === "") return;

        const result = operate(operator, num1, num2);
        display.innerText = (checkIsNumber(result) === true) ? roundResult(result) : "SYNTAX ERROR";

        num1 = "";
        num2 = "";
        operator = "";
    }

    function clearButtonClick() {
        display = document.querySelector("#display");
        display.innerText = "";
        let num1 = "";
        let num2 = "";
        let operator = "";
    }

    function deleteButtonClick() {
        display = document.querySelector("#display");
        if (display.innerText === "SYNTAX ERROR") return;

        display.innerText = display.innerText.slice(0, -1);
        let operatorList = ["+", "-", "x", "%"];
        
        if (operatorList.includes(display.innerText.slice(-1))) {
            operator = display.innerText.slice(-1);
            console.log(true)
        } else {
            operator = "";
        }
    }
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "%":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function checkIsNumber(input) {
    if (isNaN(input)) return false;
    return (typeof Number(input) === "number") ? true : false;
}

function roundResult(result) {
    result = result.toString();
    if (result.length < 9) return result;

    const decimalIndex = result.indexOf(".");
    let multiplier = "1";
    let roundedResult;

    if (decimalIndex < 9 && decimalIndex > 0) {
        for (let i = 0; i < (9 - decimalIndex); i++) {
            multiplier += "0";
        }
        roundedResult = Math.round(result * multiplier) / multiplier;
    } else {
        roundedResult = Number(result).toExponential(4);
    }
    
    return roundedResult;
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}