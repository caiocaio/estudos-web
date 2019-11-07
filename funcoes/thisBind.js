const pessoa = {
    saudacoes: 'Bom dia',
    falar(){
        console.log(this.saudacoes)
    }
}


pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()