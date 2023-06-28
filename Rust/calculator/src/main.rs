//calculator app in rust

use std::io;

fn main() {
    loop {
        let mut first_number = String::new();
        println!("Enter first number: ");
        io::stdin()
            .read_line(&mut first_number)
            .expect("Failed to read line");

        let mut operator = String::new();
        println!("Enter operator among the following: +, -, *, /");
        io::stdin()
            .read_line(&mut operator)
            .expect("Failed to read line");

        let mut second_number = String::new();
        println!("Enter second number: ");
        io::stdin()
            .read_line(&mut second_number)
            .expect("Failed to read line");

        let num1: f32 = match first_number.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number");
                continue;
            }
        };

        let num2: f32 = match second_number.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number");
                continue;
            }
        };

        let result = match operator.trim() {
            "+" => num1 + num2,
            "-" => num1 - num2,
            "*" => num1 * num2,
            "/" => num1 / num2,
            _ => {
                println!("Please enter a valid operator");
                continue;
            }
        };

        println!("The result is {}", result);
    }
}
