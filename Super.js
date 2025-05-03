// Super = keyword is used in classes to call the constructor or acess 
// the properties and methods of a parent
// this = this object
// super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 2, 10);
const fish = new Fish("fish", 1, 5);
const hawk = new Hawk("hawk", 3, 20);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

fish.swim();