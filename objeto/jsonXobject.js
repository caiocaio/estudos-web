const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))   //JSON eh um formado de dados, n eh execultado 

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))  //notacao coreta: aspas simples, colchete, elementos com aspas duplas.
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) //qlq texto ou  atributos tem q star com aspas duplas " " 