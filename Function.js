// argumentos que sustenta todos os argumentos da função
// arguments é um objeto semelhante a um array que contém todos os argumentos passados para a função
// nao funciona em arrow function
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)  
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // esses argumentos são passados para a função e o resultado é 55

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "*") acumulador *= numero;
        if (operador === "/") acumulador /= numero;

    }
    console.log(acumulador);  
}

conta("+", 0, 20, 30, 40, 50); // resultado é 140

const conta2 = (...args) => {
    console.log(args);
};
conta2('+', 0, 20, 30, 40, 50); 