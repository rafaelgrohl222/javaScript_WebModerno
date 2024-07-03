//Banco de Dados
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id// se não estiver setado, produto.id recebe a sequence do id
    produtos[produto.id] = produto//produtos vai receber todos produto no object{}
    return produto// retorna o id
}

function getProduto(id) {
    return produtos[id] || {}// caso retornar nulo retorna vazio
}
//Retornar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
//Tornar funções disponíveis
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}