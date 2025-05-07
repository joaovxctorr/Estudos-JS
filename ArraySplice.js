// splice() - Método splice() altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar.
// servindo como pop, push, shift e unshift

const fruits = [
    {name: 'apple', color: 'red', calories: 95},
    {name: 'banana', color: 'yellow', calories: 105},
    {name: 'grape', color: 'purple', calories: 45},
    {name: 'orange', color: 'orange', calories: 62},
    {name: 'pear', color: 'green', calories: 100},
    {name: 'strawberry', color: 'red', calories: 45},
]

console.log("Array original: ", fruits) 

//fruits.splice(indice, Numero de itens a serem removidos, item a ser adicionado)
fruits.splice(2, 1, {name: 'kiwi', color: 'green', calories: 42}) // remove o item no índice 2 e adiciona o item no índice 2
console.log("Novo array substituindo", fruits)

fruits.splice(2, 0, {name: 'blueberry', color: 'blue', calories: 60})
console.log("Novo array adicionando", fruits)

fruits.splice(0, 3)
console.log("Novo array removendo", fruits)