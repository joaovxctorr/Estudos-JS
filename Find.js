// Find vai buscar um elemento na página e retornar o primeiro que encontrar.

// Exemplo 1
let listagem = [5,3, "Maria", 10, 2, "Joao", 15, 20, "Jose", 25];
let buscar = listagem.find((item) =>{
    return item === "Maria";
})

console.log("Encontrado: " + buscar); 