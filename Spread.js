// O operador spread (...) em JavaScript é usado para espalhar os elementos de um array ou objeto em outro array ou 
// objeto, respectivamente. Ele é útil para copiar, combinar ou expandir arrays e objetos de forma simples e concisa.

//Exemplo 1:  com Arrays
// Com arrays, o operador spread pode ser usado para copiar elementos de um array para outro, combinar vários arrays, 
// ou espalhar elementos individuais em um novo array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2]; // Combinando arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const copyArray = [...arr1]; // Copiando um array
console.log(copyArray); // Output: [1, 2, 3]

// Exemplo 2: com Objetos
// Com objetos, o operador spread permite copiar propriedades de um objeto para outro ou combinar vários objetos.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 }; // Combinando objetos
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

const copyObject = { ...obj1 }; // Copiando um objeto
console.log(copyObject); // Output: { a: 1, b: 2 }

// Benefícios do Operador Spread
// Simplicidade: O código se torna mais claro e conciso.

// Imutabilidade: O operador spread facilita a criação de cópias em vez de modificar os arrays ou objetos originais, 
// promovendo práticas de programação imutáveis.

// Flexibilidade: Ele pode ser usado em várias situações, como passar elementos de um array como argumentos para uma 
// função, clonar arrays ou objetos, e combinar dados.