// process.stdout.write('Alguma coisa\n')

const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que poderia fazer para melhorar?',  
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => process.stdout.write('\n' + questions[index] + ' > ')

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length){
    ask(answers.length)
  }
  else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
 console.log(`
  Legal, Victor!

  O que você aprendeu hoje foi:
  ${answers[0]}

  O que te aborreceu e você poderia melhorar foi:
  ${answers[1]}

  O que te deixou feliz hoje foi:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas hoje!!

  Volte sempre! =)
 `) 
})

/*process.stdout.write(str: string) => Imprime uma mensagem na tela (processo no contexto do Node.js). É similar ao 
console.log(), mas a diferença é que o console.log() já chama o process.stdout.write() já com a saída formatada
(por padrão com quebra de linha '\n')*/

//Mais informações: https://nodejs.org/docs/latest/api/console.html#console_console_log_data_args

//process.stdin.on(str: string) => Permite a entrada de dados no processo

//OBS: o process é o próprio 'this' no escopo global do Node

//O mais interessante ainda é que um processo pode escutar eventos, por meio do 'process.on()'

