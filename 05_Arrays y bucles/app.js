const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

const printProduct = (producto) => {
    console.log('Id: ' + producto.id);
    console.log('Producto: ' + producto.name);
    console.log('Precio: ' + producto.price);
    console.log('Cantidad: ' + producto.count);
    console.log('Premium: ' + producto.premium);
    console.log('\n');
}

// Listar todos los productos
for (product of carrito) {
    printProduct(product);
}

// Eliminar un producto del carrito de la compra
let index = 0;
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === 3143) {
        index = i;
    }
}
carrito.splice(index, 1);

// Calcular el total del carrito de la compra
let totalPrice = 0;
for (let i = 0; i < carrito.length; i++) {
    totalPrice += carrito[i].count * carrito[i].price;
}
// Aplicar un descuento del 5% si la compra es mayor de 50€
if (totalPrice > 50) {
    totalPrice = totalPrice - (totalPrice * 0.05);
    console.log("Precio total (incluye 5% de descuento): " + totalPrice + "€");
} else {
    console.log("Precio total: " + totalPrice + "€");
}

let shippingCostsText = 'Pedido con gastos de envío';
// Si todos los productos son premium que diga "Sin gastos de envío", si no "Con gastos de envío"
if (carrito.every(producto => producto.premium)) {
    shippingCostsText = "Pedido sin gastos de envío";
}
document.getElementById("shippingCosts").innerHTML =
    '<div class="row">' +
        '<div class="column">' +
            '<div class="header">' + shippingCostsText + '</div>' +
        '</div>' +
    '</div>';
console.log("\n");

// Filtrar por los productos que sean premium
let premiumProducts = [];
for (product of carrito) {
    if (product.premium) {
        premiumProducts.push(product);
    }
}
console.log("Productos premium", premiumProducts);

let productsHtml = 
    '<div class="row">' +
        '<div class="column">' +
            '<div class="header">Nombre</div>' +
        '</div>' +
        '<div class="column">' +
            '<div class="header">Precio unitario</div>' +
        '</div>' +
        '<div class="column">' +
            '<div class="header">Cantidad</div>' +
        '</div>' + 
        '<div class="column">' +
            '<div class="header">Premium</div>' +
        '</div>' +
    '</div>';

for (producto of carrito) {
    productsHtml += 
    '<div class="row">' +
        '<div class="column">' +
            '<div>' + producto.name + '</div>' +
        '</div>' +
        '<div class="column">' +
            '<div>' + producto.price + '</div>' +
        '</div>' +
        '<div class="column">' +
            '<div>' + producto.count + '</div>' +
        '</div>' + 
        '<div class="column">' +
            '<div>' + producto.premium + '</div>' +
        '</div>' +
    '</div>';
}
document.getElementById("products").innerHTML = productsHtml;

const totalPriceHtml = 
    '<div class="row">' +
        '<div class="column">' +
            '<div class="total-price-columns">Precio total</div>' +
        '</div>' +
        '<div class="column">' +
            '<div class="total-price-columns">' + totalPrice + '€' + '</div>' +
        '</div>' +
    '</div>';

document.getElementById("totalPrice").innerHTML = totalPriceHtml;