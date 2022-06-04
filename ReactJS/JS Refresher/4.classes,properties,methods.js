//! We dont require constructor(){} To assign  properties we can directly write it also skip 'this'
// * this is ES7 syntax... next gen js
class Person{
  name="Mark"
  // ! new syntax for method too
  // * we use arrow function and using this is better bcz its solve some this. problems
  method =() =>{console.log(this.name)}
}
Person.method()
// ? use jsbin for running this code and choose ES6/Babel

