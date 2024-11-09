//REALIZAMOS UNA FUNCION
function mostrarvalorabsoluto(numero) {
   // Calculamos el valor absoluto utilizando Math.abs()
   let valorabsoluto = Math.abs(numero);

    // Mostramos el valor absoluto por pantalla
    console.log("El valor absoluto de " + numero +" es: " + valorabsoluto);
}

// Ejemplo de uso
mostrarvalorabsoluto(-5);  // El valor absoluto de -5 es: 5
mostrarvalorabsoluto(10);   // El valor absoluto de 10 es: 10
mostrarvalorabsoluto(0);    // El valor absoluto de 0 es: 0