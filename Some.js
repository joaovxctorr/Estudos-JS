// O método some() em JavaScript verifica se ao menos um dos elementos de um array atende a uma condição específica definida
// em uma função callback. Se encontrar pelo menos um elemento que satisfaça a condição, 
// some() retorna true; caso contrário, retorna false. Assim como o método every(), some() para de verificar os elementos
// assim que encontra o primeiro que satisfaz a condição.

// Exemplo 1 Verificando se algum elemento tem um certo comprimento
const palavras = ["maçã", "banana", "uva"];

const algumaLonga = palavras.some(palavra => palavra.length > 5); // Usando some para verificar se alguma palavra tem mais de 5 letras

console.log(algumaLonga); // true

// Exemplo 2 Verificando se algum número é maior que 10
const numeros = [3, 5, 8, 12, 7];

const algumNumero = numeros.some(numero => numero > 10); // Usando some para verificar se algum número é maior que 10

console.log(algumNumero); // true
