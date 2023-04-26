use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        println!("Please enter your guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // let guess: u32 = guess.trim().parse().expect("Please only enter a number");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please only enter a number!");
                continue;
            } // _ means catchall values possible for Err
        };
        println!("The guessed number is {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too Less"),
            Ordering::Greater => println!("Too Big"),
            Ordering::Equal => {
                println!("You win");
                break; // to break out of the loop
            }
        }
    }
}

/*
 allowing multiple guesses
 loop keyword creates an infinite loop
 h- handling invalid input
 updating our expect in guess to that will countinue if number is not provided and just ignore it
 as expect is enum which has Ok or Err values for result this is possible
 match is required as we are comparing a pattern
*/
