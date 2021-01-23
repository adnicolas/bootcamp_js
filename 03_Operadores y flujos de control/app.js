function getTotal(product) {
    if (product.count == 0) {
        return 0;
    } else if (product.count > 0) {
        return product.count * product.price;
    }
}

function getVat(product) {
    switch (product.type) {
        case 'alimentacion':
            return product.price * 0.1;
        case 'libro':
            return product.price * 0.04;
        default:
            return product.price * 0.21;
    }
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function printProductSummary(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal: ", subtotal + "€");
    console.log("IVA: ", vat + "€");
    console.log("Total: ", total + "€");
    console.log("\n");
}

function calculateWithholding(employee) {
    const hasChildren = employee.hijos > 0;
    const childDiscount = 0.02;
    let withholding = 0;
    if (employee.bruto >= 12000 && employee.bruto < 24000) {
        withholding = hasChildren ? employee.bruto * (0.08 - childDiscount) : employee.bruto * 0.08;
    } else if (employee.bruto >= 24000 && employee.bruto < 34000) {
        withholding = hasChildren ? employee.bruto * (0.16 - childDiscount) : employee.bruto * 0.16;
    } else if (employee.bruto >= 34000) {
        withholding = hasChildren ? employee.bruto * (0.3 - childDiscount) : employee.bruto * 0.3;
    }
    return withholding;
}

function getAnnualNetSalary(employee) {
    const withholding = calculateWithholding(employee);
    return employee.bruto - withholding;
}

function getMonthlyNetSalary(employee) {
    const withholding = calculateWithholding(employee);
    const netAnnualSalary = employee.bruto - withholding;
    return employee.pagas === 14 ? 
        netAnnualSalary/employee.pagas : 
        netAnnualSalary/12;
}

function printEmployeeSummary(employee, i) {
    const annualNet = getAnnualNetSalary(employee);
    const monthlyNet = getMonthlyNetSalary(employee);
  
    console.log("----Empleado" + i + "----");
    console.log("Salario bruto anual: ", employee.bruto + "€");
    console.log("Salario neto anual: ", annualNet + "€");
    console.log("Retención anual: ", employee.bruto - annualNet + "€");
    console.log("Salario neto mensual: ", monthlyNet + "€");
    console.log("\n");
}

const employees = [
    {
        bruto: 30000,
        hijos: 0,
        pagas: 14
    },
    {
        bruto: 35000,
        hijos: 1,
        pagas: 12
    },
    {
        bruto: 10000,
        hijos: 3,
        pagas: 12
    }
]

const camisetas = {
    count: 2,
    price: 25,
    type: 'ropa'
}

const libros = {
    count: 0,
    price: 18,
    type: 'libro'
}

const leche = {
    count: 6,
    price: 0.8,
    type: 'alimentacion'
}

console.log("----Leche----");
printProductSummary(leche);
console.log("----Camisetas----");
printProductSummary(camisetas);
console.log("----Libros----");
printProductSummary(libros);

employees.forEach((employee, i) => {
    printEmployeeSummary(employee, i+1);
});
