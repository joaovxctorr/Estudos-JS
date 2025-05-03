// Arrow Functions = a concise way to write expressions, good for simple functions
// that you use only once (parameter) => some code

// Example 1
const hello = (name, age) => { 
    console.log(`Hello ${name}, you are ${age} years old`);
}

hello('John', 25);

// Example 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((element) => {
    return Math.pow(element, 2);
});

console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Example 3
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];

const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // [5, 3, 7, 5, 6]    

