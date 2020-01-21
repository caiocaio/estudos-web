console.log(this === global)//fora ele não aponta pra global
console.log(this === module)

console.log(this === module.exports)//fora ele aponta pra module.exports
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma Função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)//dentro de uma func ele aponta pra global

    
}

logThis()



//cuidado na hora de acessar o this, pois dentro de uma func ele é global!!