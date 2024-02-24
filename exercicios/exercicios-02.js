/* Neste exercício, você encontrará a implementação de uma função em JavaScript:

1. Função para verificar a maiorIdade

Sua tarefa é criar uma nova função:

2. Função para dobrar um número

Esta função deve receber um parâmetro do tipo number e retornar o dobro desse número.

Após criar essa nova função, teste-a com alguns valores e imprima o resultado no console.

Você pode executar o código usando Node.js ou qualquer outro ambiente de execução JavaScript para verificar se a nova função foi implementada corretamente. 
*/

function maiorIdade(idade1, idade2){
   if (idade1 > idade2){
      let mensagem = `Primeira Idade: ${idade1} é maior que a Segunda Idade: ${idade2}`
      return mensagem
   }

   else{
      let mensagem = `Primeira Idade: ${idade1} não é maior que a Segunda Idade: ${idade2}`
      return mensagem
   }
}

function dobraNumber(num1){
   return num1 * 2
}

console.log(maiorIdade(15, 18))
console.log(dobraNumber(8))