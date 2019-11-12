//closure eh o escolo criado quando uma funcao eh declarada
//esse escopo permite a funcao acessar e manipular variaveis externas a funcao

// Contexto lexico em acao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){         //o que vale eh o local aonde a funcao foi feita, o local manda em qual const ela vai chamar.
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())