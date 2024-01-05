function calcular() {
    let numero = document.getElementById('numero')
    let num = Number(numero.value)
    let tabuada = document.getElementById('tabuada')
    let contador = 1;

    tabuada.innerHTML = ''
    let opcaoPadrao = document.createElement('option')
    opcaoPadrao.value = 'default'
    opcaoPadrao.textContent = 'Digite um numero acima'
    tabuada.appendChild(opcaoPadrao)
    
    while (contador <= 10) {
        let resultado = num * contador;
        let opcao = document.createElement('option');
        opcao.value = resultado;
        opcao.textContent = num + ' x ' + contador + ' = ' + resultado;
        tabuada.appendChild(opcao);
        contador++;
    }
}


function calcular2() {
    let numero = document.getElementById('numero')
    let num = Number(numero.value)
    let tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''

    let opcaoPadrao = document.createElement('option')
    opcaoPadrao.value = 'default'
    opcaoPadrao.textContent = 'Digite um numero acima'
    tabuada.appendChild(opcaoPadrao)

    for (var i = 1; i <= 10; i++) {
        let resultado = num * i
        let opcao = document.createElement('option')
        opcao.value = resultado
        opcao.textContent = num + ' x ' + i + ' = ' + resultado
        tabuada.appendChild(opcao)
    }
}
