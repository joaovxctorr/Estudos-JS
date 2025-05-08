// .reduce() = reduce the elements of an array to a single value

// Example 1
const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const total = prices.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});

console.log(`$${total.toFixed(2)}`)

// Example 2
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 17 },
    { nome: 'José', idade: 30 },
    { nome: 'Ana', idade: 22 },
    { nome: 'Pedro', idade: 18 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
});

console.log(maisVelha.nome + " é a mais velha com " + maisVelha.idade + " anos.");

// Example 3

const grades = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum)
console.log(minimum)

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}

// Example 4
let numeros = [5, 10, 15, 20, 25];

let total2 = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`Acumulador: ${acumulador} - total ate o momento`);
    console.log(`Número: ${numero} - valor atual`);
    console.log(`Índice: ${indice} - posição atual`);
    console.log(`Original: ${original} - array original\n`);
    console.log("========================================");
    return acumulador += numero;
    }) 

console.log("Total: " + total2); 