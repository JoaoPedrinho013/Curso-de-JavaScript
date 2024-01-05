var numeros = [1, 5, 7, 8, 3, 5, 5, 6, 7, 8]

for (let pos in numeros) {
    if (numeros.length >= 7) {
        console.log('Vai trabalhar baiano')
    } else {
        console.log(`O indice ${pos} tem o valor ${numeros[pos]}`)
    }
    
}