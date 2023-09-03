use std::{env, error::Error, fs};

pub struct Config {
    pub query: String,
    pub file_path: String,
    pub ignore_case: bool,
}

impl Config {
    pub fn build(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            return Err("Not enough arguments");
        }

        let query = args[1].clone();
        let file_path = args[2].clone();

        let ignore_case = env::var("IGNORE_CASE").is_ok();
        // env::var("IGNORE_CASE") returns a Result that is Ok if the environment variable is set and Err if it’s not set
        // to use it
        // $ IGNORE_CASE=1 cargo run to poem.txt

        Ok(Config {
            query,
            file_path,
            ignore_case,
        })
    }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
    let contents = fs::read_to_string(config.file_path)?;

    let results = if config.ignore_case {
        search_case_insensitive(&config.query, &contents)
    } else {
        search(&config.query, &contents)
    };

    for line in results {
        println!("{line}");
    }

    Ok(())
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // by using 'a we tell rust that data returned by this function will live as long as the data (contents) passed to this function
    // this is important as data referenced by slice should be valid for the slice to be valid
    // vec![] // failed test case
    // heres what this function will do:
    // Iterate through each line of the contents.
    // Check whether the line contains our query string.
    // If it does, add it to the list of values we’re returning.
    // If it doesn’t, do nothing.
    // Return the list of results that match.

    let mut results = Vec::new();

    for line in contents.lines() {
        // lines() returns iterator
        if line.contains(query) {
            results.push(line);
        }
    }

    if results.is_empty() {
        println!("No results found for query: {}", query);
    }

    results
    // this function is not bad but it could have been better if it returned an iterator instead of vector
    // we will return to this in chapter 13
    // now as our search function is working we will call it in run function
}

pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // same as earlier just converting query to lowercase
    let query = query.to_lowercase();
    let mut results = Vec::new();

    for line in contents.lines() {
        if line.to_lowercase().contains(&query) {
            results.push(line);
        }
    }
    results
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn case_sensitive() {
        let query = "three";
        let contents = "\
Rust:
safe, fast, productive. 
Pick three."; // the second line should be returned as it contains the query, after editing third one should be returned

        // assert_eq!(vec!["safe, fast, productive."], search(query, contents));
        assert_eq!(vec!["Pick three."], search(query, contents));
    }

    #[test]
    fn case_insensitive() {
        let query = "rUst";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.";
        assert_eq!(
            vec!["Rust:", "Trust me."],
            search_case_insensitive(query, contents)
        );
    }
}

/*
steps of tdd:
- Write a test that fails and run it to make sure it fails for the reason you expect.
- Write or modify just enough code to make the new test pass.
- Refactor the code you just added or changed and make sure the tests continue to pass.
- Repeat from step 1!

 */
