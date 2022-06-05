// const Person={
// name:"Sahil"
// }
// const NewPerson= Person
// NewPerson.name = "Not Sahil"
// console.log(NewPerson.name); 
// console.log(Person.name); 

// Output:
// Not Sahil
// Not Sahil
// * This is because object and arrays are reference types i.e NewPerson & Person 's values points to same memory location  
// * change in one will cause change in another

// ? Primitive type
// boolean, string and int
const num = 7;
const num2 = num;
console.log(num2); //7
//* It simply copy the num's value to its another own memory location
// * change in one will not cause change in another


// ! to overcome the issue of object pointers as above we can use spread operator to copyy older objects' values in newer
const Person={
  name:"Sahil"
  }
  const NewPerson= {
    ...Person
  }
  NewPerson.name = "Not Sahil"
  console.log(NewPerson.name); 
  console.log(Person.name); 
  
  // Output:
// Not Sahil
// Sahil