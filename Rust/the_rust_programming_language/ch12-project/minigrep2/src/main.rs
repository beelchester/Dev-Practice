use std::env;
use std::process;

use minigrep2::Config;

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::build(&args).unwrap_or_else(|err| {
        // println!("Problem parsing arguments: {}", err);
        eprintln!("Problem parsing arguments: {}", err);
        process::exit(1);
    });

    if let Err(e) = minigrep2::run(config) {
        // println!("Application error: {}", e);
        eprintln!("Application error: {}", e);
        process::exit(1);
    }

    // now we will be adding seacrching logic with test driven development
    // removing println! statements as they are not needed anymore

    // we will improve our code by adding case insensitive search, this will be an optional choice
    // in the command line argument through an environment variable

    // after this we will use standard error instead of standard output (println) for error messages
    // two kinds of output to terminal: stdout and stderr

    // Command line programs are expected to send error messages to the standard error stream so we can still see error messages on the screen even if we redirect the standard output stream to a file. Our program is not currently well-behaved: we’re about to see that it saves the error message output to a file instead!
    // to demonstrate this we will do
    // cargo run > output.txt
    // > is used to redirect standard output to a file
    // File contains: Problem parsing arguments: Not enough arguments
    // and it didnt print this to the terminal
    // to print standard error we will use eprintln! macro instead of println!
    // now error is printed to the terminal and not to the file
    // $ cargo run to poem.txt > output.txt
    // also we can do $ cargo run -- to poem.txt > output.txt
    // now output.txt contains the output of the program and error message is not printed to the terminal
}
