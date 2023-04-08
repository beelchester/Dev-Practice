// laith

class Car {

    model: string; // by default public 
    color: string;
    age: number;
    owners: string[] = []; // we can add an array of strings, by default it is empty, no need to add it in the constructor as we are directly providing with its default value
   private price: number = 30000000; // we can't access it outside the class, but we can access it inside the class and create a function in case to use it outside the class in js this is equivalent to #price but using private is much better syntax
    readonly wheels: number = 4; // we can't change the value of the wheels not even inside the class, it is read only
    private readonly  engine: string = 'V8'; // we can't change the value of the engine not even inside the class, it is read only and cant even access it outside the class
    protected fuel: string = 'petrol'; // we can access it inside the class and in the child classes but not outside the class



    constructor(model,color,age){ //constructor is a special method that is called when we create an object from a class it takes arguments while declaring the object and sets the values accordingly
        this.model = model;
        this.color = color;
        this.age = age;
    }

    describe(){
        console.log(`This car is ${this.age} years old and is ${this.color} in color`);
    }

    addOwner(owner: string){
        this.owners.push(owner);
        console.log(`${owner} is the owner of this car`);
    }
    getPrice(){
        console.log(this.price);
        }
}

let car1 = new Car('BMW','red',5);

car1.describe(); // This car is 5 years old and is red in color
console.log(car1.model); // BMW
car1.model = 'Mercedes'; // we can change the value of the model
car1.addOwner('sara'); // sara is the owner of this car
console.log(this.owners); // [ 'sara' ]
// car1.price; // we can't access it outside the class


// equivalent to the above class but much cleaner and popular way to write a class in ts

class Car2 {

    owners: string[] = []; // we can add an array of strings, by default it is empty, no need to add it in the constructor as we are directly providing with its default value
    private price: number = 30000000; // we can't access it outside the class, but we can access it inside the class and create a function in case to use it outside the class
    readonly wheels: number = 4; // we can't change the value of the wheels not even inside the class, it is read only
    private readonly  engine: string = 'V8'; // we can't change the value of the engine not even inside the class, it is read only and cant even access it outside the class
    protected fuel: string = 'petrol'; // we can access it inside the class and in the child classes but not outside the class

    constructor(public model: string, public color: string, public age: number){} // this replaced two things first describing its types and second using this.model to initialize it

    describe(){
        console.log(`This car is ${this.age} years old and is ${this.color} in color`);
    }

    addOwner(owner: string){
        this.owners.push(owner);
        console.log(`${owner} is the owner of this car`);
    }
    getPrice(){
        console.log(this.price);
        }
}
