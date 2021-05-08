//setInterval => Executa uma função de callback a cada intervalo de tempo especificado, e de forma indefinida

const timeout = 1000
const checking = () => console.log('Checking...')

setInterval(checking, interval)
