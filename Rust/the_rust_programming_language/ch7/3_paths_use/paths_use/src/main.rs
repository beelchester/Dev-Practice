use rand::Rng; // external crate
               // use std::collections::HashMap; // standard library, also a crate but included by default

// use std::cmp::Ordering;
// use std::io;

// use std::{cmp::Ordering, io}; // multiple imports from the same crate, same as above

// use std::io;
// use std::io::Write;

use std::io::{self, Write}; // same as above, merging the two imports

use std::collections::*; // import all public items defined in the collections crate into the current scope
                         // * is glob operator, ofen used for testing

fn main() {
    let num = rand::thread_rng().gen_range(1..=100); // use the external crate

    let mut map = HashMap::new(); // brought into scope by the use std::collections::*
    map.insert(1, 2);
}
