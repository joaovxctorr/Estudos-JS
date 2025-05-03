// Exemplo 1
let lista = ["computador", "mouse", "teclado", "monitor", "impressora"];
console.log("Lista completa: " + lista); 

console.log("Tamanho da lista: " + lista.length); 

lista.splice(1, 1);
console.log("Lista sem o mouse: " + lista);

if (lista.includes("computador" || "Computador")) {
    console.log("Existe computador em estoque");
} else {
    console.log("Não existe computador em estoque");
} 

lista.splice(2, 1) 
console.log("Lista sem o monitor: " + lista);

console.log("====================Numeros=====================");

// Exemplo 2
let numeros = [1, 3, 4, 6, 7, 9 , 10, 12, 15, 18, 20];

numeros.shift();
console.log("Lista sem o primeiro item: " + numeros);

numeros.sort((a, b) => a - b);
console.log("Lista ordenada: " + numeros);

numeros.reverse();
console.log("Lista invertida: " + numeros);

console.log("====================DiaDeHoje=====================");
let diaDeHoje = new Date();
let dia = diaDeHoje.getDate();
let mes = diaDeHoje.getMonth();
let ano = diaDeHoje.getFullYear();
console.log("Dia de hoje: " + dia + "/" + mes + "/" + ano);
