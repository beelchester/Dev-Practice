// having abstract classes is similar to interfaces but with the difference that abstract classes can have implementation details
// abstract classes can't be instantiated directly, they are meant to be extended by other classes
// abstract classes can have abstract methods, which are methods that don't have an implementation, they are meant to be implemented by the classes that extend the abstract class
// abstract classes can have non-abstract methods, which are methods that have an implementation, they can be used by the classes that extend the abstract class
// abstract classes can have abstract properties, which are properties that don't have an implementation, they are meant to be implemented by the classes that extend the abstract class 
// abstract classes can have non-abstract properties, which are properties that have an implementation, they can be used by the classes that extend the abstract class 
// abstract classes can have constructors, which are meant to be used by the classes that extend the abstract class 
// abstract classes can have access modifiers, which are meant to be used by the classes that extend the abstract class 

abstract class TakePhoto {
    constructor(
        public cameraModel: string,
        public filter: string,
    ){}

    abstract getSepia(): void;
    getNumber(): number{ // non-abstract method with implementation details, it is not possible with interfaces
        const n = 2+2
        return n;
    };
}

// const pic = new TakePhoto('Sony', 'Sepia'); // error : Cannot create an instance of an abstract class.

class Photo extends TakePhoto { // inheriting from abstract class
    constructor(
        public cameraModel: string,
        public filter: string,
        public sepia: string,
    ){
        super(cameraModel, filter); // calling the constructor of the abstract class with super()
    }
    getSepia(): void {
        console.log(`The photo has a ${this.sepia} filter`); // implementing the abstract method
    }
}

const pic = new Photo('Sony', 'Sepia', 'Sepia'); // instantiating the class that extends the abstract class
console.log(pic.getNumber()); // using the non-abstract method with implementation details
