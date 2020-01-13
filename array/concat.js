const filhas = ['Ana', 'Maria' ]
const filhos = ['Caio', 'Pedro']

const todos = filhas.concat(filhos, 'Fulano')
console.log(filhas)
console.log(filhos)
console.log(todos)


console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))

// os arrays originais não são mudados, faz o novo array