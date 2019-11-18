// IIFE --> Immediately invoked function expression

(function(){
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente')   // nao toca o escopo global
})()