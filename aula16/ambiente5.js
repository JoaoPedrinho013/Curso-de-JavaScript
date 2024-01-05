// recursividade
function fatorial(numero=0){
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero-1)
    }
} 
num = 1
console.log(`O fatorial de ${num} é ${fatorial(num)}`)