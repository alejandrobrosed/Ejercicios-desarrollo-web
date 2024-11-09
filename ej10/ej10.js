function convertSeconds(totalSeconds) {
    // Calcular horas, minutos y segundos
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // Mostrar el resultado
    return `${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Ejemplo de uso:
let totalSeconds = 3665; // 3665 segundos equivalen a 1 hora, 1 minuto y 5 segundos
console.log(convertSeconds(totalSeconds));  // Resultado: "1 horas, 1 minutos, 5 segundos"
