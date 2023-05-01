// generics are used to create reusable components that can work over a variety of types rather than a single one
// components are reusable blocks of code that perform a single action

// const score: Array<string> = ['10', '20', '30']; // arrays can also be defined like this 
const score: number[] = [10, 20, 30]; 
const names : string[] = ['john', 'doe', 'jane'];

function identityOne (arg:any):any {
    return arg;
}

// function identityTwo<Type> (arg:Type):Type { // Type can be replaced with any other word
//     return arg;
// }

function identityTwo<T>(arg:T):T {
    // console.log(arg.length); // error because length property is not available on type T // generic constraint
    return arg;
}

// identityTwo make sure that whatever type of value is passed in, the same type of value is returned

identityTwo(10); // number type and return number type
identityTwo('10'); // string type and return string type
identityTwo(true); // boolean type and return boolean type
// or 
// identityTwo<number>(10); // number type and return number type

interface Bootle{
    name: string;
    Type: number;
}

identityTwo<Bootle>({name: 'water', Type: 1}); // object type and return object type

// generic array type

function getArray<T>(items:T[]):T{
    return items[2];
}
// or 
// function getArray<T>(items:Array<T>):T{
//    return items[2];
//    }

getArray<string>(['john', 'doe', 'jane']); // return string type

// generic arrow function
const getArrow = <T>(items:T[]):T => {
    return items[2];
}

const getArrowTwo = <T,>(items:Array<T>):number => { // sometime comma is used to avoid confusion that its not jsx tag
    console.log(items.length);
    return 3;
}

function okkk<T,U>(a:T, b:U):{a:T, b:U}{
    return {a,b};
}

// using type parameters in generic constraints
// declaring type parameter that is constrained by another type parameter 
// this is useful when you want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have 

function okkk2<T,U extends Number>(a:T, b:U):{a:T, b:U}{
    return {a,b};
}

// okkk2('a','b') // error because b is not a number

interface DataBase{
    length: number;
    username: string;
}

function okkk3<T extends DataBase>(a:T, b:T):{a:T, b:T}{
    return {a,b};
}

okkk3({length: 10, username: 'john'}, {length: 20, username: 'doe'});

function okkk4<T, U extends DataBase>(a:T, b:U):{a:T, b:U}{
    return {a,b};
}

okkk4('a', {length: 20, username: 'doe'});

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(obj) // { a: 1, b: 2, c: 3, d: 4 }
    console.log(key) // a
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a"); // returns 1
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
