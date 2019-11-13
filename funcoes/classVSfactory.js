class Pessoa {
    constructor(nome) {
        this.nome = nome       //por causa disso aqui, ela n vai funcionar no navegador, apontando um undefined
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {           // essa aqui funciona no navegador
    return{
        falar: () => console.log(`Meu nome é ${nome}`)  // esse obj tem "conciencia lexica" 
    }
}

const p2 = criarPessoa('João')
p2.falar()