const resultElement = document.getElementById("result");
const someNaN = () => isNaN(b) || isNaN(a);
let a = 0;
let b = 0;

const add = () => {
    resultElement.innerHTML = someNaN() ? 'Error' : a+b;
}
const subtract = () => {
    resultElement.innerHTML = someNaN() ? 'Error' : a-b;
}
const multiply = () => {
    resultElement.innerHTML = someNaN() ? 'Error' : a*b;
}
const divide = () => {
    resultElement.innerHTML = someNaN() ? 'Error' : a/b;
}

const handleInputChange = event => {
    switch (event.target.id) {
        case 'numA':
            a = parseFloat(event.target.value);
            break;
        case 'numB':
            b = parseFloat(event.target.value);
            break;
    }
}

document.getElementById("add-button").addEventListener("click", add);
document.getElementById("subtract-button").addEventListener("click", subtract);
document.getElementById("multiply-button").addEventListener("click", multiply);
document.getElementById("divide-button").addEventListener("click", divide);
document.getElementById("numA").addEventListener("change", handleInputChange);
document.getElementById("numB").addEventListener("change", handleInputChange);