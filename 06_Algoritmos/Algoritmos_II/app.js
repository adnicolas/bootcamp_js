var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var inputText = document.getElementById("input-text");
var outputText = document.getElementById("output-text");

var encryptText = (encrypt) => {
    var val = inputText.value;
    var output = '';
    var fromAlphabet = plainAlphabet;
    var toAlphabet = encryptedAlphabet;
    switch (encrypt) {
        case false:
            fromAlphabet = encryptedAlphabet;
            toAlphabet = plainAlphabet;
            break;
    }
    for (char of val) {
        var index = fromAlphabet.indexOf(char);
        output += index < 0 ? char : toAlphabet[index];
    }
    outputText.value = output;
}

var cleanAll = () => {
    inputText.value = "";
    outputText.value = "";
}

document.getElementById("encrypt").addEventListener("click", function(){ encryptText(true)});
document.getElementById("decrypt").addEventListener("click", function(){ encryptText(false)});
document.getElementById("clean").addEventListener("click", cleanAll);

var randomPick = (n, min, max) => {
    var array = [];
    while (array.length < 10) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (array.indexOf(num) === -1) {
            array.push(num);
        }
    }
    console.log("Randomly generated array", array);
    alert("Your random numbers are: " + array);    
}

document.getElementById("random").addEventListener("click", function(){ randomPick(10,1,100)});