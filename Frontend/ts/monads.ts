interface NumberWithLogs{
    result : number
    logs : string[]
}

function square(x:number) : NumberWithLogs{
    return {
        result : x*x,
        logs : [`squared ${x} to get {x*x}`]
    }
}

function addOne(x:number) : NumberWithLogs{
    return {
        result : x+1,
        logs : [`added one to ${x} to get {x+1}`]
    }
}

function wrapWithLogs(x:number) : NumberWithLogs{
    return {
        result : x,
        logs : []
    }
}

function runWithLogs(
    input:NumberWithLogs,
    transform:(_:number)=>NumberWithLogs
) : NumberWithLogs{
    const newNumberWithLogs = transform(input.result)
    return{
        result : newNumberWithLogs.result,
        logs : input.logs.concat(newNumberWithLogs.logs)
    }
}
