// alert é uma função que mostra uma mensagem na tela
// prompt é uma função que pede uma informação para o usuário
// parseInt transforma uma string em um número inteiro
// parseFloat transforma uma string em um número decimal
// Number transforma uma string em um número, mas não funciona para números decimais
// Number.isInteger verifica se um número é inteiro
// Number.isNaN verifica se um número é NaN (Not a Number)
// Number.isFinite verifica se um número é finito
// Number.isSafeInteger verifica se um número é um inteiro seguro
// Number.isInteger verifica se um número é inteiro


let primeiroNumero = prompt("Digite o primeiro número: ");
let segundoNumero = prompt("Digite o segundo número: ");

let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);

alert(`A soma é: ${resultado}`);
//precisa abrir no navegador para funcionar
