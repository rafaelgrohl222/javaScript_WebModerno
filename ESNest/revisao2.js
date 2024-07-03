//Arrow Function = função anonima
const soma1 = (a,b) => a + b
console.log('soma1: ', soma1(2,3))

const soma2 = (a,b) => {
    return a + b
}
console.log('soma2: ',soma2(3,4))

//Arrow Function - this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

//Operador rest = ... juntar
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))

