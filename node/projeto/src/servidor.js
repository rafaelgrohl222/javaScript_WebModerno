//servidor - postman: http://localhost:3003/produtos

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))// Transformando em parser(object)

//get = requisição(Select) - send: Obter lista de produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())// Converter para JSON
})
//get = requisição(Select) - send: Obter produto com base no "id"
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))//parametro que veio da url "/produtos/:id"
})
//post - Enviado(Inserir)
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//put - Atualizar(Update)
app.put('/produtos/:id', (req, res, next) => {
        const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// JSON
})

//delete - Deletar(delete)
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)// JSON
})

//porta sendo escutada
app.listen(porta, () => {
    console.log(`Servidor está executando na porta: ${porta}.`)
})