fn main() {
    // tuple struct example

    let width1 = 30;
    let height1 = 50;

    println!(
        "The area of the rectangle is {} square pixels.",
        area(width1, height1)
    );

    fn area(width: u32, height: u32) -> u32 {
        width * height
    }

    // same as above but using tuple struct

    let rect = (30, 50); // tuple

    println!(
        "The area of the rectangle is {} square pixels.",
        area1(rect)
    );

    fn area1(dimensions: (u32, u32)) -> u32 {
        // dimensions is a tuple struct
        dimensions.0 * dimensions.1
    }

    // above we dont know what the 0 and 1 mean, so we can use a struct to give them meaning

    struct Rectangle {
        width: u32,
        height: u32,
    } // ideally define it outside of main

    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        area2(&rect1)
    );

    fn area2(rectangle: &Rectangle) -> u32 {
        // rectangle is a reference to a Rectangle instance
        rectangle.width * rectangle.height
    }

    // Adding useful functionality with derived traits
    // It’d be useful to be able to print an instance of Rectangle while we’re debugging our program and see the values for all its fields.

    #[derive(Debug)] // this annotation tells Rust to print out the debugging information
    struct Rectangle1 {
        width: u32,
        height: u32,
    }

    fn testtt() {
        let rect1 = Rectangle1 {
            width: 30,
            height: 50,
        };

        // println!("rect1 is {}", rect1); // error: doesn't implement `std::fmt::Display`
        // println!() by default uses std::fmt::Display for the formatting, but structs don't have
        // it by default because there are multiple ways to display a struct and rust isnt sure
        // which to use, so here we are going to use {:?} it is a
        // specifier for println!() that tells it to use std::fmt::Debug to format the value being printed

        println!("rect1 is {:?}", rect1);
        // at this point error: Rectange1 doesn't implement Debug trait, so we will add #[derive(Debug)] to the struct definition
        // rect1 is Rectangle1 { width: 30, height: 50 }
        // can also use {:#?} to print it in a more readable ways
        println!("rect1 is {:#?}", rect1);
        // rect1 is Rectangle1 {
        //    width: 30,
        //    height: 50,
        //    }
    }
    //Another way to print out a value using the Debug format is to use the dbg! macro, which takes ownership of an expression (as opposed to println! that takes a reference), prints the file and line number of where that dbg! macro call occurs in your code along with the resulting value of that expression, and returns ownership of the value.

    #[derive(Debug)]
    struct Rectangle2 {
        width: u32,
        height: u32,
    }

    fn testtttt() {
        let scale = 2;
        let rect1 = Rectangle2 {
            width: dbg!(30 * scale),
            height: 50,
        };

        dbg!(&rect1);
    }

    //We can put dbg! around the expression 30 * scale and, because dbg! returns ownership of the expression’s value, the width field will get the same value as if we didn’t have the dbg! call there. We don’t want dbg! to take ownership of rect1, so we use a reference to rect1 in the next call.
    //Note: Calling the dbg! macro prints to the standard error console stream (stderr), as opposed to println! which prints to the standard output console stream (stdout).
    //The dbg! macro can be really helpful when you’re trying to figure out what your code is doing!

    /* output
        [src/main.rs:10] 30 * scale = 60
    [src/main.rs:14] &rect1 = Rectangle {
        width: 60,
        height: 50,
         */
}
