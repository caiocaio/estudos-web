// colecao dinamica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000, 
    proprietario: {
        nome: 'Raul', 
        idade: 53,
        endereco: {
            logradouro: 'Rua ABC', 
            numero: 123
        }
    },
    condutores: [{
        nome: 'Jurior', 
        idade: 19
    },  {
        nome: 'Ana', 
        idade: 49
    }], 
    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) deu erro pois nao esta definida e vc n pode acessar atributos dela