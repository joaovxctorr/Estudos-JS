// O método find() e o método findIndex() em JavaScript são usados para pesquisar um array com base em uma condição 
// fornecida por uma função callback. Embora ambos façam uma busca no array, eles retornam resultados diferentes:

// find() retorna o primeiro elemento que atende à condição.
// findIndex() retorna o índice do primeiro elemento que atende à condição.

// Exemplo 1: find() - Encontrando o primeiro número par
const numeros = [1, 3, 5, 7, 8, 10];

const primeiroPar = numeros.find(numero => numero % 2 === 0);

console.log(primeiroPar); // 8

// Exemplo 2: findIndex() - Encontrando o índice do primeiro número par
const numeros1 = [1, 3, 5, 7, 8, 10];

const indicePrimeiroPar = numeros1.findIndex(numero => numero % 2 === 0); 

console.log(indicePrimeiroPar); // 4 
// Aqui, findIndex() retorna 4, que é o índice do número 8, o primeiro número par no array.

