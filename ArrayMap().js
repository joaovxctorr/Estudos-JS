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
    }); 

console.log("========================================");


// Exemplo 3
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 17 },
    { nome: 'José', idade: 30 },
    { nome: 'Ana', idade: 22 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log("Nomes: " + nomes); // ['João', 'Maria', 'José', 'Ana']

const idades = pessoas.map(pessoa => pessoa.idade);
console.log("Idades: " + idades); // [25, 17, 30, 22]

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; // cria uma cópia do objeto original
    newObj.id = indice + 1; // adiciona a propriedade id
    return newObj; 
});
console.log(comIds)

