function parimp(num) {
    if (num%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

numero = 61
console.log(`O valor é ${parimp(numero)}`)
