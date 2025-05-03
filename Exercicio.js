// Função que vai retorna o maior número entre dois números
const max = (a, b) => a > b ? a : b; 
console.log(max(10, 20)); 

// Funcao que vai retornar o tamanho da tela
const tamanho = (largura, altura) => largura > altura;
console.log(tamanho(1080, 720)); // true
console.log(tamanho(720, 1080)); // false

// Funcao que vai verificar se o numero vai ser divisivel por 3 ou 5 ou por ambos
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}