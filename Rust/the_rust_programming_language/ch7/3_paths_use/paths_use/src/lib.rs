mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("add_to_waitlist");
        }
    }
}

// use crate::front_of_house::hosting; // now hosting is a valid name in this scope

// like any path use also checks for privacy rules and supports both absolute and relative paths

use self::front_of_house::hosting::add_to_waitlist; // now add_to_waitlist is a valid name in this scope

use std::collections::HashMap;

pub fn eat_at_restaurant() {
    // hosting::add_to_waitlist();
    add_to_waitlist(); // more idiomatic

    let mut map = HashMap::new();
    map.insert(1, 2);

    // which is more idiomatic depends on the context like sometimes it's better to use parent
    // module when same function name is used in different modules
}
// ------------------------------
// Providing new names with the as keyword (aliasing)
// to solve the problem above instead of using parent module we can use as keyword to alias the name

use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {
    Ok(())
}

fn function2() -> IoResult<()> {
    Ok(())
}

// ------------------------------
// When we bring a name into scope with the use keyword, the name available in the new scope is private.
// to make it public we can use pub keyword

pub use crate::front_of_house::hosting; // now hosting is a valid name in this scope
                                        // this re-export the hosting module as a public module
                                        // so that external code can call the add_to_waitlist
                                        // function using hosting::add_to_waitlist() path

pub fn eat_at_restaurant2() {
    hosting::add_to_waitlist();
}
