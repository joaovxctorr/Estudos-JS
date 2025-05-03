// Static = keyword that defines properties or methods that belongs to a class
// itself rather the objetcs created from that class

// Example 1
class MathUtil {
    static PI = 3.14159;
    
    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5));
console.log(MathUtil.getArea(5));

// Example 2
class User {
    static userCount = 0

    constructor(username) {
        this.name = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Jim");

user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(User.userCount); // 3