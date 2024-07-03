//Não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintias')
times.add('Flamengo')
times.add('Vasco')//Foi iguinorado

console.log(times)
console.log('size, quantos elementos?',times.size)
console.log('Has, caixa baixa?',times.has('vasco'))
console.log('Has, Caixa alta?',times.has('Vasco'))
times.delete('Flamengo')//Deletou o elemento
console.log('has, foi deletado o elemento?',times.has('Flamengo'))//Verificando se existe o elemento

const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)