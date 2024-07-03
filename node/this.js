// this = esse
console.log(this === global)
console.log(typeof this)
console.log(typeof global)
console.log(this === module )
console.log(typeof module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)// dentro de uma função não é igual exports
    console.log(this === module.exports)
    console.log(this === global)// this é igual a global
}
logThis()