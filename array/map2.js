const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',                        //modelo de JSON
    '{"nome": "Caderno", "preco": 13.90}',                        //modelo de JSON
    '{"nome": "Kit de Lapis", "preco": 41.22}',                   //modelo de JSON
    '{"nome": "Caneta", "preco": 7.5}'                            //modelo de JSON
]

// retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)  //pega o modelo de JSON e passa para OBJ
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
