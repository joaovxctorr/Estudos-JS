// callback = se trata de uma função que é passada como argumento para outra função. A função que recebe a função 
// callback, irá executá-la em algum momento do seu código.

// Example 1
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum); 
}

myCalculator(5, 5, myDisplayer); // 10
// Neste exemplo, a função myCalculator recebe dois números e uma função de retorno de chamada. 
// A função myCalculator adiciona os dois números e chama a função de retorno de chamada com o resultado.
