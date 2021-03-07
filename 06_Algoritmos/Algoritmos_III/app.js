// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
  
// Datos
var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
];

// 1. Generación aleatoria de la disponibilidad
for (employee of myTeam) {
    for (var i = 0; i < employee.availability.length; i++) {
        employee.availability[i] = Math.random() < 0.5 ? true : false;
    }
}

var printAvailability = () => {
    for (employee of myTeam) {
        console.log("Disponibilidad de " + employee.name);
        for (var i = 0; i < employee.availability.length; i++) {
            console.log(WORK_HOURS[i] + ": " + (employee.availability[i] ? "Si" : "No"));
        }
        console.log("\n");
    }
}

printAvailability();

// 2. Buscar hueco libre
var availableHours = [];
for (employee of myTeam) {
    var arr = [];
    for (var i = 0; i < employee.availability.length; i++) {
        if (employee.availability[i]) {
            arr.push(i);
        }
    }
    availableHours.push(arr);
}

var matchingHours = availableHours.shift().filter(function(v) {
    return availableHours.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});
if (matchingHours.length > 0) {
    matchingHours.sort(function(a, b){return a-b});
    console.log("Hueco encontrado en el horario " + WORK_HOURS[matchingHours[0]]);
} else {
    console.log("Lo siento. No hay hueco disponible en el equipo.");
}
console.log("\n");

var dinero = [5,10,20,50,100,200,0.01,0.02,0.05,0.1,0.2,0.5,1,2];
dinero.sort(function(a, b){return b-a});

var printResults = (results) => {
    for (result of results) {
        console.log(result[0].toString() + (result[1] > 2 ? 
            " billete" : " moneda") + (result[0] > 1 ? "s" : "") +
            " de " + result[1].toString() + "€");
    }
    console.log("\n");
}

var calculate = () => {
    var importe = parseFloat(document.getElementById("total").value);
    var entregado = parseFloat(document.getElementById("entregado").value);
    var results = [];
    var vuelta = entregado - importe;
    for (var i = 0; i < dinero.length; i++) {
        var num = Math.floor(vuelta/dinero[i]);
        if (num > 0) {
            vuelta = vuelta - (num * dinero[i]);
            results.push([num, dinero[i]]);
        }
    }
    printResults(results);
}

document.getElementById("calculate-button").addEventListener("click", calculate);