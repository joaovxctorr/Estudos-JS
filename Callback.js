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

//Exemplo 2
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num); 
}

function f1(callback) {
    setTimeout(function () {
        console.log("f1");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log("f3");
        if (callback) callback();
    }, rand());
}

f1(f1Callback);
function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log("Olá mundo!");
}