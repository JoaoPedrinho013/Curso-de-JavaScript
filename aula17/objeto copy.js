let amigo = {
    nome: 'Pedro',
    sexo: 'M',
    peso: 83.2,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}
console.log(amigo)
console.log('-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)