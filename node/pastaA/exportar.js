// exports = objeto
console.log("Mostrando object: ", module.exports)
console.log("Verificando 1: ", module.exports === this)
console.log("Verificando 2: ", module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null// modo errado de chamar "exports"
console.log("Exp: 1", module.exports) // 1

exports = {
    nome: 'teste'
}// não será retornado

console.log("Exp: 2", module.exports)// 2 modo errado de chamar "exports"

module.exports = { publico: true}// modo certo de atribuir o exports
console.log("Exp: 3", module.exports)// 3