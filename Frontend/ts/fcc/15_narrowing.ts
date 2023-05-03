function detectType(val:number|string):void { 

    if(typeof(val) === "number")  // adding type guards using typeof
        console.log("type of val: number");

    else if(typeof(val) === "string") 
        console.log("type of val: string");

    else 
        console.log("type of val: unknown");

}

/*
types available
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"

truthiness values
0
NaN
"" (the empty string)
0n (the bigint version of zero)
null
undefined

all above gives false when used in if statement, try using Boolean() function around it

1,2,3,"asd"," " gives true

typeof null, array, object gives object in js

    */

    // dont use the following function as when string is empty it will return false and the whole logic will fail

    function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// in operator narrowing


interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function getUser(account: User | Admin) {
    if ("isAdmin" in account) {
        console.log(account.isAdmin);
    }
}

// instanceof narrowing

function logValue(x: Date | string){
    if (x instanceof Date) { // instanceof is a type guard for Date, it checks if x is an instance of Date
        console.log(x.toUTCString()); 
    }
    else {
        console.log(x.toUpperCase());
    }
}

/*typeof and instanceof have different use cases, and while typeof can be used to determine primitive types, instanceof can be used to determine whether a variable is an instance of a specific class or interface*/

// type predicates
//user defined type guard

interface Fish{
    swim: () => void;
}

interface Bird{
    fly: () => void;
}

// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined;
// }

// isFish is a type predicate, it returns a boolean value, it is a user defined / custom type guard
// but when we are calling isFish in getFood it returns true or false, but it does not narrow the type of pet to Fish or Bird
// so we need to use type predicate, to have a return type of pet is Fish or pet is Bird which is also a boolean but it narrows the type of pet to Fish or Bird

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// pet is Fish is a type predicate

function getFood(pet: Fish|Bird) {
    if(isFish(pet)){
        // pet // true 
        pet.swim() // after type predicate it returns type Fish
        return "fish food"
    }
    else{
        // pet // false
        pet.fly() // after type predicate it returns type Bird
        return "bird food"
    }
}

getFood({swim: () => console.log("swim")}) // fish food
getFood({fly: () => console.log("fly")}) // bird food

// descriminated unions - a pattern that helps working with unions in a type safe way

interface Square {
    kind: "square";
    side: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Circle | Rectangle;

function getShape (shape:Shape){
    if(shape.kind === "square"){
        console.log(shape.side)
    }
    else if(shape.kind === "circle"){
        console.log(shape.radius)
    }
    else{
        console.log(shape.width)
    }
}

// Exhaustiveness checking and never type

function getShape2 (shape:Shape){
    switch(shape.kind){
        case "square":
            console.log(shape.side)
        break;
        case "circle":
            console.log(shape.radius)
        break;
        case "rectangle":
            console.log(shape.width)
        break;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
    }

    /*
        The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.
        The never type in TypeScript represents a type that can never be reached or returned. This type is useful in scenarios where you want to ensure that all possible cases have been handled.

For example, in a switch statement with a union type, the never type can be used to ensure that all possible cases have been handled. If the switch statement exhaustively handles all cases of the union type, then the never type will not be reached. However, if there are cases that are not covered by the switch statement, then the never type will be used to ensure that the compiler raises an error.

In the example provided, the never type is used in a switch statement to ensure that all possible shapes in the Shape union type are handled. The default case assigns the shape argument to a variable _exhaustiveCheck of type never to ensure that if a shape is passed into the function that is not covered by the switch statement, the function will return an error.

When a new shape type (Triangle) is added to the Shape union, TypeScript will raise an error because the switch statement is no longer exhaustive and does not cover all possible shapes. The error is raised because the Triangle shape cannot be assigned to the never type, which is the type of the _exhaustiveCheck variable in the default case. This error ensures that all possible shapes are handled in the switch statement.
        */
