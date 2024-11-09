let data = []

let data1 = [1, 2, 3, 4, 5]
data1[0] = 0

for (let i = 0; i < data1.length; i++) {
    const value = data1[i]
    console.log(value)
}

data.push(6)

for (let digit of data1) {
    console.log(digit)
}

//

for (let i=0; i<data1.length; i++) {
    //data[i] = data1[i]
    data.push(data1.pop())
} 


console.log(data)

let cadena = 'Hola mundo desde JS'

let cadenaAsArray = cadena.split('')
let cadenaInvertida = []

while (cadenaAsArray.length > 0) {
    cadenaInvertida.push(cadenaAsArray.pop())
}
console.log(cadenaInvertida.join(''));
