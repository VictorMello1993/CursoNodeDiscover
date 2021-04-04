//Desafio 1
//Criar 2 arquvios JavaScript
//O primeiro, irá exportar uma função chamada getFlag(), que receberá um argumento do tipo String
//Essa função deverá buscar dentro do array process.argv a flag desejada, que é a string, e retornar o valor da flag

//O segundo irá importar a função e passar a flag desejada

//Iremos rodar no terminal o segundo arquivo passando as flags --name e --greetings para que seja impresso no terminal a saudação e o nome da pessoa.

function getFlag(flag){
    index = process.argv.indexOf(flag)
    return process.argv[index + 1]
}

module.exports = getFlag