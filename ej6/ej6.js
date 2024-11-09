function test() {
    var nombre = "Jhon";
    var edad = 38;

    console.log('Hola ' + nombre + '. Tienes ' + edad + ' años');
}

test();

function calculate(data) {
    let suma = 0
    let elementoMasGrande = data[0]


    function calculate(data) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            suma += element

            if (element > elementoMasGrande) {
                elementoMasGrande = element
            }

            
        }

        //La suma de todos los elementos
        //El elemento mas grande
        //El elemento mas pequeño
        //La edia de los elementos

    }
    console.log(`Suma ${suma}`);
    console.log(`Elemento mas grande ${elementoMasGrande}`);
    console.log(`Media ${suma/data.length}`);
}