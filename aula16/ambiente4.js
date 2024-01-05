function fatorial(numero=0){
    let fat = 1
    for(let contador = numero; contador > 1; contador--){
        fat *= contador
    }
    return fat
} 
num = 5
console.log(`O fatorial de ${num} é ${fatorial(num)}`)