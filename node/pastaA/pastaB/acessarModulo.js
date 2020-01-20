const moduloA = require('../../moduloA') //prestar atenção na forma que está escrito, no linux deve-se respeitar o caseSensitive
console.log(moduloA.ola) 

const saudacao = require('saudacao')  // ele procura o arquivo index.js
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)