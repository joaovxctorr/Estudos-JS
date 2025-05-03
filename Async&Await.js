// Async: Declara uma função assíncrona que retorna uma Promise.
// Await: Pausa a execução da função async até que a Promise seja resolvida ou rejeitada, 
// retornando o valor resolvido ou lançando o erro.

// Exemplo 1: Função async Simples

async function saudacao() { // Função assíncrona que retorna uma Promise resolvida
  return "Olá, mundo!";
}

saudacao().then(resultado => {
  console.log(resultado); // "Olá, mundo!"
});
// Neste exemplo, a função saudacao retorna uma Promise que é automaticamente resolvida com o valor "Olá, mundo!".

// Exemplo 2: Usando Await com Promises
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemplo() {
  console.log("Antes de esperar");
  await esperar(2000); // Espera 2 segundos
  console.log("Depois de esperar");
}

exemplo();
// Aqui, a função exemplo usa await para pausar a execução até que a Promise retornada por esperar seja resolvida.

// Exemplo 3: Tratamento de Erros com try...catch
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Divisão por zero não permitida"));
    } else {
      resolve(a / b);
    }
  });
}

async function calcular() {
  try {
    const resultado = await dividir(10, 2);
    console.log("Resultado:", resultado); // "Resultado: 5"
    
    // Tentando uma divisão por zero
    const erro = await dividir(10, 0);
  } catch (erro) {
    console.log("Erro:", erro.message); // "Erro: Divisão por zero não permitida"
  }
}

calcular();
// Neste exemplo, await é usado para aguardar a resolução da Promise retornada por dividir. O bloco try...catch é usado para capturar e tratar qualquer erro que possa ocorrer.

// Exemplo 4: Encadeamento de Operações Assíncronas
function obterDados() {
  return new Promise(resolve => setTimeout(() => resolve("Dados obtidos"), 1000));
}

function processarDados(dados) {
  return new Promise(resolve => setTimeout(() => resolve(`${dados} e processados`), 1000));
}

async function fluxoDeTrabalho() {
  const dados = await obterDados();
  console.log(dados); // "Dados obtidos"
  
  const resultado = await processarDados(dados);
  console.log(resultado); // "Dados obtidos e processados"
}

fluxoDeTrabalho();
// Aqui, await é usado para aguardar a conclusão de duas operações assíncronas, obterDados e processarDados, uma após a outra.

// Exemplo 5: Usando Promise.all com async e await
function tarefa1() {
  return new Promise(resolve => setTimeout(() => resolve("Tarefa 1 concluída"), 1000));
}

function tarefa2() {
  return new Promise(resolve => setTimeout(() => resolve("Tarefa 2 concluída"), 2000));
}

async function executarTarefas() {
  const [resultado1, resultado2] = await Promise.all([tarefa1(), tarefa2()]);
  console.log(resultado1); // "Tarefa 1 concluída"
  console.log(resultado2); // "Tarefa 2 concluída"
}

executarTarefas();
// Neste exemplo, Promise.all é usado para executar várias Promises em paralelo, e await aguarda que todas sejam concluídas antes de continuar.