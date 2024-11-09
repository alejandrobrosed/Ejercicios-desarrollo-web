function insert(array, element, atBeginning) {
    // Confirmamos si el elemento ya existe en el array
    if (!array.includes(element)) {
        // Si atBeginning es true, insertamos al principio, de lo contrario al final
        if (atBeginning) {
            array.unshift(element); // Agrega al principio con "unshift"
        } else {
            array.push(element);    // Agrega al final con "push"
        }
    }
    // Devolvemos el array entero actualizado
    return array;
}

// Ejemplo de "clase"
let array = ['pera', 'manzana'];

console.log(insert(array, 'pera', false));      // ['pera', 'manzana']
console.log(insert(array, 'melón', false));     // ['pera', 'manzana', 'melón']
console.log(insert(array, 'melocoton', true));  // ['melocotón', 'pera', 'manzana', 'melón']
