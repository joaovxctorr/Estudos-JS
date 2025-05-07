// -5  -4  -3  -2  -1  0 
//  0   1   2   3   4  5 

const fruits = [
    {name: 'apple', color: 'red', calories: 95},
    {name: 'banana', color: 'yellow', calories: 105},
    {name: 'grape', color: 'purple', calories: 45},
    {name: 'orange', color: 'orange', calories: 62},
    {name: 'pear', color: 'green', calories: 100},
    {name: 'strawberry', color: 'red', calories: 45},
]

fruits.push({name: 'pineapple', color: 'yellow', calories: 452}) // push adiciona um item ao final do array
console.log(fruits) 

fruits.pop() // pop remove o último item de um array

fruits.shift() // shift remove o primeiro item de um array

fruits.push() // push adiciona um item ao final de um array

fruits.unshift() // unshift adiciona um item ao início de um array

fruits.concat() // concat combina dois arrays

fruits.slice() // slice retorna uma parte de um array

fruits.split(",") // split divide uma string em um array

fruits.join("+") // join combina um array em uma string

fruits.splice() // splice remove ou substitui itens de um array

fruits.sort() // sort ordena um array

fruits.reverse() // reverse inverte a ordem de um array

fruits.indexOf() // indexOf retorna o índice de um item em um array

fruits.lastIndexOf() // lastIndexOf retorna o último índice de um item em um array

fruits.includes() // includes retorna true se um array contém um item

fruits.find() // find retorna o primeiro item que satisfaça uma condição

fruits.some() // some retorna true se pelo menos um item satisfaz uma condição

fruits.every() // every retorna true se todos os itens satisfazem uma condição

fruits.filter() // filter retorna um novo array com base em uma condição

fruits.map() // map retorna um novo array com base em um array existente

fruits.forEach() // forEach executa uma função para cada item de um array

fruits.reduce() // reduce retorna um valor único com base em um array
    
// Exemplos de uso de funções de array

// Map se trata de uma função que retorna um novo array com base em um array existente   
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // ['apple', 'banana', 'grape', 'orange', 'pear', 'strawberry', 'pineapple']

// ForEach se trata de uma função que executa uma função para cada item de um array
fruits.forEach(fruit => console.log(fruit.calories));

// Filter se trata de uma função que retorna um novo array com base em uma condição
const redFruits = fruits.filter(fruit => fruit.color === 'red');
const lowCalories = fruits.filter(fruit => fruit.calories < 60);
console.log(redFruits); // [{name: 'apple', color: 'red', calories: 95}, {name: 'strawberry', color: 'red', calories: 45}]
console.log(lowCalories); // [{name: 'grape', color: 'purple', calories: 45}, {name: 'strawberry', color: 'red', calories: 45}]

// Find se trata de uma função que retorna o primeiro item que satisfaça uma condição
const yellowFruit = fruits.find(fruit => fruit.color === 'yellow');
console.log(yellowFruit); // {name: 'banana', color: 'yellow', calories: 105}

// Some se trata de uma função que retorna true se pelo menos um item satisfaz uma condição
const hasYellowFruit = fruits.some(fruit => fruit.color === 'yellow');
console.log(hasYellowFruit); // true

// Every se trata de uma função que retorna true se todos os itens satisfazem uma condição
const allRedFruits = fruits.every(fruit => fruit.color === 'red');
console.log(allRedFruits); // false

// Reduce se trata de uma função que retorna um valor único com base em um array
const totalCalories = fruits.reduce((acc, fruit) => acc + fruit.calories, 0);
console.log(totalCalories); // 852

// Includes se trata de uma função que retorna true se um array contém um item
const hasApple = fruits.includes('apple');
console.log(hasApple); // false

// IndexOf se trata de uma função que retorna o índice de um item em um array
const IndexOf = fruits.indexOf('pear')
console.log(indexOf); // 4

// LastIndexOf se trata de uma função que retorna o último índice de um item em um array
const lastIndexOf = fruits.lastIndexOf('banana')
console.log(lastIndexOf); // 1

// Sort se trata de uma função que ordena um array
const sortedFruits = fruits.sort((a, b) => a.calories - b.calories);
console.log(sortedFruits);

// Reverse se trata de uma função que inverte a ordem de um array
const reversedFruits = fruits.reverse();
console.log(reversedFruits);

// Slice se trata de uma função que retorna uma parte de um array
const slicedFruits = fruits.slice(1, 4); // retorna os itens do índice 1 ao 4
console.log(slicedFruits); // 

// Splice se trata de uma função que remove ou substitui itens de um array
const splicedFruits = fruits.splice(1, 2); // remove os itens do índice 1 ao 2
console.log(splicedFruits); 

// Concat se trata de uma função que combina dois arrays
const vegetables = ['carrot', 'lettuce', 'tomato'];
const food = fruits.concat(vegetables);
console.log(food); // ['apple', 'banana', 'grape', 'orange', 'pear', 'strawberry', 'pineapple', 'carrot', 'lettuce', 'tomato']

