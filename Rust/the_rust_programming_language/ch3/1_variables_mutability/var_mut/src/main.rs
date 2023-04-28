fn main() {
    // let x = 5;
    // println!("The value of x is: {x}");
    // x = 6; // this will throw an error because x is immutable
    // println!("The value of x is: {x}");
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}"); // this will work because x is mutable

    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
    // Rust’s naming convention for constants is to use all uppercase with underscores between words
    println!(" {THREE_HOURS_IN_SECONDS}");

    // shadowing
    let y = 5;

    let y = y + 1;

    {
        let y = y * 2;
        println!("The value of y in the inner scope is: {y}"); // 12
    }

    println!("The value of y is: {y}"); // 6

    let y = "this is a string";
    println!("The value of y is: {y}"); // this is a string
                                        // shadowing allows us to change the type of the value and reuse the same name

    // directly reassigning a new value to a variable without shadowing but it needs to be mutable
    let mut num = 2;
    println!("The value of num is: {num}"); // 2
    num = 3;
    println!("The value of num is: {num}"); // 3

    // num = "num string"; // error of mismatched types
    // mutability doesn't allow us to change the type of the value
    let mut num = "num string"; // shadow it to change the type // generates warning variable does
                                // not need to be mutable if its value is not changed later
    println!("The value of num is: {num}"); // num string
    num = "num string 2"; // possible
    println!("The value of num is: {num}"); // num string 2
}

/*
 again, by default variables in Rust are immutable, this provides safety and concurrency
concurrency means that multiple parts of your program can execute independently from each other at the same time

to make a variable mutable, you must use the mut keyword

constants are similar to immutable variables, but there are a few differences
1. you aren't allowed to use mut with constants
2. you declare constants using the const keyword instead of let
3. constants can be declared in any scope, including the global scope which makes them useful for values that many parts of the program need to know about
Immutable variables are scoped to the block in which they are defined
4. constants may be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime,  In other words, when you define a constant, its value should be known at the time of compilation, and it should not depend on any runtime calculations or operations.
Immutable variables can be assigned a value at runtime
5. Immutable variables can have their type inferred by the compiler, while constants must have a specified type.
naming conventions
// immutable variable
let my_variable_name = 42;

// constant
const MY_CONSTANT_NAME: u32 = 1000;

Naming hardcoded values used throughout your program as constants is useful in conveying the meaning of that value to future maintainers of the code. It also helps to have only one place in your code you would need to change if the hardcoded value needed to be updated in the future.

shadowing a variable means redefining the same variable name with a new value, effectively hiding the previous value. it happens within a scope

Shadowing a variable is different from marking a variable as mutable (mut) because it allows us to reassign a new value to the variable, while still retaining the immutability of the original variable. In contrast, if we declare a variable as mutable with mut, we can directly reassign a new value to that variable without using the let keyword.
 */
