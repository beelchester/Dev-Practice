function addTwo(num:number):number{
    return num + 2
}
const sum = addTwo(4)
console.log(sum)

function getUpper(val:string):string{
    return val.toUpperCase()
}

const up = getUpper('three')
console.log(up)

const defaultArg = (name:string,isMale:boolean = false):string => {
    return name
} 

function consoleError(msg:string):never{
    throw new Error(msg)
}

function consoleHi():void{
    console.log('hi')
}



defaultArg("sa")
