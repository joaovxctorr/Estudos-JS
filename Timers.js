// setInterval é uma função que executa uma função a cada x milissegundos
// setTimeout é uma função que executa uma função após x milissegundos

// setInterval
var counter = 0;
var interval = setInterval(function() {
    console.log('Counter:', counter);
    counter++;
}, 1000);

// setTimeout
var timeout = setTimeout(function() {
    console.log('Timeout');
    clearInterval(interval);
}, 5000);
