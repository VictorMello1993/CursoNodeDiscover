//clearTimeout => cancela a execução da função setTimeout()

const timeout = 3000
const finished = () => console.log('Fim do programa!')

// console.log(setTimeout(finished, timeout))
let timer = setTimeout(finished, timeout)

clearTimeout(timer)
console.log('Opa, cheguei primeiro!')
