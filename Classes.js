// Class: provides a more structured way to create objects compared to traditional 
// Class: se trata de uma maneira mais estruturada de criar objetos em comparação com a programação tradicional.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

displayProduct() {
    console.log(`Product: ${this.name} and your Price: ${this.price}`);
    }
}

const product1 = new Product("Milk", 2.99);
const product2 = new Product("Bread", 1.99);

product1.displayProduct(); 
product2.displayProduct();