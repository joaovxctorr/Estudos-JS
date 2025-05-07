// .reduce() = reduce the elements of an array to a single value

// Example 1
const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(accumulator, element) {
    return accumulator + element; 
}

// Example 2

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

// Example 3
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