// separating modules into different files

pub use crate::front_of_house::hosting;

pub mod front_of_house;

fn main() {
    hosting::add_to_waitlist();
}

/*
 alternative file paths:
src/front_of_house.rs (what we covered)
src/front_of_house/mod.rs (older style, still supported path)

src/front_of_house/hosting.rs (what we covered)
src/front_of_house/hosting/mod.rs (older style, still supported path)

dont use both styles in the same project, else you will get a compiler error
 */
