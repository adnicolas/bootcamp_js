// CASO 1 - IBAN
const iban1  = "ES6600190020961234567890";
const regExp1 = /^[A-Z]{2}\d{22}/;

console.log("CASO 1 - IBAN");
console.log(regExp1);
console.log("¿Valida " + iban1 + "?", regExp1.test(iban1));
console.log("\n");

// CASO 2 - IBAN
console.log("CASO 2 - IBAN");
const iban2  = "ES66 0019 0020 9612 3456 7890";
const regExp2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}/;

console.log(regExp2);
console.log("¿Valida " + iban1 + "?", regExp2.test(iban1));
console.log("¿Valida " + iban2 + "?", regExp2.test(iban2));
console.log("\n");

// CASO 3 - IBAN
console.log("CASO 3 - IBAN");
const regExp3 = /(^[A-Z]{2})(\d{2})/;
console.log(regExp3);
console.log("Código de país: " + iban2.match(regExp3)[1]);
console.log("Dígito de control: " + iban2.match(regExp3)[2]);
console.log("\n");

// CASO 1 - MATRICULA
console.log("CASO 1 - MATRÍCULA");
const matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
const regExp4 = /^(\d{4}\s?[-]?[A-Z]{3})/;
console.log(regExp4);
matriculas.forEach(matricula => {
    console.log("¿Valida matrícula " + matricula + "?", regExp4.test(matricula));
});
console.log("\n");

// CASO 2 - MATRICULA
console.log("CASO 2 - MATRÍCULA");
const regExp5 = /^(\d{4})\s?[-]?([A-Z]{3})/;
matriculas.forEach(matricula => {
    console.log("Parte numérica: " + matricula.match(regExp5)[1]);
    console.log("Letras: " + matricula.match(regExp5)[2]);
    console.log("\n");
});

// CASO 1 - EXTRACCIÓN DE IMÁGENES DE UN HTML
console.log("CASO 1 - EXTRACCIÓN DE IMÁGENES DE UN HTML");
const element = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
const regExp6 = /<img[^>]+src="([^">]+)"/;
console.log("IMG SRC: " + element.match(regExp6)[1]);
console.log("\n");

// CASO 2 - EXTRACCIÓN DE IMÁGENES DE UN HTML
console.log("CASO 2 - EXTRACCIÓN DE IMÁGENES DE UN HTML");
const html = '<html><body><img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/><h1>ejemplo</h1><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></body></html>';
const regExp7 = /<img[^>]+src="([^">]+)"/g;
const matches = html.match(regExp7);
for (match of matches) {
    console.log("IMG SRCs: " + match);
}
console.log("\n");
