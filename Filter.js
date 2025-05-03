// Filter vai retornar um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// Example 1
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd); 

console.log("Numero Pares: " + evenNumbers); // [2,4,6,8,10]
console.log("Numero Impares: " + oddNumbers); // [1,3,5,7,9]
console.log("========================================");

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

// Example 2

const ages = [10, 12, 15, 17, 22, 25, 28, 31];
const adults = ages.filter(isAdult);

console.log("Maiores de Idade: " + adults); // [22, 25, 28, 31]
console.log("========================================");

function isAdult(age) {
    return age >= 18;
}

// Example 3

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const shortWords = words.filter(getShortWords);

console.log("Palavras pequenas: " + shortWords); 
console.log("========================================");

function getShortWords(word) {
    return word.length <= 5;
}

// Example 4
let nome = ["Joao", "Maria", "Jose", "Ana", "Pedro", "Lucas"];
let tamanho = nome.filter((item) => {
    return item.length > 4;
});

console.log("Nomes com mais de 4 letras: " + tamanho); 

