function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = generatorFunction();
console.log(g1.next()); // { value: 1, done: false }
console.log(g1.next()); // { value: 2, done: false }
console.log(g1.next()); // { value: 3, done: false }
console.log(g1.next()); // { value: undefined, done: true }

// funcao geradora pode ser chamada dentro de outra funcao geradora
function* geradora() {
  yield 1;
  yield 2;
  yield 3;
}

function* geradora2() {
  yield* geradora(); // Chama a geradora
  yield 4;
  yield 5;
}

const g2 = geradora2();
for (let valor of g2) {
  console.log(valor); // 1, 2, 3, 4, 5
}

//
function* geradora3() {
    yield function() {
        console.log("primeiro valor");
    }

    yield function() {
        console.log("segundo valor");
    }
}

const g3 = geradora3();
const funcao1 = g3.next().value; // Pega a primeira função gerada
const funcao2 = g3.next().value; // Pega a segunda função gerada
funcao1(); // Executa a primeira função gerada
funcao2(); // Executa a segunda função gerada