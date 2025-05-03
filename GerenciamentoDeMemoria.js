// Em JavaScript, o gerenciamento de memória envolve basicamente dois processos principais:

// Primeiro processo: 
// 1. Alocação de Memória:
// Quando você cria variáveis, objetos, arrays, ou funções, o JavaScript aloca automaticamente memória suficiente para
// armazenar esses valores na heap (um grande espaço de memória onde objetos são armazenados).

let name = 'John'; // Alocação de memória para uma string
let user = { age: 30 }; // Alocação de memória para um objeto
let numbers = [1, 2, 3]; // Alocação de memória para um array

// 2. Liberação de Memória (Coleta de Lixo):
// A liberação de memória em JavaScript é feita automaticamente pelo coletor de lixo. O coletor de lixo é um processo que
// identifica e remove da memória os objetos que não são mais acessíveis ou úteis, liberando espaço para novos dados.

// Segundo Processo: 
// Coleta de Lixo (Garbage Collection)
// O JavaScript usa diferentes algoritmos de coleta de lixo para liberar a memória ocupada por objetos não utilizados.
// O algoritmo mais comum é o "mark-and-sweep".

// Mark-and-Sweep:

// Marcação (Marking): O coletor de lixo marca todos os objetos que podem ser alcançados (a partir de variáveis globais ou do stack de execução).
// Varredura (Sweeping): Depois que todos os objetos alcançáveis são marcados, o coletor de lixo percorre a memória e remove os objetos que não foram marcados, liberando assim a memória que estava ocupada por eles.

// Referências e Ciclos de Referência
// Um conceito crucial no gerenciamento de memória é o de referências. Uma referência é simplesmente um ponteiro para um objeto na memória. O coletor de lixo libera a memória de objetos que não são mais referenciados.

let user2 = { name: 'Alice' };
let anotherUser = user; // 'anotherUser' referencia o mesmo objeto que 'user'

user = null; // 'user' não referencia mais o objeto, mas 'anotherUser' sim, então o objeto não é coletado

// Ciclos de Referência:
// Em alguns casos, dois ou mais objetos referenciam-se mutuamente, criando um ciclo de referência. Ciclos de referência podem causar vazamentos de memória, porque o coletor de lixo pode não conseguir determinar que esses objetos não são mais utilizáveis.

// Exemplo de Ciclo de Referência:
function createCycle() {
    let obj1 = {};
    let obj2 = {};
    obj1.ref = obj2; // obj1 referencia obj2
    obj2.ref = obj1; // obj2 referencia obj1
}

createCycle();
// Neste exemplo, obj1 e obj2 referenciam-se mutuamente, criando um ciclo. Se não houver outra referência a esses objetos, o coletor de lixo não poderá liberá-los, resultando em um vazamento de memória.

// Dicas para Gerenciar Memória de Forma Eficiente
// Liberar Referências Inúteis: Sempre que possível, atribua null ou undefined a variáveis e propriedades que não são mais necessárias para permitir que o coletor de lixo libere a memória ocupada.

let data = { key: 'value' };
data = null; // O objeto { key: 'value' } pode agora ser coletado

// Evitar Ciclos de Referência: Quando trabalhar com objetos que se referenciam mutuamente, certifique-se de quebrar essas referências quando elas não forem mais necessárias.

// Cuide com Estruturas de Dados Grandes: Arrays e objetos grandes podem consumir muita memória. Use-os com cuidado e, quando não forem mais necessários, limpe as referências.

// Uso de Closures: Closures podem manter referências a variáveis fora de seu escopo, o que pode levar a vazamentos de memória se não forem usados corretamente. Sempre que possível, certifique-se de que closures não mantenham referências a variáveis desnecessárias.

// Resumo
// Embora o JavaScript cuide automaticamente de grande parte do gerenciamento de memória por meio de coleta de lixo, é importante escrever código de forma a evitar vazamentos de memória e garantir que a memória seja liberada de maneira eficiente. Isso resulta em aplicações mais rápidas e confiáveis, especialmente em ambientes de longo prazo, como servidores ou aplicações de página única (SPA).