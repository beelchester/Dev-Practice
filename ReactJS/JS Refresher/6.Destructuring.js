// ! Destructuring: Easily extract elements/properties from array/object and store it in variables

// * For Arrays
const nums = [1,2,3];
[num1, num2] = nums;
console.log(num1);
console.log(num2);
// ? Sequence of the variables should be match
// [num1, ,num3] = nums;
// console.log(num1);

// * For Objects

const {name} = {name:"Sahil", age:19}
console.log(name); // It will print Max   
// ? Here exact property name is required in the arguement

