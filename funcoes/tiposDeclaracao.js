console.log(soma(3, 4))
//console.log(sub(3, 4)) antes nao funciona
//console.log(mult(3, 4)) antes nao funciona

// function declaration, dessa forma pode chamar ela antes
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4))       //depois funciona

// named function expression
const mult = function mult(x, y){
    return y * x
}
console.log(mult(3, 4))     //depois fuciona