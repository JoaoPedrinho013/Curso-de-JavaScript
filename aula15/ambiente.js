var numeros = [1, 5, 7, 8]
let num = [3, 5, 7, 8]
numeros[2] = 2 // esse coloca no indice que eu quero, mas ele tira o que estava la 
numeros.push(4) // esse coloca o numero sempre no final do array (lista)





console.log(`Os valores de numeros sao: ${numeros}`)
console.log(`O primeiro valor de numeros é:  ${numeros[0]}`)
console.log(`O tamanho da lista numeros atual é de ${numeros.length}`)
console.log(`A lista numeros em ordem crescente fica ${numeros.sort()}`)
console.log(`A lista numeros em ordem decrescente fica ${numeros.reverse()}`)
console.log(`Os valores de num sao:  ${num}`)