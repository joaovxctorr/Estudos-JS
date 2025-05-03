// O método map() é uma função disponível em arrays no JavaScript que permite criar um novo array aplicando uma função a
// cada elemento do array original. Ele é especialmente útil para transformar os dados em um array sem modificar o array 
// original.

// Exemplo 1
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log("Novo Array: " + doubled); // [2, 4, 6, 8]
console.log("Array original: " + numbers); // [1, 2, 3, 4] (array original não alterado)
console.log("========================================");

// Exemplo 2
let lista = ["Joao", "Maria", "Jose"];

lista.map((nome, index) => {
    console.log(`Nome: ${nome}, Posição: ${index}`);
    console.log("========================================");
    }); 


// Exemplo 3
let numeros = [5, 10, 15, 20, 25];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`Acumulador: ${acumulador} - total ate o momento`);
    console.log(`Número: ${numero} - valor atual`);
    console.log(`Índice: ${indice} - posição atual`);
    console.log(`Original: ${original} - array original\n`);
    console.log("========================================");
    return acumulador += numero;
    }) 

console.log("Total: " + total); 

