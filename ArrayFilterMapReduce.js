const numeros = [5, 10, 15, 20, 25];
const numerosPares = numeros.filter((numero) => { // Filtra os números pares
    return numero % 2 === 0;
}).map((numero) => { // Multiplica os números pares por 2
    return numero * 2;
}).reduce((acumulador, numero) => { // Soma os números pares multiplicados por 2
    return acumulador + numero;
});
console.log("Soma dos numeros pares multiplicados por 2: " + numerosPares); 