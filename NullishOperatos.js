//  O Nullish Coalescing Operator (??) é um operador em JavaScript que retorna o lado direito da expressão quando o 
// lado esquerdo é null ou undefined. Caso contrário, retorna o valor do lado esquerdo. Ele é útil para fornecer 
// valores padrão em casos onde uma variável pode ser null ou undefined.

//Como funciona?
// O operador ?? avalia a expressão da seguinte forma:
// Se a expressão do lado esquerdo for null ou undefined, o valor do lado direito é retornado.
//Se a expressão do lado esquerdo for qualquer outro valor (incluindo 0, false, NaN, ou uma string vazia ""), esse valor é retornado

// Exemplo 1
const valor1 = null;
const valor2 = "Hello";
const resultado1 = valor1 ?? "Valor padrão";
console.log(resultado1); // "Valor padrão" porque valor1 é null

const resultado2 = valor2 ?? "Valor padrão";
console.log(resultado2); // "Hello" porque valor2 não é null nem undefined

const valor3 = 0;
const resultado3 = valor3 ?? 42;
console.log(resultado3); // 0 porque valor3 é um número válido, mesmo sendo 0

