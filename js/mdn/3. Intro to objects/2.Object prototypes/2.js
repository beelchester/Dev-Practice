// * Prototypes are like built in objects whose one top of which we create user defined objects
// * Prototypes are objects themselves so they might have their own prototype this chain goes own until prototype becomes null
// * It has its own properties too
// * While accessing prototype of an object if not found it searches for properties of a prototype which is a object itself and has its own prototype so it searches for its property too and if still not found it searches for that prototype's prtotype
// * This process goes on until it finds a property or it reaches the end of the prototype chain where property is undefined
// * Object.prototype is the base(top of inheritance) who always has null prototype of its own
const myObject = {
    city: 'Madrid',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  } 
// ! This will have one prototype i.e. Object.prototype  

// !longer protoype inheritance chain example

function Construct(givenName){
    this.name = givenName;
}

const Obj = new Construct('Sahil');
// * It will have constructor as a protoype which is inherited from Object.prototype
// Obj.name
// Sahil

// ! consider prototype of an object as its FATHER

// ? Setting a prototype

// * 1 by using Object.create()
const personPrototype1 = {
    greet() {
      console.log('hello!');
    }
  }
  
  const carl = Object.create(personPrototype1);
  carl.greet();  // hello!
//   personPrototype1 has became a prototype(father) of carl, now it'll inherit its properties/methods i.e. .greet here 
  
// * 2. By using a constructor
// All functions has property named prototype (__Proto__ by convention)
// If a constructor is made using function and it is called in another object it becomes prototype of that object
// also,
function Person(name) {
    this.name = name;
  }
  
  const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
Person.prototype = personPrototype; //* Person constructor function now has a prototype property -> personPrototype 
Person.prototype.constructor = Person; //* sets the prototype's constructor property to the function used to create Person objects.
// Person will inherit properties/methods from the object personPrototype 
const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!
// .greet method got added to Person constructor
// Now it has 2 properties/methods .name from constructor itself and .greet from personPrototype object

//! Properties that are defined directly in the object, like name here, are called own properties, 
// and you can check whether a property is an own property using the static 
Object.hasOwn()
Object.hasOwn(reuben,"name")
// true 
// because the constructor was directly assigned to object reuben
Object.hasOwn(reuben,"greet")
// false
// because greet was the property of Person's prototype (personPrototype) hence not its own property