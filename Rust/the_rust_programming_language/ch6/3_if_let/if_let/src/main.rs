fn main() {
    let test = Some(5);
    match test {
        Some(5) => println!("Got 5"),
        _ => (),
    }

    // if let, same as above
    if let Some(5) = test {
        println!("Got 5, if let");
    }

    match test {
        Some(6) => println!("Got 6"),
        _ => println!("Got something else"),
    }

    // if let else, same as above
    if let Some(6) = test {
        println!("Got 6, if let");
    } else {
        println!("Got something else, if let");
    }
}

/*
if let can be used to match a single pattern, while match can be used to match multiple patterns.
It is concise, but loses the exhaustive checking that match enforces, it ignores all other values.
  */
