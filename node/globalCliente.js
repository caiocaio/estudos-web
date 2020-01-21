require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome  = 'Eita!'
console.log(MinhaApp.nome)  //algo global que da pra mudar em qlq lugar não é uma boa prática
//por causa do object.freeze não foi possivel modificar o nome do obj
