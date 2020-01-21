const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)   //com cache 

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)    //sem cache