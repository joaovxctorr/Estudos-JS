/*
Primitivos (Imutaveis) são os tipos de dados que não podem ser alterados.
Os valores primitivos são imutáveis, ou seja, não podem ser alterados após serem criados. 
Quando você tenta alterar um valor primitivo, na verdade, você está criando um novo valor e 
atribuindo a nova referência a uma variável.
Strings, Numbers, Booleans, Undefined, Null e Symbols são exemplos de tipos primitivos.
*/

/*
Referencia (Mutaveis) são os tipos de dados que podem ser alterados.
Os valores de referência são mutáveis, ou seja, podem ser alterados após serem criados.
arrays, objetos e funções são exemplos de tipos de referência.
*/

let a = [1, 2, 3]; // array
let b = a; // b referencia o mesmo array que a
b.push(4); // adiciona 4 ao array referenciado por b
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

a = [5, 6, 7]; // a agora referencia um novo array
console.log(a); // [5, 6, 7]
console.log(b); // [1, 2, 3, 4]
