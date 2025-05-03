// Promises são uma forma de lidar com operações assíncronas em JavaScript. Elas representam um valor que pode estar 
// disponível agora, no futuro, ou nunca. Uma Promise pode estar em um dos três estados:

// Pending (Pendente): O estado inicial, antes da promessa ser concluída ou rejeitada.
// Fulfilled (Cumprida): Significa que a operação foi concluída com sucesso e um valor está disponível.
// Rejected (Rejeitada): Significa que a operação falhou e um motivo (erro) está disponível.\

// Exemplo 1: Promise Simples
// Vamos criar uma Promise que simula uma operação assíncrona que resolve com sucesso após 2 segundos.
const promessa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operação concluída com sucesso!");
    }, 2000);
  });
  
  promessa1.then(resultado => {
    console.log(resultado); // "Operação concluída com sucesso!" após 2 segundos
  }).catch(erro => {
    console.log("Erro:", erro);
  });
// Aqui, usamos setTimeout para simular uma operação assíncrona que é bem-sucedida. then() é chamado quando 
// a Promise é resolvida, e catch() é chamado se a Promise for rejeitada.

// Exemplo 2: Encadeamento de Promises
// Você pode encadear várias operações assíncronas usando Promises.
const promessa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primeira operação concluída!");
  }, 1000);
});

const promessa3 = (valor) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`${valor} Segunda operação concluída!`);
  }, 1000);
});

promessa2
  .then(resultado => {
    console.log(resultado); // "Primeira operação concluída!" após 1 segundo
    return promessa3(resultado);
  })
  .then(resultadoFinal => {
    console.log(resultadoFinal); // "Primeira operação concluída! Segunda operação concluída!" após mais 1 segundo
  })
  .catch(erro => {
    console.log("Erro:", erro);
  });
// Neste exemplo, promessa2 depende do resultado de promessa1. As Promises são encadeadas usando then(), 
// e catch() é usado para capturar qualquer erro que possa ocorrer.

// Exemplo 3: Promise.all()
// Promise.all() é usado para esperar que todas as Promises em um array sejam resolvidas.
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Primeira"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Segunda"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Terceira"), 3000));

Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    console.log(resultados); // ["Primeira", "Segunda", "Terceira"]
  })
  .catch(erro => {
    console.log("Erro:", erro);
  });

// Exemplo 4: Promise.race()
// Promise.race() retorna a primeira Promise que for resolvida ou rejeitada.
const pr0messa1 = new Promise((resolve) => setTimeout(() => resolve("Primeira"), 1000));
const pr0messa2 = new Promise((resolve) => setTimeout(() => resolve("Segunda"), 500));

Promise.race([pr0messa1, pr0messa2])
  .then(resultado => {
    console.log(resultado); // "Segunda", pois foi resolvida antes de "Primeira"
  })
  .catch(erro => {
    console.log("Erro:", erro);
  }); 

// Exemplo 5: Promise.finally()
// Promise.finally() é chamado quando a Promise é concluída, independentemente de ter sido resolvida ou rejeitada.
const promess4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operação concluída!"), 1000);
});

promess4
  .then(resultado => {
    console.log(resultado); // "Operação concluída!"
  })
  .catch(erro => {
    console.log("Erro:", erro);
  })
  .finally(() => {
    console.log("Operação finalizada."); // Sempre será chamado, independentemente do resultado
  });

// Promises são uma maneira de lidar com operações assíncronas em JavaScript, oferecendo uma maneira mais clara e poderosa
// de encadear operações e tratar erros. Elas permitem uma abordagem mais gerenciável para lidar com operações assíncronas
// em comparação com callbacks, e são uma base importante para o trabalho com async e await.