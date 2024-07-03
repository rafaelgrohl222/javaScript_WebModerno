//Tipos de variaveis: let e var
{
    var a = 2
    let b = 3
    console.log('letra b:', b)//variavel de escopo de bloco, tem acesso somete dentro do bloco
}
console.log('letra a:', a)// variavel global

//Template string
const produto = 'ipad'
console.log(`${produto}, é caro`)

//Destructuring - tirar de dentro de um array, object, ...
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1,2,3]// espaço vazio, pula uma posição
console.log(x,y)

const {idade, nome} = { nome: 'Ana', idade: 9}
console.log(idade, nome)


