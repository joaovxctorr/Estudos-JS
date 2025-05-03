// O try...catch é uma estrutura de controle em JavaScript usada para lidar com erros e exceções que podem ocorrer 
// durante a execução de código. Com try...catch, você pode tentar executar um bloco de código e, se um erro ocorrer, 
// capturá-lo e tratá-lo sem interromper a execução do restante do programa.

// Exemplo 1: Capturando um Erro Simples

try {
    // Código que pode causar um erro
    const resultado = 10 / 0; // Isso não gera um erro, mas pode ser um exemplo para divisão por zero
    console.log("Resultado:", resultado);
  } catch (erro) {
    // Código que é executado se ocorrer um erro
    console.log("Ocorreu um erro:", erro.message);
  }
  
// Exemplo 2: Manipulando Exceções

try {
  // Código que pode gerar um erro
  const nome = null;
  console.log(nome.length); // Isso gera um erro, pois `nome` é `null`
} catch (erro) {
  // Captura e exibe a mensagem de erro
  console.log("Erro ao acessar a propriedade length:", erro.message);
}

// Exemplo 3: Usando finally

try {
  console.log("Tentando executar um código...");
  throw new Error("Erro deliberado"); // Lançamos um erro para demonstrar
} catch (erro) {
  console.log("Erro capturado:", erro.message);
} finally {
  console.log("Bloco finally executado."); // Sempre é executado
}
// Neste exemplo, o bloco finally sempre é executado, independentemente de um erro ter ocorrido ou não. É útil para realizar ações de limpeza ou finalização.

// Exemplo 4: Lançando Erros
// Você pode lançar erros personalizados usando a palavra-chave throw.

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não permitida");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0); // Isso gera um erro
  console.log("Resultado:", resultado);
} catch (erro) {
  console.log("Erro ao dividir:", erro.message);
}
// Aqui, a função dividir lança um erro se o divisor (b) for zero. O erro é capturado e tratado no bloco catch.

// O try...catch é uma construção essencial para lidar com erros em JavaScript, permitindo que você execute código que
// pode gerar erros e forneça uma maneira de capturá-los e tratá-los sem interromper o fluxo do programa. Adicionar um
// bloco finally permite garantir que certas ações sejam sempre executadas, independentemente de um erro ocorrer.