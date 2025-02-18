const input = document.getElementById("input");

//Variables
const operators = ['-', '+', '%', '*', '/'];
let operations = [];
let currValue = '';

//Functions & operations

//Handle interactions

function handleInteraction(value) {
    console.log(value);
    if (operators.includes(value)) {
        console.log('Clicked on operator: ', value);
        handleOperatorInput(value);
    }
    else {
        console.log('Clicled on numeric value: ', value);
        handleNumericInput(value);
    }
    updateUI();
}

function handleNumericInput(value) {
    currValue += value
}

function handleOperatorInput(value) {
    if (!currValue)
        return;

    operations.push(currValue);
    operations.push(value);
    currValue = '';
}

function handleEvaluate() {
    if (operations.length === 0)
        return;
    if (!currValue) {
        operations.pop();
    }
    else {
        operations.push(currValue);
    }
    
    currValue = eval(operations.join('')).toString();
    operations = [];
    updateUI();
}

function handleReset() {
    currValue = '';
    operations = [];
    updateUI()
}

function handleErase() {
    if (!currValue)
        operations.pop();
    
    currValue = currValue.slice(0, -1);
    updateUI();
}

function updateUI() {
    const displayString = operations.join(' ') + ' ' + currValue;
    input.innerText = displayString.trim() ? displayString : '0';
}