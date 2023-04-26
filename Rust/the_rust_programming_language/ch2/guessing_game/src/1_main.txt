use std::io; // library for input/output, io library comes from standard library called std
             // By default, Rust has a set of items defined in the standard library that it brings into the scope of every program. This set is called the prelude

fn main() {
    println!("Guess the number!");
    println!("Please input your guess.");

    let mut guess = String::new();
    // let is used to create a variable
    // mut means mutable, which means it can be changed
    // String::new() creates a new instance of a String which is empty
    // :: is an operator that allows us to namespace this particular new function under the String type
    // means :: indicates that new is an associated function of the String type
    // ::new() is a function associated with the String type
    // String is a string type provided by the standard library
    // String is a growable, UTF-8 encoded string type
    // let apples = 5; // immutable variable by default like a constant
    // apples =6; // error: cannot assign twice to immutable variable `apples`
    // let mut bananas = 5; // mutable variable
    // bananas = 6; // works

    // io::stdin() // means stdin() is an associated function of the io module, could have also used
    // std::io::stdin() if we hadn't brought the io module into scope with the use
    // statement similar to cpp

    // io::stdin()
    //     .read_line(&mut guess) // method to read line from standard input to get input from user
    // & indicates that this argument is a reference, which gives you a way to let multiple parts of your code access one piece of data without needing to copy that data into memory multiple times
    // &mut guess means we pass a mutable reference to a string as an argument to read_line
    // means which string to store the user input in
    // The full job of read_line is to take whatever the user types
    // into standard input and append that into a string (without
    // overwriting its contents), so we therefore pass that string
    // as an argument. The string argument needs to be mutable so
    // the method can change the string’s content.
    // as guess is mutable we did &mut guess instead of &guess
    // could have written in one line However, one long line is difficult to read, so it’s best to divide it. It’s often wise to introduce a newline and other whitespace to help break up long lines when you call a method

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line"); // expect is a method on the Result type that is returned from the read_line method
                                        // Result types are enumerations, which are types that have a fixed set of values, and the Result type is defined by the standard library as having two values: Ok or Err
                                        // If the value is an Ok, expect will take the return value that is inside the Ok and return just that value to you so you can use it.
                                        // If the value is an Err, expect will take the return value that is inside the Err and call the panic! macro for you
                                        // The panic! macro will cause the program to crash, displaying the message that you passed as an argument to expect
                                        // The expect method is a good way to handle an error when you’re writing a program that has a specific task to perform
                                        // If you’re writing a library for other people to use that is intended to be called in a variety of different situations, where people would want to decide how to handle the different errors, the best practice is to return the Result value and let the calling code decide what to do
                                        // expect will crash the program if there is an error, but it will also print the message that we passed to it, which will make it easier to understand why the program crashed

    // println!("You guessed: {}", guess); // {} is a placeholder for a variable
    println!("You guessed: {guess}"); // can also be written like this
                                      // let x = 5;
                                      // let y = 10;
                                      //
                                      // println!("x = {} and y = {}", x, y);
                                      // println! {"x={x} and y={y}"}; // can also be written like this
                                      // This code would print x = 5 and y = 10.
}
