// Filter vai retornar um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// Example 1
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter((isEven) => {
    return isEven % 2 === 0;
});
let oddNumbers = numbers.filter((isOdd) => {
    return isOdd % 2 !== 0;
}); 

console.log("Numero Pares: " + evenNumbers); // [2,4,6,8,10]
console.log("Numero Impares: " + oddNumbers); // [1,3,5,7,9]
console.log("========================================");

// Example 2

const ages = [10, 12, 15, 17, 22, 25, 28, 31];
const adults = ages.filter((age) => {
    return age >= 18;
});

console.log("Maiores de Idade: " + adults); // [22, 25, 28, 31]

console.log("========================================");

// Example 3

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const shortWords = words.filter((getShortWords) => {
    return getShortWords.length <= 5;
});

console.log("Palavras pequenas: " + shortWords); 

console.log("========================================");

// Example 4
let nome = ["Joao", "Maria", "Jose", "Ana", "Pedro", "Lucas"];
let tamanho = nome.filter((item) => {
    return item.length > 4;
});

console.log("Nomes com mais de 4 letras: " + tamanho); 

console.log("========================================");

// Example 5
const numeros = [5, 8, 12, 15, 20, 25, 30, 35, 40, 45, 50];
const numerosMaioresQue10 = numeros.filter((numero) => {
    return numero >= 10;
});
console.log("Numeros maiores que 10: " + numerosMaioresQue10); // [12, 15, 20, 25, 30, 35, 40, 45, 50]

console.log("========================================");

// Example 6
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 17 },
    { nome: 'José', idade: 30 },
    { nome: 'Ana', idade: 15 },
    { nome: 'Pedro', idade: 20 }
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length > 4);
console.log("Pessoas com nome maior que 4: " + pessoasComNomeGrande.map(p => p.nome).join(", "));

const pessoasComIdadeMaiorQue20 = pessoas.filter(obj => obj.idade > 20);
console.log("Pessoas com idade maior que 20: " + pessoasComIdadeMaiorQue20.map(p => p.nome).join(", "));


const nomeTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log("Pessoas que terminam com a: " + nomeTerminaComA.map(p => p.nome).join(", "));