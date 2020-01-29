const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('fala anonimo\n')
    process.exit()
}else {
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`fala ${nome}!!\n`)
        process.exit()
    })
}