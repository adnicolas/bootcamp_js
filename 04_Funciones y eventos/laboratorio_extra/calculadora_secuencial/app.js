const resultElement = document.getElementById("result");
let result = null;
let lastOperation = '';
const updateResult = (operation) => {
    const currentValue = parseFloat(document.getElementById('numA').value);
    if (isNaN(currentValue)) {
        alert('Error, introduzca un nº');
    }
    if (!result) {
        result = currentValue;
    } else {
        switch (operation) {
            case 'add':
                result = result + currentValue;
                break;
            case 'subtract':
                result = result - currentValue;
                break;
            case 'multiply':
                result = result * currentValue;
                break;
            case 'divide':
                result = result / currentValue;
                break;
        } 
    }
} 
 
const add = () => {
    updateResult(lastOperation);
    lastOperation = 'add';
}
const subtract = () => {
    updateResult(lastOperation);
    lastOperation = 'subtract';
}
const multiply = () => {
    updateResult(lastOperation);
    lastOperation = 'multiply';
}
const divide = () => {
    updateResult(lastOperation);
    lastOperation = 'divide';
}
const showResult = () => {
    updateResult(lastOperation)
    resultElement.innerHTML = result;
}

document.getElementById("add-button").addEventListener("click", add);
document.getElementById("subtract-button").addEventListener("click", subtract);
document.getElementById("multiply-button").addEventListener("click", multiply);
document.getElementById("divide-button").addEventListener("click", divide);
document.getElementById("equal-button").addEventListener("click", showResult);
