// inheritance = allows a new class to inherit the properties and methods 
// of an existing class (parent -> child)

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.Animal} is eating`);
    }

    sleep() {
        console.log(`This ${this.Animal} is sleeping`);
    }
}

class Dog extends Animal {
    name = "Dog";

    dug() {
        console.log(`This ${this.name} is dugging a hole`);
    }
}

class Cat extends Animal {
    name = "Cat";

    meow() {
        console.log(`This ${this.name} is meowing`);
    }
}

class Fish extends Animal {
    name = "Fish";

    swin() {
        console.log(`This ${this.name} is swimming`);
    }
}

const dog = new Dog();
const cat = new Cat();
const fish = new Fish();

