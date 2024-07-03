//ES8: Object.value/Object.entries
const obj = { a: 1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhoria na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
//Herança
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())