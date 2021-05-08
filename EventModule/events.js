const {EventEmitter} = require('events')
const {inherits} = require('util')

const event = new EventEmitter()

//Uma vez que um evento é disparado, outra parte do código precisa escutar esse mesmo evento e executar alguma ação
event.on('saySomething', (message = '') => console.log('Opa, eu ouvi você!', message))

//Disparando um evento apenas uma única vez (once)
event.once('saySomething', (message = '') => console.log('Opa, eu ouvi você!', message))

//Disparando um evento
event.emit('saySomething')
event.emit('saySomething', 'Victor')

function Character(name){
  this.name = name
}

//Herdando objetos do EventEmitter
inherits(Character, EventEmitter)

const batman = new Character('Batman')
batman.on('help', () => console.log(`Eu sou vingador, eu sou a noite, eu sou ${batman.name}!`))

console.log('E agora? Quem poderá nos salvar?')
batman.emit('help')