const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(condition);  
}

// Condiciones para filtrar
function pairs(num) {
    return num % 2 === 0; 
}

function gt15(num) {
    return num > 15;  
}

function lt10(num) {
    return num < 10;  
}

// Valores para probar
let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];


assert.deepStrictEqual(select(values, pairs), [2]);  // Solo pares
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);  // Mayores que 15
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);  // Menores de 10

console.log("Todos los test pasaron correctamente.");
