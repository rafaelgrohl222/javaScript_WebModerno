const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)//Forma errada de chamar
console.log(tecnologias.get('react'))//Forma certa de chamar
console.log(tecnologias.get('react').framework)//Forma certa de chamar

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))//Função se elemento está ou não está contido dentro
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))//Função se elemento está ou não está contido dentro
console.log(chavesVariadas.size)//Funão de quantos elementos tem

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)