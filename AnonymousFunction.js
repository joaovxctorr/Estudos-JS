// Funcoes anonimas sao funcoes sem nome, que podem ser atribuidas a variaveis ou passadas como argumentos 
// para outras funcoes.

/* 
() => {}

1- Os parenteses sao usados para passar parametros para a funcao anonima.
2- A seta (=>) e usada para definir a funcao anonima.
3- As chaves ({}) sao usadas para definir o corpo da funcao anonima.

*/

function somar(a, b) {
    let total = a + b;
    return console.log(total);
}

somar(10, 5);

let subtrair = (a, b) => {
    let total = a - b;
    return console.log(total);
}

subtrair(15, 5);