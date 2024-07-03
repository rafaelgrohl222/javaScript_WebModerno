const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
// ler arquivo sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//ler arquivo assincrono...
//exemplo 1
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//exemplo 2 - tras o arquivo json convertido em object
const config = require('./arquivo.json')
console.log(config.db)

// leitura de arquivo -- _dirname = diretório atual - trouxe um array
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

//parei 7min49seg