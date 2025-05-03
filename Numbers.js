let primeiroNumero = 10.09348538953; 
let segundoNumero = 20.09348538953;

// Arredonda o número com 2 e 4 casas decimais
console.log(primeiroNumero.toFixed(2)); // "10.09"
console.log(primeiroNumero.toFixed(4)); // "10.0935"

console.log(Number.isInteger(primeiroNumero));     // false → não é número inteiro
console.log(Number.isNaN(primeiroNumero));         // false → não é NaN (Not a Number)
console.log(Number.isFinite(primeiroNumero));      // true → é um número finito
console.log(Number.isSafeInteger(primeiroNumero)); // false → não é um inteiro seguro


console.log("==========================");

let num1 = 0.1; 
let num2 = 0.7;
num2 += num1; // num1 = num1 + num2
num2 += num1; // 0.9
num2 += num1; // 0.99999999999999

num2 = parseFloat(num2.toFixed(2)); 

console.log(num2); 