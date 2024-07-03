function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situação = 'Aprovado'
console.log(tag `${aluno} esrá ${situação}.`)