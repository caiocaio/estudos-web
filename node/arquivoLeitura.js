const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//sincrono... programa para até ler o arquivo inteiro 

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono (leitura mais dinamica, nao espera ler o arquivo todo e continua o codigo)

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo Da Pasta')
    console.log(arquivos)
})