//console.log(global)

global.MinhaApp = Object.freeze({     //object.freeze para não deixar modificar em outros lugares
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})