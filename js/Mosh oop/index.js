// const wifi = {
//     provider: "Dash",
//     speed: "100 Mbps",
//     result(){
//         console.log(`I am using wifi by ${this.provider} which has a speed of ${this.speed}`)
//     }
// };
function WifiDetails (provider, speed){
    this.provider = provider;
    this.speed = speed + " Mbps";
    this.result = function (){
        console.log(`I am using wifi by ${this.provider} which has a speed of ${this.speed}`)   
    }
}

const sahilWifi = new WifiDetails("Dash", "100");

// ! Two types in js 1. value types [Primitive] 2. Reference types [Objects]
// 1. includes number booloan string undefined null symbol
// 2. function object array
// function and arrays are also object

let x = {value : 10}
let y = x;
x.value = 20;

// y.value also gives 20
// this is because value is not stored in that variable x it is stored somewhere else in memory
// address (reference) of that memory is stored in variable
// x and y are pointing to same object in memory    
// hence objecs are copied by reference
// primitives are copied by value

let obj = 10
function increase(obj){
    obj++;
}
increase(obj);
console.log(obj);
// this block will return 10 because increased obj was only within the scope of that function not outside
// this indicates that function and variable are having different memories where values are stored
// while

let obj1 = {value: 10}
function increase(obj1){
    obj1.value++;
}
increase(obj1);
console.log(obj1);
// will return 11 
// because they both are refering to same memory location (as they are reference type)
// which has same value

// ! Abstraction
// Hide the deatils Show the essentials
// certain members we dont want to be accessible fro the outside so we use this method
// * not understood have to look at it later
https://youtu.be/PFmuCDHHpwk?t=2860