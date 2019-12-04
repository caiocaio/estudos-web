Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){                                 //isso eh um forEach
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados.forEach2(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}` )

})