// O método every() em JavaScript verifica se todos os elementos de um array satisfazem uma condição específica definida 
// em uma função callback. Se todos os elementos passam no teste, every() retorna true; caso contrário, retorna false. 
// Importante notar que o método every() para de verificar os elementos assim que encontra o primeiro que não satisfaz a 
// condição.

// Exemplo 1 - Verificando se todos os números são positivos
const numeros = [1, 2, 3, 4, 5];

const todosPositivos = numeros.every(numero => numero > 0);

console.log(todosPositivos); // true

// Exemplo 2 - Verificando se todos os objetos em um array têm uma propriedade específica
const usuarios = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carol", idade: 22 }
  ];
  
const todosTemNome = usuarios.every(usuario => usuario.hasOwnProperty('nome'));
  
console.log(todosTemNome); // true
  
// Exemplo 2 se um array está vazio
const vazio = [];

const resultado = vazio.every(elemento => elemento > 0);

console.log(resultado); // true
