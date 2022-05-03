// !concepts explained with PESUDOCODE

//* Object-oriented programming is about modeling a system as a collection of objects, which each represent some particular aspect of the system. 
// ! three main concepts of oop
// ? 1. Classes & Instances
// ? 2. Inheritance
// ? 3. Encapsulation

// * Classes & Instances

// class professor contains common things all professors has
// By using CONSTRUCTOR we can use class professor
// for making an INSTANCE (professor1/professor2/..)

// Usually constructor is written as a part of the class
// & it has same name as the class 
// For calling a constructor new is used

// ? Pseudocode
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

walsh = new Professor('Walsh', 'Psychology')
walsh.teaches  
// 'Psychology'
walsh.introduceSelf()  
// 'My name is Professor Walsh, and I will be your Psychology professor'

// * Inheritance

// We can represent students too
// they cant grade, dont teach & belong to a particular year
// but they can have name and introduce
// These prop/methods are common for professor too
// infact they are common for all people
// so lets make a class person with these common prop/methods
// and class profesor and class student will inherit those prop/methods
// person -> parent class
// professor & student -> child class
// check js/mdn/3. OOP/Screenshot_2022-05-02_17-25-31.png

// ? Pseudocode
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()

// ? note that all three of them contain introduceSelf()
// thats because yes it is common thats why it is in person class
// but theie implementation is defferent for professor and student

walsh = new Professor('Walsh', 'Psychology')
walsh.introduceSelf()  
// 'My name is Professor Walsh, and I will be your Psychology professor'

summers = new Student('Summers', 1)
summers.introduceSelf() 
// 'My name is Summers, and I'm in the first year'

// ? by default for the person class who arent student/prof
pratt = new Person('Pratt')
pratt.introduceSelf() // 'My name is Pratt'
// This feature - when a method has the same name, 
// but a different implementation in different classes - 
//? is called POLYMORPHISM.

// When a method in a subclass replaces the 
// implementation of the version in the superclass, 
//? we say that the subclass OVERRIDES the version 
// in the superclass.

// * Encapsulation
// Object gives interface to other code. 

// The outer code can access internal state of an object. 

// But suppose, if we don't want outer code to access the particular internal state of an object. 

// We can make them private. 

// And these private internal state that is properties, and methods can only be accessed by the object itself. Not by the other code if we try to do it. 

// If you try to access it from for from the outer code, it will give an error. 

// So encapsulation is the method of object-oriented programming in which We make private internal states of an object, and we make a clear division between private internal State and public interface. It's like creating a firewall between them. As well. 


// Also it includes. 

// Programmer can change internal code without changing every code outside. 

// Example. 

// If students are allowed to study archery, subject only if they are in second year or above, we can simply use student.year

// Outside the object. 
if (student.year > 1) {
    // allow the student into the class
}

// But in future suppose criteria changes, then we have to update every single instance of it. So instead of that. You can create a method inside object for the criteria itself. 

// And call that method outside object for further evaluation and for changes. 

//  we would only have to do it once that is inside the object. 
class Student : extends Person
    properties
       year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
       
if (student.canStudyArchery()) {
// allow the student into the class
    }
    
// In many languages, the private key word prevents objects internal State access to outer code. 

// If we try to access it, it will give an error. 

// If some language does not provide these feature, a programmer can use an underscore in the starting of Internal State member to indicate to be a private.