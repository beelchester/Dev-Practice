use std::env;
// to get environment variables and env::args to get command line arguments
use std::process; // filesystem manipulation operations

use minigrep1::Config; // importing Config struct from lib.rs

// fn main() {
// let args: Vec<String> = env::args().collect(); // args provide iterator over the command line
// arguments and collect() collects them into
// a vector of strings
// env::args will panic for invalid unicode, so
// for that use env::args_os instead which returns
// OsString values instead of String values
// but as they are more complex and are unique to the
// operating system, they are not as easy to work with

// println!("{:?}", args);
// dbg!(args); // same as above but with debug formatting
// to run this program, use: where one two three are the command line arguments
// cargo run -- one two three
// ["name of binary", "one", "two", "three"]

// let query = &args[1]; // first argument, at 0 is our name of binary
// let file_path = &args[2]; // second
//
// println!("Searching for {}", query);
// println!("In file {}", file_path);
//
// let contents = fs::read_to_string(file_path).expect("Couldn't read the file.");
// // fs::read_to_string takes the file_path, opens that file, and returns a std::io::Result<String> of the file’s contents.
//
// println!("With text:\n{contents}");

// There are a few issues in our current program (listed below) so we'll perform refactoring
// and error handling
// issues:
// 1. main function performs two tasks: parsing arguments and reading file. As program will
//    frow the main funcion will become complicated it will become hard to reason, test and
//    change. So better separate it
// 2. Also as main function becomes larger the no. of variables also increases in one scope
//    hence it becomes harder to keep track of purpose of each
// 3. We are using expect which does not provide proper error handling here. Reading of file
//    can be caused due to multiple reasons
// 4. we use expect repeatedly to handle different errors, and if the user runs our program
//    without specifying enough arguments, they’ll get an index out of bounds error from Rust
//    that doesn’t clearly explain the problem. So we need better error handling

// Separation of concerns for binary projects
// Following are some guidlines for splitting our project:
// - Split your program into a main.rs and a lib.rs and move your program’s logic to lib.rs.
// - As long as your command line parsing logic is small, it can remain in main.rs.
// - When the command line parsing logic starts getting complicated, extract it from main.rs and move it to lib.rs.

// Here's the responsibilities remained for main function:
// Calling the command line parsing logic with the argument values
// - Setting up any other configuration
// - Calling a run function in lib.rs
// - Handling the error if run returns an error

// so main.rs will handle running of program and lib.rs will handle the logic of program.
// also as we cant perform tests directly on the main function this structure will help us in
// testing

// extraction

fn main() {
    let args: Vec<String> = env::args().collect();

    // let (query, file_path) = parse_config(&args);
    // println!("{query},{file_path}");
    // let config = parse_config(&args);
    //
    // println!("Searching for {}", config.query);
    // println!("In file {}", config.file_path);
    //
    // let contents =
    //     fs::read_to_string(config.file_path).expect("Should have been able to read the file");
    //
    // println!("With text:\n{}", contents);

    // now we will use constructor to create a new config instance
    // we will remove the parse_config function and use Config::new function instead

    // let config = Config::new(&args);
    //
    // println!("Searching for {}", config.query);
    // println!("In file {}", config.file_path);
    //
    // let contents =
    //     fs::read_to_string(config.file_path).expect("Should have been able to read the file");
    //
    // println!("With text:\n{}", contents);
    //
    // now we will work on error handling, in new()

    let config = Config::build(&args).unwrap_or_else(|err| {
        // unwrap_or_else returns Ok value if it exists or else it calls the closure
        // it is used for non-panic error handling
        // closure is an anonymous function
        // in this case Err value is passed to the closure as argument (err) and this closure is called if Err value exists
        println!("Problem parsing arguments: {}", err);
        process::exit(1); // stops program immediately with exit code 1, which indicates an error
                          // This is similar to the panic!-based handling we used before, but we no longer get all the extra output.
                          // it provides friendly error message to the user
    });

    println!("Searching for {}", config.query);
    println!("In file {}", config.file_path);

    // let contents =
    //     fs::read_to_string(config.file_path).expect("Should have been able to read the file");
    // println!("With text:\n{}", contents);

    // taking the contents logic to run function
    // improving error handling as expect is not good enough for good error handling and it panics
    // we will return Result from run function and handle the error in main function
    if let Err(e) = minigrep1::run(config) {
        println!("Application error: {}", e);
        process::exit(1);
    }

    // now we will move out the logic of main function to lib.rs
    // by moving function run and Config struct to lib.rs
    // ----- break of project, check minigrep2
}

// fn run(config: Config) -> Result<(), Box<dyn Error>> {
//     // Box<dyn Error> means the function will return a type that implements the Error trait but we don’t have to specify what particular type the return value will be
//     // this gives flexibility to return error of any type
//     // dyn is short for dynamic
//     let contents = fs::read_to_string(config.file_path)?;
//
//     println!("With text:\n{}", contents);
//     Ok(()) // () is unit type and is used when we dont need any value to be returned
// }
//
// // fn parse_config(args: &[String]) -> (&str, &str) {
// // fn parse_config(args: &[String]) -> Config {
// //     // returned &str instead of &String because of
// //     // deref coercion
// //     // let query = &args[1];
// //     // let file_path = &args[2];
// //     // (query, file_path)
// //     // furthur improving, we will return a struct with meaningfully named fields
// //     // instead of tuple which will improve readability
// //     let query = args[1].clone(); // as we are returning String instead of &String we need to clone
// //                                  // clone creates a new heap allocated string and copies the contents
// //                                  // but there's a tradeoff of performance for this simplicity
// //     let file_path = args[2].clone();
// //
// //     Config { query, file_path }
// //     // Now our code more clearly conveys that query and file_path are related and that their purpose is to configure how the program will work. Any code that uses these values knows to find them in the config instance in the fields named for their purpose.
// // }
//
// struct Config {
//     query: String,
//     file_path: String,
// }
//
// impl Config {
//     // fn new(args: &[String]) -> Config {
//     fn build(args: &[String]) -> Result<Config, &'static str> {
//         // Config instance if successful or
//         // a static string slice if not
//         // error handling
//         if args.len() < 3 {
//             // panic!("Not enough arguments"); // the info too much for the user so we will use
//             // Result instead
//             // also we will change name new to build as programmers expect new function to never fail
//             return Err("Not enough arguments");
//         }
//
//         let query = args[1].clone();
//         let file_path = args[2].clone();
//
//         Ok(Config { query, file_path })
//     }
// }
