// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {  //primeira func
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {  //segunda func
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso (indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
