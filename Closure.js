// Closure = A function defined inside of another function, the inner function
// has access to the outer function's variables and scope of the outer function
// Allow for private variables and state maintenance
// Used frequently in Frameworks: jQuery, React, Angular, etc.

// Closure se trata de uma função definida dentro de outra função, a função interna
// tem acesso as variáveis da função externa e ao escopo da função externa
// Permite variáveis privadas e manutenção de estado
// Usado frequentemente em Frameworks: jQuery, React, Angular, etc.

// Example 1
function outer() {
    let message = 'Hello';

    function inner() {
        console.log(message);
    }

    inner(); // Hello
}

outer(); // Nao vai pegar

// Example 2
function createCounter() {
    let count = 0;

count = 10;

    function increment() {
        count++;
        console.log(count);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment(); // 11
counter.increment(); // 12
counter.increment(); // 13

console.log(`the current count is: ${counter.getCount()}`); // 13

// Example 3
function createGame() {

    let score = 0;

    function incrementScore(points) {
        score+= points;
        console.log(`+${score}pts`);
    }

    function decrementScore(points) {
        score-= points;
        console.log(`-${score}pts`);
    }

    function getScore() {
        return score;
    }

    return {incrementScore, decrementScore, getScore};
}

const game = createGame();

game.incrementScore(10); // +10pts
game.decrementScore(5); // -5pts

console.log(`the current score is: ${game.getScore()}`); // 5
