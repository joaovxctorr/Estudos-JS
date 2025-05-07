// ForEach() = method used to iterate over the elements of an array and apply a specific function(callback)
// to each element.

//ForEach() = vai ser usado para iterar sobre os elementos de um array e aplicar uma função específica(callback)

// example 1
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
} // Essa funcao vai dobrar cada elemento do array numbers

console.log(numbers); // [2, 4, 6, 8, 10]

function display(element) {
    console.log(element); 
} // essa funcao vai exibir cada elemento do array numbers 


// Example 2
let fruits = ["apple", "banana", "orange", "grape"];

fruits.forEach(upperCase);
fruits.forEach(displayFruit);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
} // essa funcao vai transformar cada elemento do array fruits em maiusculo

function displayFruit(element) {
    console.log(element); // APPLE, BANANA, ORANGE, GRAPE
} 

// Example 3
let vegetables = ["carrot", "potato", "onion", "tomato"];

vegetables.forEach(capitalize);
vegetables.forEach(displayVegetable);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
} // essa funcao vai capitalizar a primeira letra de cada elemento do array vegetables

function displayVegetable(element) {
    console.log(element); // Carrot, Potato, Onion, Tomato
}