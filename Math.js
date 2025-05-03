let numero1 = 9.7901301;

let numero2 = Math.round(numero1); // Arredonda o número para o inteiro mais próximo
console.log(numero2); // 10

let numero3 = Math.floor(numero1); // Arredonda o número para baixo
console.log(numero3); // 9

let numero4 = Math.ceil(numero1); // Arredonda o número para cima
console.log(numero4); // 10

let numero5 = Math.trunc(numero1); // Remove a parte decimal do número
console.log(numero5); // 9

console.log(Math.max(54, 23, 45, 67, 89)); // Retorna o maior número entre os argumentos
console.log(Math.min(54, 23, 45, 67, 89)); // Retorna o menor número entre os argumentos
console.log(Math.random()); // Retorna um número aleatório entre 0 e 1
console.log(Math.random() * 10); // Retorna um número aleatório entre 0 e 10