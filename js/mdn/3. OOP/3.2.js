// ! OOP and js
// class-based, sometimes referred to as "classical" object-oriented programming, as implemented in languages like Java and C++.

// constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place. But prototypes can be used here, too. For example, if a method is defined on a constructor's prototype property, then all objects created using that constructor get that method via their prototype, and we don't need to define it in the constructor.
// the prototype chain seems like a natural way to implement inheritance. For example, if we can have a Student object whose prototype is Person, then it can inherit name and override introduceSelf().
// so basically
//  Constructors in js -> similar to classesw
// prototype is also a advantage here if constructor itself has a prototype it can inherit that
// prototype chain -> inheritance
