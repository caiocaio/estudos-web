// nao acieta repetição/ não indexada

const times = new Set()
times.add('vasco')
times.add('Sao paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas'] //set não aceita repetição
const nomesSet = new Set(nomes)
console.log(nomesSet)