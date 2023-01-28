function myName1 (name){
console.log(name);
}
myName1("1Sahil")
// ! arrow function
// * single parameter
// ? two ways
// ! We can use let too
// const myName2 = (name) =>{
const myName2 = name =>{
  console.log(name);
}
myName2("2Sahil")

// *more than one parameter
const myName3 = (name,number) =>{
console.log(name,number);
}
myName3("Sahil",3)
// * no parameter
const noPam = () =>{
console.log("noPam");
}
noPam()
// * only one return statement shortcut
const oneR = num => num*2
// ? instead of
// {
// return num*2
// }
console.log(oneR(5));
