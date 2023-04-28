fn main() {
    // let x = 5;
    // println!("The value of x is: {x}");
    // x = 6; // this will throw an error because x is immutable
    // println!("The value of x is: {x}");
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}"); // this will work because x is mutable
}

/*
 again, by default variables in Rust are immutable, this provides safety and concurrency
concurrency means that multiple parts of your program can execute independently from each other at the same time

 */
