const resultado = document.getElementById("resultado");
const parkingNights = document.getElementById("parkingNights");
const nights = document.getElementById("nights");
const roomOccupancy = document.getElementById("roomOccupancy");
const spa = document.getElementById("spa");
const roomTypes = document.getElementById("roomTypes");

const roomPrices = {
    standard: 100,
    junior: 120,
    suite: 150
}

const updateResult = () => {
    let precioTotal = nights.value * roomPrices[roomTypes.value];
    if (spa.checked) {
        precioTotal = precioTotal + (nights.value * 20);
    }
    switch (roomOccupancy.value) {
        case 'individual':
            precioTotal = precioTotal * 0.75;
            break;
        case 'triple':
            precioTotal = precioTotal * 1.25;
            break;
    }
    precioTotal = precioTotal + (parkingNights.value * 10);
    resultado.innerHTML = precioTotal + '€';
}

parkingNights.addEventListener("input", updateResult);
nights.addEventListener("input", updateResult);
roomOccupancy.addEventListener("change", updateResult);
roomTypes.addEventListener("change", updateResult);
spa.addEventListener("click", updateResult);
