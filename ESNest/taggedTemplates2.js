function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        //Se não for número recebe o próprio valor e se for um valor aplica a mascara
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real `1X de ${preco} ou 3X de ${precoParcela}.`)