// For - Geralmente com iteraveis(arreys, strings, objetos) e com contagem de números
// For in - retorna o índice ou chave (string, array ou objeto)
// For of - retorna o valor do índice em si (iteravel, array ou string)

// For
for (let i = 0; i <= 5; i++) {
    console.log(`Iteração ${i}`);
}

for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? "par" : "ímpar";
    console.log(`Iteração ${i} - ${par}`);
}

const cores = ["vermelho", "verde", "azul", "amarelo", "roxo"];
for (let i = 0; i < cores.length; i++) {
    console.log(`Cor ${i + 1}: ${cores[i]}`); // i + 1 para exibir a contagem a partir de 1
}

// For in 
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
for (let indice in frutas) {
    console.log(`Fruta ${indice + 1}: ${frutas[indice]}`); // indice + 1 para exibir a contagem a partir de 1
}

const pessoa = {
    nome: "Alice",
    idade: 25,
    cidade: "São Paulo"
};
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Exibe a chave e o valor correspondente
}

// For of 
const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(`Número: ${numero}`); // Exibe cada número do array
}

