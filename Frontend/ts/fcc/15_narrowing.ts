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
