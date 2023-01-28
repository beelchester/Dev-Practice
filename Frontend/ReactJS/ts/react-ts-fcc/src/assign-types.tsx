// ? Notes

export{} // had to do it to prevent compiler error
let name:string = "sahil";
let age:number = 123;
let bool:boolean= true;
let arr:string[]; //array of strings
let tuple:[number, string]; //tuple ... array that contains multiple data types
tuple = [2, "sdaf"]
let obj:object; // possible but not a good practice

// ! approach to assign an object data type 
type Person = {
name: string;
age?:number; //*   '?' wil make this property optional
};
let person:Person; //convention capital
person = {
  name : "sahil",
  age: 23
}
console.log(person)
//! To assign an array of objects 

let members:Person[];

// ! Union
// variable allows multiple datatypes
let union: number | string;
union = 2
union = "sanhi"

// ! function type assign

// let printName: Function // not recommended
// let printName: (name:string) => void //(what are the function arguments data types and return data types)

let any:any; //! any data type allowed, not recommended tho

let unknown:unknown; //! alternative to any, still not recommended but anyway better than any

// for the function we can use never instead of void 
// void returns undefined never => nothing 
let printAge: (name:string) => never

// ! more on type and interface

type Car = {
  name : string;
  wheels:number;
}

type Company = Car & { // to extend properties
  capital:number
}

let tata:Company = {
  name: "TATA",
  wheels:4,
  capital : 5000
}

// Same thing with interface

interface Cars  {
  name : string;
  wheels:number;
}

interface Companies extends Car  { 
    capital:number
}

let bmw:Companies = {
  name: "BMW",
  wheels:4,
  capital : 5000
}

// we can also extend it among type and interface too

interface Hi extends Car { // this car was created using type
// ....
}

type Hello = Companies & {
  // ....
}