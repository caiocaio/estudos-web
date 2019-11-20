// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}  // atribuicao para costante eh so uma vez
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}  // vai dar erro pois eh uma constante e nao podemos atribuir um novo obj para pessoa.

Object.freeze(pessoa)   // tornando o obj em si constante

pessoa.nome = 'Maria'  // nao muda pois esta congelado
pessoa.end = 'Rua ABC' // nao muda pois esta congelado
delete pessoa.nome     // nao muda pois esta congelado
console.log(pessoa.nome) 


const pessoaCosntante = Object.freeze ({nome: 'Joao'}) 
pessoaCosntante.nome = 'Maria'
console.log(pessoaCosntante)