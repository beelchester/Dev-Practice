use std::fs::{self, File};
use std::io::ErrorKind;

fn main() {
    let greeting_file_result = File::open("hello.txt"); // returns a Result<T,E>, T std::fs::File, E std::io::Error

    // If it succeeds Ok greeting_file_result will be an instance of OK that contains a file handle
    // If it fails Err greeting_file_result will be an instance of Err that contains an error message

    match greeting_file_result {
        // Ok(file) => file,
        Ok(file) => {
            println!("file opened successfully");
            file
        }
        // Err(error) => panic!("Problem opening the file: {:?}", error),
        // handling errors
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => panic!("Problem opening the file: {:?}", other_error),
        },
    };
    // we can use closures instead of match for Result<T,E>
    // behaves same as above , more on closures in ch 13

    let greeting_file = File::open("hello.txt").unwrap_or_else(|error| {
        // |error| is a closure
        if error.kind() == ErrorKind::NotFound {
            File::create("hello.txt").unwrap_or_else(|error| {
                panic!("Problem creating the file: {:?}", error);
            })
        } else {
            panic!("Problem opening the file: {:?}", error);
        }
    });

    //--------------------------------
    //shortcuts for panic on error: unwrap and expect

    // If the Result value is the Ok variant, unwrap will return the value inside the Ok. If the Result is the Err variant, unwrap will call the panic! macro for us.

    let greeting_file = File::open("hello.txt").unwrap(); // will panic if Err, or return the file handle if Ok

    // similarly, expect allows us to specify the panic! message

    let greeting_file = File::open("hello.txt").expect("Failed to open hello.txt");
    // will panic with the message if Err along with the panic message provided, or return the file handle if Ok
    // for production code, it is better to use expect with a more informative message than unwrap

    //--------------------------------
    // propagating errors
    // When a function calls something that might fail, instead of handling the error within this function, it can return the error to the calling code so that it can decide what to do. This is known as propagating the error and gives more control to the calling code, where there might be more information or logic that dictates how the error should be handled than what you have available in the context of your code.

    // below is a function that reads a username from a file. If the file doesn’t exist or can’t be read, this function will return those errors to the code that called the function (main in this case).
    use std::io::{self, Read};

    fn read_username_from_file() -> Result<String, io::Error> {
        // this return type means Ok will contain a String and Err will contain an io::Error
        let username_file_result = File::open("hello.txt");

        let mut username_file = match username_file_result {
            Ok(file) => file,
            Err(e) => return Err(e), // will return early from the function with the error value in
                                     // calling code can decide what to do with the error
        };

        let mut username = String::new();

        match username_file.read_to_string(&mut username) {
            Ok(_) => Ok(username),
            Err(e) => Err(e), // no need of return keyword here as it is the last expression in the function
        }
    }

    println!("{:?}", read_username_from_file()); // Err(Os { code: 2, kind: NotFound, message: "No such file or directory" }).... if helloq.txt
                                                 // Ok("") if hello.txt

    // we can perform the error handling in the calling code according to the error returned by the
    // read_username_from_file function

    // Shortcut for propagating errors: the ? operator
    // same as above

    fn read_username_from_file1() -> Result<String, io::Error> {
        let mut username_file = File::open("hello1.txt")?; // if Err, ? will return the error to the calling code
        let mut username = String::new();
        username_file.read_to_string(&mut username)?;
        Ok(username)
    }
    println!("new {:?}", read_username_from_file1()); // function gives same outhput as above function

    // the difference between above two codes is that ? operator uses the from function defined in the From trait to convert the error type returned by the original error type to the error type specified in the return type of the current function
    // while the match expression above uses the return keyword to return the error value immediately, which means we have to specify the return type as Result<String, io::Error> in the function signature
    // ? operator can only be used in functions that return Result or Option
    // ? operator simplifies the code

    // we can shorten the above code even more by chaining the calls to read_to_string and File::open

    fn read_username_from_file2() -> Result<String, io::Error> {
        let mut username = String::new();
        File::open("hello.txt")?.read_to_string(&mut username)?; // ? operator can be used in a chain
        Ok(username)
    }

    // also we can use fs::read_to_string function instead of File::open and read_to_string
    // same as above

    fn read_username_from_file3() -> Result<String, io::Error> {
        fs::read_to_string("hello.txt") // fs::read_to_string returns a Result<String, io::Error>
    }

    // for using ? operator we need to specify the return type as Result<T,E> or Option<T> in the
    // function signature or else we will get an error

    fn last_char_of_first_line(text: &str) -> Option<char> {
        text.lines().next()?.chars().last()
    }
    // if no value ? will return None and the function will return None or else the function will
    // return Some(char)
}
/*
most errors aren't serious causing to crash the programs we can handle them. Rust has a type Result<T,E> to handle recoverable errors.
Suppose we want to access a file and files doesn't exist in that scenario we can create the file

enum Result<T, E> {
    Ok(T),
    Err(E),
}
T and E are generic type parameters. T represents the type of the value that will be returned in a success case within the Ok variant, and E represents the type of the error that will be returned in a failure case within the Err variant.

Note that you can use the ? operator on a Result in a function that returns Result, and you can use the ? operator on an Option in a function that returns Option, but you can’t mix and match. The ? operator won’t automatically convert a Result to an Option or vice versa; in those cases, you can use methods like the ok method on Result or the ok_or method on Option to do the conversion explicitly.

main can also return a Result<(), E>

use std::error::Error;
use std::fs::File;

fn main() -> Result<(), Box<dyn Error>> {
    let greeting_file = File::open("hello.txt")?;

    Ok(())
}

The Box<dyn Error> type is called a trait object, which we’ll talk about in Chapter 17. For now, you can read Box<dyn Error> to mean “any kind of error.” Using ? in a main function with this return type is allowed.

When a main function returns a Result<(), E>, the executable will exit with a value of 0 if main returns Ok(()) and will exit with a nonzero value if main returns an Err value

The main function may return any types that implement the std::process::Termination trait, which contains a function report that returns an ExitCode

panic may turn recoverable errors into unrecoverable ones, but it’s not a good choice for every error. When you’re writing a library, for example, you can’t know what kind of environment your code will be called from or what kind of behavior your library’s users will expect when an error occurs. Therefore, library functions usually return errors. This gives the calling code the opportunity to decide what to do when it encounters an error: panic and unwind, return an error value of its own, or do something else entirely.

 */
