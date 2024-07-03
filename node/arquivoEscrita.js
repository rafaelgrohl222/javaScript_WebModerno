const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}
// converçao do textual para formato JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')// caso nulo imprimir -> "arquivo salvo"
})// gerando arquivo json