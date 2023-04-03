const id : string | number = 123; // union type i.e. string or number

function getID(id: string | number): string {
   return `ID is ${id}`;   
// return id; // error as return type is string but id is string | number
   // to fix this error we can use type assertion
   // return id as string;
   // or 
   // return <string>id;
}

type Userr = {
    name: string,
    id: string}

type Admin = {
    userName: string,
    id: string}

let mUser: Userr | Admin = {
    name: 'John',
    id: '123'
}

mUser = {
    userName: 'John',
    id: '123'
} //allowed as mUser is of type Userr | Admin

function getDbId(id: number | string): string {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id.toString();
}

function getDbId2(id: number | string): string|number { // union return type, allowed
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id;
}

const data : (string|number)[] =['1','2',3] // union type in array
const data2: (string|number|boolean)[] =['1','2',3,true] 

let seatAllotment : 'window' | 'aisle' | 'middle' = 'window' // strict union type
seatAllotment = 'aisle' // allowed
seatAllotment = 'middle' // allowed
// seatAllotment = 'back' // error as back is not a valid value
