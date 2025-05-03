// O operador rest (...) em JavaScript é usado para agrupar múltiplos elementos em um único array ou objeto. 
//Ele é o oposto do operador spread: enquanto o spread "espalha" elementos, o rest "coleta" elementos.

// Exemplo 1: Uso com Funções
// O operador rest é frequentemente usado em funções para capturar um número indefinido de argumentos em um array.

function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
// Nesse exemplo, ...numbers coleta todos os argumentos passados para a função sum em um array chamado numbers, 
// permitindo que a função lide com um número indefinido de argumentos.

// Exemplo 2: Uso com Desestruturação de Arrays
// O operador rest também pode ser usado para capturar o restante de um array ao desestruturá-lo.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
// Aqui, first e second capturam os dois primeiros elementos do array, enquanto rest captura o restante dos elementos 
// em um novo array.

// Exemplo 3: Uso com Desestruturação de Objetos
// Da mesma forma, o operador rest pode ser usado para capturar as propriedades restantes de um objeto durante a 
// desestruturação.

const person = { name: 'John', age: 30, job: 'Developer' };

const { name, ...details } = person;

console.log(person.name);    // Output: John
console.log(details); // Output: { age: 30, job: 'Developer' }
// Aqui, name captura a propriedade name do objeto person, e details captura as propriedades restantes em um novo objeto.

// Benefícios do Operador Rest
// Flexibilidade: O operador rest permite que você lide com um número variável de argumentos de maneira simples e clara.

//Desestruturação Elegante: Ele facilita a desestruturação de arrays e objetos, especialmente quando você não precisa de 
//todos os elementos ou propriedades.

// Evita Argumentos: Ao usar rest, você evita a necessidade de manipular o objeto arguments em funções, tornando o código
// mais legível e fácil de manter.

//  Exemplo 4: Sorteio de Números
function sorteador(...numeros) {
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length); // Gera um número aleatório entre 0 e o tamanho do array

  console.log(`O número sorteado foi: ${numeros[numeroGerado]}`);
}

sorteador(1, 5, 12, 28, 36, 49);