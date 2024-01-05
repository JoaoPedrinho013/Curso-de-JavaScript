var agora = new Date()
var hora = agora.getHours()
var diaSemana = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12)  {
    console.log('Bom dia!')
} else if (hora >= 12  && hora < 19) {
    console.log('Boa tarde')
} else if (hora >= 1 && hora < 6) {
    console.log('Boa madruga')
} else {
    console.log('Boa noite')
}
console.log(ano)