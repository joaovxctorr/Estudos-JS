// A desestruturação em JavaScript é uma forma de extrair valores de arrays ou propriedades de objetos em 
// variáveis distintas. Isso torna o código mais limpo e facilita o acesso a valores específicos dentro de estruturas
// mais complexas.

// Com a desestruturação de arrays, você pode extrair valores de um array e atribuí-los a variáveis.

// Exemplo 1 - Desestruturação de arrays
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;
console.log(a); // 1 
console.log(b); // 2

const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, terceiro, ...resto] = numeros;
console.log(primeiro, segundo, terceiro); // 10 20 30
console.log(resto); // [40, 50]

// Exemplo 2 - Desestruturação de Objetos
const pessoa = {
    nome: "Alice",
    idade: 25,
    cidade: "São Paulo"
  };
  
  const { nome, idade } = pessoa;
  
  console.log(nome); // "Alice"
  console.log(idade); // 25

// Exemplo 3 - Desestruturação  em parâmetros de funções
function mostrarPerfil({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  }
  
  const usuario = {
    nome: "Carlos",
    idade: 30
  };
  
  mostrarPerfil(usuario); // "Nome: Carlos, Idade: 30"
  