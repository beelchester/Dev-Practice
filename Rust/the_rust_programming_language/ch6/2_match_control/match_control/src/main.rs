fn main() {
    value_in_cents(Coin::penny);
    let dime = value_in_cents(Coin::dime);
    println!("The value of a dime is {}", dime);

    value_in_cents2(Coin2::quarter(UsState::Alaska));

    let five = Some(5);
    let six = plus_one(five); // Some(6), five is of type Option<i32> and plus_one returns Option<i32>
    let none = plus_one(None); // returns None

    println!("five: {:?}, six: {:?}, none: {:?}", five, six, none);

    test();
    test2();
    test3();
}

enum Coin {
    penny,
    nickel,
    dime,
    quarter,
}
// returning coin value in cents
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::penny => {
            // curly braces are used when we want to run multiple lines of code
            println!("Lucky penny!");
            1
        }
        Coin::nickel => 5, // these are arms of the match expression, it has pattern and code to run if the value matches the arm pattern
        // if it doesnt match the pattern it moves on to the next arm
        Coin::dime => 10,
        Coin::quarter => 25,
    }
}

//----------------------------
// pattern that binds to the value
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // ...
}

enum Coin2 {
    penny,
    nickel,
    dime,
    quarter(UsState), // quarter variant also has a UsState value associated with it
}

fn value_in_cents2(coin: Coin2) -> u8 {
    match coin {
        Coin2::penny => 1,
        Coin2::nickel => 5,
        Coin2::dime => 10,
        Coin2::quarter(state) => {
            // if the match is quarter, the state variable will bind to the value of that quarter's state
            println!("State quarter from {:?}!", state);
            25
        }
    }
}

//----------------------------
// matching with Option<T>

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1), // if x is Some(5), then i will be 5 and Some(i + 1) will be Some(6)
    }
}

//----------------------------
// matches are exhaustive, meaning that we must provide every possible pattern
// like if in the above example we didnt have the None arm, the code wouldnt compile

fn test() {
    let number = 9;
    match number {
        3 => println!("number is 3"),
        4 => println!("number is 4"),
        // other => println!("number is {}", other), // other is a catchall value, it will match any value, it can be named anything
        // _ => println!("Some other number"), // _ is a placeholder, it will match any rest value
        // without binding to it, it is used when we dont need to use the value in the arm
        _ => (), // we can also use empty code block (tuple) to match any rest value it does nothing
    }
}

//----------------------------
// ownership of values in match
// if we use values in match arms, they will be moved into those arms so be careful while using
// enums having values that are non copyable like strings

fn test2() {
    let opt: Option<String> = Some(String::from("Hello"));
    match opt {
        Some(_) => println!("Some value"), // _ is a placeholder, it will match any rest value
        // Some(s) => println!("{}", s),
        None => (),
    }
    println!("{:?}", opt); // this will throw error because opt is moved into the match arm if
                           // Some(s)... isnt commented
}

fn test3() {
    let opt: Option<String> = Some(String::from("Hello"));

    match &opt {
        // reference of opt
        Some(s) => println!("{}", s),
        None => (),
    }
    println!("{:?}", opt); // this will not throw error because we are using reference of opt
                           // returns Some("Hello")

    // rust pushes down the reference from outer enum &Option<String> to inner enum &String
    // hence s has type &String and we can use it without moving the value out of the Some variant
}

/*
    match is a control flow operator similar if/else but it has its own benefits.
    Ex: In coin sorting machine the coin is passed through a first hole of a certain size that matches the coin size

similarly in match the first pattern the value fits, it falls into the associated code block
 in if condition needs to evaluate to boolean value but in match it can be of any type like Coin enum, it looks at its pattern
 */
