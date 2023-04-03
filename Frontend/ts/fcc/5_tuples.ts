let tUser:[string,number,boolean] = ['John',30,true] // tuple type
// tuple types has strict order and length i.e. [string,number,boolean] is different from [string,boolean,number]

type ttUser = [number,string]

let tUser2:ttUser = [30,'John'] 

// be careful with tuple types in ts as they have weird behaviour
// for example: 
// we can push a value to a tuple type but it will not be type checked and also length is not strict

tUser.push(123) // allowed

// tuples may be useful in some cases but mostly we should avoid them
// for example:
// we can use it for api response where we know the order and length of the response 
