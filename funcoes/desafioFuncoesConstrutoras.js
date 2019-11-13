function Pessoa(nome) {
    this.nome = nome


    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


// eh a mesma coisa de:

class Pessoa1 {
    constructor(nome) {
        this.nome = nome       //por causa disso aqui, ela n vai funcionar no navegador, apontando um undefined
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new Pessoa1('João')
p2.falar()