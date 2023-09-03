use std::{error::Error, fs};

pub struct Config {
    pub query: String,
    pub file_path: String,
}

impl Config {
    // fn new(args: &[String]) -> Config {
    pub fn build(args: &[String]) -> Result<Config, &'static str> {
        // Config instance if successful or
        // a static string slice if not
        // error handling
        if args.len() < 3 {
            // panic!("Not enough arguments"); // the info too much for the user so we will use
            // Result instead
            // also we will change name new to build as programmers expect new function to never fail
            return Err("Not enough arguments");
        }

        let query = args[1].clone();
        let file_path = args[2].clone();

        Ok(Config { query, file_path })
    }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
    // Box<dyn Error> means the function will return a type that implements the Error trait but we don’t have to specify what particular type the return value will be
    // this gives flexibility to return error of any type
    // dyn is short for dynamic
    let contents = fs::read_to_string(config.file_path)?;

    println!("With text:\n{}", contents);
    Ok(()) // () is unit type and is used when we dont need any value to be returned
}
