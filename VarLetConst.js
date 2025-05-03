// var vai ser visível em todo o escopo

// let e const são visíveis apenas no escopo onde foram declaradas
// a diferença entre let e const é que let pode ser reatribuída, enquanto const não pode  ser reatribuída

// Exemplo 1
var nome = 'Lucas';

if (nome === 'Lucas') {
    var sobrenome = 'Fernandes';
    let idade = 22; // idade só é visível dentro do bloco if
}

console.log(nome, sobrenome); // Lucas Fernandes
console.log(nome, idade); // ReferenceError: idade is not defined

// Exemplo 2
let bonus = true;

if (bonus) {
    let salario = 4000 + 1000;
    console.log(salario); // 5000
}

salario += 500; // ReferenceError: salario is not defined // salario só é visível dentro do bloco if

// exemplo 3
var aumento = true; 

if (aumento) {
    var promocao = 4000;
}

console.log("Seu aumento foi de: " + promocao); // 4000

// Exemplo 4
const dono = 'Matheus';
dono = 'Lucas'; // TypeError: Assignment to constant variable. // const não pode ser reatribuída

