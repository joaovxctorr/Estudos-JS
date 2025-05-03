let variavelA = 'A';
let variavelB = 'B';
let variavelC = 'C';

console.log("Ordem original das variáveis: ", variavelA, variavelB, variavelC);

// Para inverter a ordem das variáveis, podemos usar uma técnica de destruturação
[variavelA, variavelB, variavelC] = [variavelB, variavelC, variavelA];
console.log("Nova ordem das variáveis: ", variavelA, variavelB, variavelC);