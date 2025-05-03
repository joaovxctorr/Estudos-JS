// Nested Object se trata de um objeto que possui outro objeto dentro dele.
// Isso é muito comum na programação, pois ajuda a organizar melhor os dados.


// Example 1 
// Neste exemplo, temos um objeto chamado Person que possui um objeto chamado address dentro dele.
const Person = {
    fullName: "John Doe",
    age : 25,
    isStudent: true,
    hobbies: ["Reading", "Coding", "Gaming"],
    address : {
        city: "New York",
        country: "USA"
    }
}

console.log(Person.fullName); // John Doe
console.log(Person.age); // 25
console.log(Person.isStudent); // true
console.log(Person.hobbies); // ["Reading", "Coding", "Gaming"]
console.log(Person.hobbies[0]); // Reading

// Example 2
// Neste exemplo, temos um objeto chamado Pessoa que possui um objeto chamado Endereco dentro dele.
class Pessoa {
    constructor(nome, idade, ...endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = new Endereco(...endereco);
    }
}

class Endereco {
    constructor(rua, cidade, pais) {
        this.rua = rua;
        this.cidade = cidade;
        this.pais = pais;
    }
}

const pessoa1 = new Pessoa("John Doe", 25, "Rua 1", "New York", "USA");
const pessoa2 = new Pessoa("Jane Doe", 30, "Rua 2", "Los Angeles", "USA");
const pessoa3 = new Pessoa("Jimmy Doe", 25, "Rua 5", "Miami", "USA");

console.log(pessoa1.endereco); // { rua: 'Rua 1', cidade: 'New York', pais: 'USA' }
console.log(pessoa1.endereco.rua); // Rua 1


