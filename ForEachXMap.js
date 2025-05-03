// A diferenca entre o map e o forEach e que o map retorna um novo array e o forEach nao
// Alem disso, o map e mais utilizado para transformar os dados de um array em um novo array, 
// enquanto o forEach e mais utilizado para iterar sobre os elementos de um array.

// Exemplo 1 Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (array original não alterado)

// Exemplo 2 ForEach
const people = []
people.push(new Pessoa("John Doe", 25, "Rua 1", "New York", "USA"));
people.push(new Pessoa("Jane Doe", 30, "Rua 2", "Los Angeles", "USA"));
people.push(new Pessoa("Jimmy Doe", 25, "Rua 5", "Miami", "USA"));

const cities = [];
people.forEach(person => cities.push(person.endereco.cidade));
console.log(cities); // ["New York", "Los Angeles", "Miami"]
