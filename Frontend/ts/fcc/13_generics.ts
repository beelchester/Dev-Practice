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
    return arg;
}

// identityTwo make sure that whatever type of value is passed in, the same type of value is returned

identityTwo(10); // number type and return number type
identityTwo('10'); // string type and return string type
identityTwo(true); // boolean type and return boolean type

interface Bootle{
    name: string;
    Type: number;
}

identityTwo<Bootle>({name: 'water', Type: 1}); // object type and return object type
