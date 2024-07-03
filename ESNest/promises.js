//Promises - temporizador para resolver ou rejeitar

function falatDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            reject(frase)
        }, segundos * 1000)//setTimeout sãos segundos / delay
    })
}
falatDepoisDe(3, 'Que legal!')// passa 3 seg e a frase
    .then(frase => frase.concat('?!?'))//encadeamento de ações com a frase (resolve)
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//tratando o error