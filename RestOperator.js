// O operador Rest (...) em JavaScript permite agrupar o restante dos elementos ou propriedades que não foram 
// desestruturados em uma coleção (array ou objeto). Ele é útil para coletar todos os argumentos restantes de uma 
// função ou as propriedades restantes de um objeto em uma única variável.

// Exemplo 1 - Rest Operator em Arrays
//Quando usado em arrays, o operador Rest coleta o restante dos elementos após uma desestruturação inicial.
const numeros = [1, 2, 3, 4, 5];

const [a, ...resto] = numeros; // Aqui, "a" captura o primeiro elemento, e "resto" captura o restante dos elementos

console.log(a); // 1
console.log(resto); // [2, 3, 4, 5]

// Exemplo 2 - Rest Operator em Objetos
// No caso dos objetos, o operador Rest pode ser usado para capturar as propriedades que não foram desestruturadas explicitamente.
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Engenheiro"
  };
  
  const { nome, ...resto1 } = pessoa; // Aqui, "nome" captura a propriedade "nome", e "resto" captura o restante das propriedades
  
  console.log(nome); // "João"
  console.log(resto1); // { idade: 30, cidade: "São Paulo", profissao: "Engenheiro" }
  
// Exemplo 3 - Rest Operator em Funções
// O operador Rest também é muito útil quando utilizado em funções para agrupar todos os argumentos restantes em um array.
function soma(primeiro, ...resto) {
    console.log("Primeiro argumento:", primeiro); // O primeiro argumento
    console.log("Restantes argumentos:", resto);  // Um array com todos os outros argumentos
  
    return resto.reduce((acumulador, valorAtual) => acumulador + valorAtual, primeiro); // Soma todos os valores do array 'resto' começando com o valor de 'primeiro'
  }
  
  const resultado = soma(1, 2, 3, 4);  // Chamando a função 'soma' com múltiplos argumentos
  
  console.log("Resultado da soma:", resultado); // 10
// Neste exemplo, a função 'soma' recebe um argumento 'primeiro' e usa o operador Rest (...) para coletar todos os 
//outros argumentos em um array chamado 'resto'.  