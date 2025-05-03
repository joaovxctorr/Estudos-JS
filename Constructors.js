// Constructors = special method for defining the properties and methods of object

class Car {
    constructor(make, model, year, color) {
        this.make = make, 
            this.model = model,
            this.year = year,
            this.color = color,
            this.drive = function () {
                console.log(`${this.model} is driving`);
            };
    }
} 

const car1 = new Car("Ford", "Focus", 2019, "Red");
const car2 = new Car("Toyota", "Corolla", 2020, "Black");
car2.drive(); // Corolla is driving

console.log(car1); // Car { make: 'Ford', model: 'Focus', year: 2019, color: 'Red', drive: [Function] }