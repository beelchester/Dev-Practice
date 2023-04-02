const User = {
    name: 'John',
    age: 30,
    isMale: true,
}

function createUser(name:string,age:number,isMale:boolean):{name:string,age:number,isMale:boolean}{
    return {
        name,
        age,
        isMale
    }
}
