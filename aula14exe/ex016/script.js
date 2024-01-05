function contar() {
    var inicio = parseInt(document.querySelector('input#inicio').value);
    var fim = parseInt(document.querySelector('input#fim').value);
    var passo = parseInt(document.querySelector('input#passo').value);
    var mensagem = document.querySelector('div#contagem');
    
    mensagem.innerHTML = "";
    for (var i = inicio; i <= fim; i += passo) {
        mensagem.innerHTML += i;
        if (i + passo <= fim) {
             mensagem.innerHTML += " 👉 ";
        }else {
            mensagem.innerHTML += " 🏁 ";
        }
    }
    } 
