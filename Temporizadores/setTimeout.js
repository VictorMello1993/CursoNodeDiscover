// setTimeOut => Executa uma função de callback depois de x milissegundos

//Tempo em milissegundos
const timeout = 3000

//Função de callback
const finished = () => console.log('Fim do programa!')
         
setTimeout(finished, timeout)
console.log('Mostrar') //Será executada primeiro do que setTimeout, pois o processo é assíncrono

/*A arquitetura do Node, como é single thread, ela não é bloqueante. Ou seja, em aplicações assíncronas, enquanto que 
uma parte do código espera a execução de uma parte do código durante um determinado tempo, 
ela pode executar outras tarefas. Esse é o papel do event loop*/