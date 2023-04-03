// ------------------------------------------------
// const User = {
//     name: 'John',
//     age: 30,
//     isMale: true,
// }
//
// function createUser(name:string,age:number,isMale:boolean):{name:string,age:number,isMale:boolean}{
//     return {
//         name,
//         age,
//         isMale
//     }
// }

// ------------------------------------------------

// type User = {
//     name: string,
//     age: number,
//     isMale: boolean,
// }
//
// function createUser(user: User): User {
//     return {
//         name: user.name,
//         age: user.age,
//         isMale: user.isMale
//     }
// }
//
// createUser({name: 'John', age: 30, isMale: true})

// ------------------------------------------------

type cardNumber = {
    cardNumber: string
}

type cardType = {
    cardType: string
}

type cardDetails = cardNumber & cardType & {
    cvv: number
}


type User = {
     readonly _id: string,
     name: string,
    age: number,
    isMale: boolean,
    email?: string //optional
    cardDetails?: cardDetails
}

let myUser: User = {
    _id: '123',
    name: 'John',
    age: 30,
    isMale: true
}

// myUser._id = "sss" // error as _id is readonly


