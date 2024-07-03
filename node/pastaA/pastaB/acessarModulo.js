const moduloA = require('../../moduloA')//acessando: saido de pastas sobre pastas
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const s = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)