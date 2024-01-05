let numero = document.querySelector('input#numero')
let lista = document.getElementById('lista')
let respostas = document.querySelector('div#resposta')
let array = []


function adicionar() {
    respostas.innerHTML = ''
    let novoNumero = numero.value
    if (novoNumero > 100 || novoNumero <= 0){
        alert(`O valor digitado ${novoNumero} é inválido!`)
    }else if (array.includes(novoNumero)){
        alert(`Digite outro valor, ${novoNumero} ja Existe na lista!`)
    }else {
        array.push(novoNumero);
        let item = document.createElement('option')
        item.text = `Numero ${novoNumero} adicionado`
        lista.appendChild(item)
        numero.value = ""
    }
    
    
}
function resultado() {
    let total = array.length;
    respostas.innerHTML = `Ao todo, temos ${total} números cadastrados.<br><br>`;
    let maior = array[0]
    let menor = array[0]
    let soma = 0
    
    for (let contador = 1; contador < total; contador++) {
        if (array[contador] > maior) {
            maior = array[contador]
        }
        if (array[contador] < menor) {
            menor = array[contador]
        }
    }
    respostas.innerHTML += `O Maior valor informado foi o ${maior}<br><br>`
    respostas.innerHTML += `O Menor valor informado foi o ${menor}<br><br>`
    
    for (let pos = 0; pos < array.length; pos++) {
    soma += parseInt(array[pos])
    }
    respostas.innerHTML += `A soma de todos os números é igual a ${soma}<br><br>`
    respostas.innerHTML += `A média dos números é igual a ${(soma / total).toFixed(2)}<br><br>`

    
    

}
