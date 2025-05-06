//Immediate Invoked Function Expression
//IIFE is a function that runs as soon as it is defined

(function () {
    //code here runs immediately
    console.log("I am an IIFE function");
    })(); // () at the end of the function definition makes it an IIFE

(function(idade, peso, altura) {
    console.log(`Idade: ${idade}, Peso: ${peso}, Altura: ${altura}`);
})(25, 70, 1.75); // IIFE with parameters