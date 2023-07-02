/*
   A module in Rust is a collection of items: functions, structs, traits, impl blocks, and even other modules.

   Modules cheat sheet:
   1. Start from crate root

   2. Declaring modules :
       Ex: mod foo; in crate root
   The rust comiler will look for inline defination of foo Ex: mod foo { ... } or files src/foo.rs or src/foo/mod.rs

   3. Declaring submodules:
        Ex: mod bar; in foo.rs or foo/mod.rs
    The rust comiler will look for inline defination of bar Ex: mod bar { ... } or files src/foo/bar.rs or src/foo/bar/mod.rs

4. Path to code in modules: suppose referring to a type asparagus in module src/garden/vegetables/mod.rs
    1. Absolute path: crate::garden::vegetables::asparagus
    2. Relative path: super::vegetables::asparagus // super refers to parent module
    3. Relative path: self::vegetables::asparagus // self refers to current module
    4. Relative path: vegetables::asparagus // vegetables is sibling module

5. private vs public: crate is private by default from parent modules
    pub mod foo; // public

6. use keyowrd : using the code inside of the module
    use crate::garden::vegetables::asparagus;
    now we can use asparagus directly without crate::garden::vegetables::asparagus repeatedly

// ------------------------------
Grouping related code in modules

Modules are useful for organizing your code.
Modules let you control the privacy and scope of items, which is whether an item can be used by outside code (public) or is an internal implementation detail and not available for outside use (private).
also safe to use same name for different items in different modules
and encapsulate implementation details

Ex: restaurant library crate in ch7/2_modules/restaurant
created using cargo new restaurant --lib

*/

use crate::garden::vegetables::Asparagus;

pub mod garden;

fn main() {
    let asparagus = Asparagus {
        name: String::from("Asparagus"),
        quantity: 10,
    };

    println!("{:?}", asparagus);
}
