// getters and setters are used to access private properties and modify them outside the class
// these are just functions that are used to access private properties and modify them outside the class

class Person {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const person = new Person();
person.name = "Alice"; // sets the name
console.log(person.name); // prints "Alice", gets the name
