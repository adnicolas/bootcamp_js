const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

const inputsArray = [];

const columnas = [
    "Producto",
    "Precio unitario",
    "Cantidad"
];

const createElementWithClass = (clase) => {
  let element = document.createElement("div");
  element.setAttribute("class", clase);
  return element;
};

const switchButton = () => {
  if (inputsArray.every(input => input.value == 0)) {
    document.getElementById("calculate-button").disabled = true;
  } else {
    document.getElementById("calculate-button").disabled = false;
  }
}

let productsHtml = document.createElement("div");
let row = createElementWithClass('row');
for (columna of columnas) {
    let column = createElementWithClass('column');
    let header = createElementWithClass('header');
    header.innerHTML = columna;
    column.appendChild(header);
    row.appendChild(column);
}
productsHtml.appendChild(row);

for (producto of products) {
    let row = createElementWithClass('row');
    for (columna of columnas) {
        let column = createElementWithClass('column');
        let content = null;
        switch (columna) {
            case 'Producto':
                content = document.createElement("div");
                content.innerHTML = producto.description;
                break;
            case 'Precio unitario':
                content = document.createElement("div");
                content.innerHTML = producto.price + '€';
                break;
            case 'Cantidad':
                column.setAttribute("style", "display: inline;");
                content = document.createElement("input");
                content.setAttribute("min", 0);
                content.setAttribute("value", 0);
                content.setAttribute("type", "number");
                content.setAttribute("style", "width: 2rem;");
                content.setAttribute("id", 'input-' + producto.description);
                content.addEventListener('click', switchButton);
                inputsArray.push(content);
                break;
        }
        column.appendChild(content);
        row.appendChild(column);
    }
    productsHtml.appendChild(row);
}

document.getElementById("products").appendChild(productsHtml);

let calculateButtonRow = createElementWithClass('row');
let calculateButtonColumn = createElementWithClass('column');
let calculateButton = document.createElement("button");
calculateButton.setAttribute("id", "calculate-button");
calculateButton.setAttribute("type", "button");
calculateButton.setAttribute("disabled", true);
calculateButton.textContent = "Calcular";
calculateButtonColumn.appendChild(calculateButton);
calculateButtonRow.appendChild(calculateButtonColumn);

document.getElementById("calculate").appendChild(calculateButtonRow);

const onCalculate = () => {
  const results = document.getElementById("results");
  while (results.firstChild) {
    results.removeChild(results.lastChild);
  }
  setSubtotal();
  setTaxes();
  setTotal();
}

document.getElementById("calculate-button").addEventListener('click', onCalculate);

const getValue = (variable) => {
  let result = 0;
  let subtotal = 0;
  for (product of products) {
    const amount = parseInt(document.getElementById('input-' + product.description).value);
    subtotal += product.price * amount;
    switch (variable) {
      case 'subtotal':
        result = subtotal;
        break;
      case 'taxes':
        result += (product.price * amount) * (product.tax / 100);
        break;
    }
  }
  return Number(result).toFixed(2);
}
const setValue = (variable, value) => {
  let row = createElementWithClass('row');
  let title = createElementWithClass('column');
  title.setAttribute("style", "font-weight: bold;")
  title.textContent  = variable;
  let column = createElementWithClass('column');
  column.setAttribute("id", variable);
  column.textContent = value + " €";
  row.appendChild(title);
  row.appendChild(column);
  document.getElementById("results").appendChild(row);
}
const setSubtotal = () => {
  let subtotal = getValue('subtotal');
  setValue('Subtotal', subtotal);
}
const setTaxes = () => {
  let taxes = getValue('taxes');
  setValue('IVA', taxes);
}
const setTotal = () => {
  const subtotal = document.getElementById("Subtotal");
  const iva = document.getElementById("IVA");
  let row = createElementWithClass('row');
  let title = createElementWithClass('column');
  title.textContent  = "Total";
  title.setAttribute("style", "font-weight: bold;")
  let result = createElementWithClass('column');
  const subtotalValue = parseFloat(subtotal.textContent.replace(' €',''));
  const taxValue = parseFloat(iva.textContent.replace(' €',''));
  result.textContent = Number(subtotalValue + taxValue).toFixed(2) + ' €';
  row.appendChild(title);
  row.appendChild(result);
  document.getElementById("results").appendChild(row);
}