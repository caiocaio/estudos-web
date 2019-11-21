//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'   // nao faca isso pois afeta a estrutura toda do seu codigo
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2:'B', attr3: '3'}  // ele nao vai achar o attr3 pois ele achou no filho e retornou ja
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0, 
    velMax: 200, 
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)  // eh usando o setPrototypeOf que vc consegue colocar a ferrari pra herdar de carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())