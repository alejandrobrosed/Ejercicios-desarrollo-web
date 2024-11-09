function classifyTriangle(a, b, c) {
    // Verificar si es un triángulo válido
    if (a <= 0 || b <= 0 || c <= 0) {
        return "No es un triángulo: los lados deben ser mayores que 0";
    }
    if (a + b < c || b + c < a || c + a < b) {
        return "No es un triángulo: no cumple con la desigualdad triangular";
    }

    // Clasificar el triángulo
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || b === c || c === a) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// Ejemplo de uso:
let a = 3, b = 4, c = 5;
console.log(classifyTriangle(a, b, c));  
