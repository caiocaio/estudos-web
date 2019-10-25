const saudacao = 'opa' //contexto 1

function exec(){
    const saudacao = 'falaaaa' //contexto 2
    return saudacao
}


// objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90, 
    endereco: {
        logradouro:'Rua etc etc', 
        numero: 12314, 

    }
}

console.log(saudacao)
console.log (exec())
console.log(cliente)