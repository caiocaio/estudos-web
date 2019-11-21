const pessoa = {
    nome: 'Rebeca', 
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa))  //pega as keys do obj
console.log(Object.values(pessoa)) //pega os valores do obj
console.log(Object.entries(pessoa)) //pega as keys e os valores

Object.entries(pessoa).forEach(e =>{
    console.log((`${e[0]}: ${e[1]}`))
})

Object.entries(pessoa).forEach(([chave, valor]) =>{       //mesma coisa do de cima, mas com uma descricao melhor
    console.log((`${chave}: ${valor}`))
})


Object.defineProperty(pessoa, "dataNascimento", {
        enumerable: true, 
        writable: false, 
        value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMA 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
