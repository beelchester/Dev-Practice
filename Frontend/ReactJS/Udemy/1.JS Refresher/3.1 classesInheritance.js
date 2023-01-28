class Human{
  constructor(){
    this.gender="Male"
  }
  printGender(){
    console.log(this.gender)
  }
}
// ! The above class will become the default and all its content will get added to class person if used extend
// * super() in constructor is neccesary as we wanna add aur own constructor in person class on top of human class's constructor
// * we can also reassign the values of the properties/methods for our new class
class Person extends Human {
  constructor() {
    super()
this.name="Sahil"
// this.gender="Female"
  }
printName(){
  console.log(this.name);
}
// printGender(){
//   console.log("yo")
// }
}

const callingPerson = new Person;
callingPerson.printGender();