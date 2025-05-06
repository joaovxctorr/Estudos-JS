// Object = a collection of related proprities and/or methods
// Can represent real world things like a car, a person, a bank account, etc.

// This = reference to the object where THIS is used
// (the object depends on the immediate context where THIS is used)
// person.name = this.name

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isEmployed: true,
    sayHello: function() {
        console.log(`Hello ${this.firstName} ${this.lastName}!`);
    },
    sayGoodbye: function() {
        console.log(`Goodbye ${this.firstName} ${this.lastName}!`);
    },
    study : function() {
        console.log(`${this.firstName} is studying!`);
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    isEmployed: false,
    sayHello: function() {
        console.log(`Hello ${this.firstName} ${this.lastName}!`);
    },
    sayGoodbye: function() {
        console.log(`Goodbye ${this.firstName} ${this.lastName}!`);
    }
};

person1.sayHello();
person1.study();

person2.sayHello();
person2.sayGoodbye();

//
function criarPessoa (nome, idade) {
    return {
        nome: nome,
        idade: idade,
        dizerOla: function() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    };
}

const pessoa1 = criarPessoa("João", 25);
pessoa1.dizerOla(); // Olá, meu nome é João e tenho 25 anos.

//Factory Function
// A factory function is a function that returns an object
function criarCarro(marca, modelo, ano, ano, peso, cor) {
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,
        peso: peso,
        cor: cor,
        ligar: function() {
            console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
        },
        desligar: function() {
            console.log(`O carro ${this.marca} ${this.modelo} está desligado.`);
        }
    };
}

const carro1 = criarCarro("Fusca", "Volkswagen", 1970, 800, "azul");
