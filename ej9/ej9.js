function contiguo(numero) {
    if (numero % 2 === 0) {
        return {
            siguientepar: numero + 2,
            anteriorpar: numero - 2
    
        
    };
}
    else {
        return{
        siguientepar: numero + 1,
        anteriorpar: numero - 1
        }
    
    }
}

console.log(contiguo(4));
console.log(contiguo(5));