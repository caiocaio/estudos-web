// operador ... rest (juntar) / spread(espalhar)
//usar rest com parametro de função

// usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12341.23}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
