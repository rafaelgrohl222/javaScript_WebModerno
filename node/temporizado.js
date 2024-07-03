// Teporizador
const schedule = require('node-schedule')

// 5 em 5sg em qualquer min hora 12 iguinora o dia e o mês na terça, 0 é domingo, 1 seg e 2 terça
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 4', function() {
    console.log('Executando a tarefa 1!', new Date().getSeconds())
})