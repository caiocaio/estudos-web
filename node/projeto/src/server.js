const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => { 
    res.send(dataBase.getProdutos())
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco 
    })
    res.send(produto)  //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto)  //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excluirProdutos( req.params.id)
    res.send(produto)  //JSON
})

//app.get('/produtos', (req, res, next) => {
//  res.send({ nome: 'Notebook', preco: 123.45 })  //converter para JSON
//})

app.listen(porta, () =>{
    console.log(`servidor esta funcionando ${porta}.`)
})