// Function Expression = a way to define functions as values or variables

// 1. Callbacks is assynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// Example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function (element) {
    return Math.pow(number, 2);
});

const cubes = numbers.map(function (element) {
    return Math.pow(number, 3);
});

const evenNumber = numbers.filter(function (element) {
    return element % 2 === 0;
});

const oddNumber = numbers.filter(function (element) {
    return element % 2 !== 0;
});

console.log(squares);
console.log(cubes);
console.log(evenNumber);
console.log(oddNumber);
