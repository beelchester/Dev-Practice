fn main() {
    println!("Hello, world!");
    fn1(43); // 43 is an argument
    fn2('a', 43);
    let five = fn5(); // valid as fn5 returns a value (5) which is assignatble to variable five
    let plus_one = fn6(21); // 22
    println!("{plus_one}");
}

fn fn1(x: i32) {
    // specifying type of x is mandatory, helps compiler give better error messages
    // x is a parameter
    println!("The value of x is: {}", x); // println! is a macro
}

fn fn2(charac: char, num: i32) {
    println!("The value of x is: {}", charac);
    println!("The value of x is: {}", num);
}

fn fn3() {
    let y = 6; // statement
} // fn3 returns nothing, hence it is a statement

fn fn4() {
    let y = {
        let x = 3;
        x + 1 // expression, returns 4. no semicolon
    }; // y is 4 and this is an expression
    let z = 2 + 1; // this has a semicolon as it is a statement that does not return anything but has
                   // the value of an expression 2+1 which is a mathematical operation that returns 3
}

fn fn5() -> i32 {
    // return type is i32
    5 // no semicolon as it is an expression that returns 5
}

fn fn6(x: i32) -> i32 {
    x + 1 // no semicolon as it is an expression that returns x+1
}

/*
Main function is the entry point of the many program
rust uses snake case as the conventional style for function and variable names
sequence of functions doesn't matter in rust

technically the concrete values provided are called arguments and function's variable inside () are called parameters,
but people tend to use the terms interchangeably

Statements and Expressions

Statements are instructions that perform some action and do not return a value.
Expressions evaluate to a resulting value.

Statements do not return values. Therefore, you can’t assign a let statement to another variable
let x = (let y = 6); // error as let y = 6 is a statement and statements do not return values and x
cannot be bind to anything, i.e. it cant be bind to () unit, an empty tuple
in c this is possible ,x = y = 6 and have both x and y have the value 6; that is not the case in Rust.

Calling a function is an expression. Calling a macro is an expression. A new scope block created with curly brackets is an expression
ex: fn4
Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value

return type is mandatory for functions if they return a value
it is declared using -> followed by the type of the value returned
return expressions should not have ; at the end

 */
