function esBisiesto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Ejemplo de uso
let ano = 2024;
if (esBisiesto(ano)) {
    console.log(ano + " es un año bisiesto.");
} else {
    console.log(ano + " no es un año bisiesto.");
}

