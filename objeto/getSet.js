 //nivel maior de encapsulamento.
 
 
 const sequencia = {
     _valor: 1, // concencao de variavel private, mas n impede ela de ser alterada
     get valor() {return this._valor++}, 
     set valor(valor) {
         if(valor > this._valor){
             this._valor = valor
         }
     }
 }


 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 1000
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 900
 console.log(sequencia.valor, sequencia.valor)