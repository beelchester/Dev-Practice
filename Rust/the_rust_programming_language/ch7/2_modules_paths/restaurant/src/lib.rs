// nested module

// inline definitions of modules
// mod front_of_house {
//     mod hosting {
//         fn add_to_waitlist() {
//             println!("add_to_waitlist");
//         }
//
//         fn seat_at_table() {
//             println!("seat_at_table");
//         }
//     }
//
//     mod serving {
//         fn take_order() {
//             println!("take_order");
//         }
//
//         fn serve_order() {
//             println!("serve_order");
//         }
//
//         fn take_payment() {
//             println!("take_payment");
//         }
//     }
// }

pub mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("add_to_waitlist");
        }

        pub fn seat_at_table() {
            println!("seat_at_table");
        }
    }

    pub mod serving {
        pub fn take_order() {
            println!("take_order");
        }

        pub fn serve_order() {
            println!("serve_order");
        }

        pub fn take_payment() {
            println!("take_payment");
        }
    }
}

pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::seat_at_table();
}

// using super to refer to parent module

fn deliver_order() {
    println!("deliver_order");
}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::deliver_order(); // super refers to parent module (crate)
    }
    fn cook_order() {
        println!("cook_order");
    }
}

// using pub before struct make it public but not its fields

mod back_of_house1 {
    pub struct Breakfast {
        pub toast: String,      // public
        seasonal_fruit: String, // private
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }
}

pub fn eat_at_restaurant1() {
    // Order a breakfast in the summer with Rye toast
    let mut meal = back_of_house1::Breakfast::summer("Rye");
    // Change our mind about what bread we'd like
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);

    // The next line won't compile if we uncomment it; we're not allowed
    // to see or modify the seasonal fruit that comes with the meal
    // meal.seasonal_fruit = String::from("blueberries");

    // as the struct has a private field struct needs to provide a public associated function that constructs an instance of the struct with private fields set to some reasonable default.
    // else we could have not created an instance of the struct as it will have private field unset
}

// ------------------------------
// making an enum public makes all its variants public
mod back_of_house2 {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant2() {
    let order1 = back_of_house2::Appetizer::Soup;
    let order2 = back_of_house2::Appetizer::Salad;
}

/*
module tree

crate (lib.rs)
 └── front_of_house
     ├── hosting
     │   ├── add_to_waitlist
     │   └── seat_at_table (sibling to add_to_waitlist)
     └── serving
         ├── take_order
         ├── serve_order
         └── take_payment

Items in parent modules cannot use the private items inside child modules, but items in child modules can use the items in their ancestor modules.
  */
