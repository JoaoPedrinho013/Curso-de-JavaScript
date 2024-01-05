var agora = new Date()
var diaSem = agora.getDay()
var mensagem = 'O dia da semana hoje é '

switch (diaSem) {
    case 0:
        mensagem += 'Domingo'
        break
    case 1:
        mensagem += 'Segunda'
        break
    case 2:
        mensagem += 'Terça'
        break
    case 3:
        mensagem += 'Quarta'
        break
    case 4:
        mensagem += 'Quinta'
        break
    case 5:
        mensagem += 'Sexta'
        break
    case 6:
        mensagem += 'Sábado'
        break
    default:
        mensagem += 'ERRO! DIA INVÁLIDO!!!'
        break
}

console.log(mensagem)