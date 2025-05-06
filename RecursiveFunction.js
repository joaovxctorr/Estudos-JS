// funcao recursiva se trata de uma funcao que chama a si mesma

function recursiva(max) {
    console.log(max);
    if(max >= 10) return
    max++;
    recursiva(max);
}

recursiva(0);
