const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const todosProdutos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    todosProdutos[produto.id] = produto
    return produto
    
}

function getProduto(id){
    return todosProdutos[id] || {}
}

function getProdutos() {
    return Object.values(todosProdutos)
}

function excluirProdutos(id) {
    const produto = todosProdutos[id]
    delete todosProdutos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}