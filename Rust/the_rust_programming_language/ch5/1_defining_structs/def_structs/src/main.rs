/*
  A struct, or structure, is a custom data type that lets you package together and name multiple related values that make up a meaningful group. If you’re familiar with an object-oriented language, a struct is like an object’s data attributes.
*/

struct User {
    // define a struct
    username: String,
    email: String,
    sign_in_count: u64, // unsigned 64-bit integer
    active: bool,
}

fn main() {
    let user1 = User {
        // create an instance of the struct
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    println!("user1.email: {}", user1.email);

    // mutable
    let mut user2 = User {
        // entire instance must be mutable
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    println!("user2.email: {}", user2.email);
    user2.email = String::from("new@example.com");
    println!("user2.email: {}", user2.email);

    // this function returns a User instance that has default active and sign_in_count values and the values passed in for email and username
    fn build_user(email: String, username: String) -> User {
        User {
            email: email,
            username, // field init shorthand, same as username: username, works as long as
            // variable and parameter names are the same
            active: true,
            sign_in_count: 1,
        }
    }

    let user3 = build_user(
        String::from("someone@example.com"),
        String::from("someusername123"),
    );

    println!("user3.email: {}", user3.email);

    // Creating Instances From Other Instances With Struct Update Syntax

    let user4 = User {
        email: String::from("user4@example.com"),
        username: String::from("user4"),
        active: user3.active, // without struct update syntax
        sign_in_count: user3.sign_in_count,
    };

    let user5 = User {
        email: String::from("user5@example.com"),
        username: String::from("user5"),
        ..user3 // with struct update syntax
    };

    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };

    // Note that the struct update syntax uses = like an assignment; this is because it moves the data
    // we can no longer use user1 after creating user2 because the String in the username field of user1 was moved into user2
    // String uses move, while if only active and sign_in_count were used of user1, we could still use user1, because they use copy

    // Using Tuple Structs without Named Fields to Create Different Types
    // structs that look similar to tuples, called tuple structs
    // they dont have names associated with their fields, just the types of the fields
    // useful when you want to give the whole tuple a name and make the tuple be a different type from other tuples, and naming each field as in a regular struct would be verbose or redundant

    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    fn test() {
        let black = Color(0, 0, 0);
        let origin = Point(0, 0, 0);
    }
    // Each struct you define is its own type, even though the fields within the struct might have the same types.
    // Ex: a function that takes a parameter of type Color cannot take a Point as an argument, even though both types are made up of three i32 values.

    // Unit-Like Structs Without Any Fields

    struct AlwaysEqual;

    fn test2() {
        let subject = AlwaysEqual;
    }
    // This struct is called a unit-like struct because it resembles the empty tuple, (), sometimes called unit.
    // Unit-like structs can be useful in situations in which you need to implement a trait on some type but don’t have any data that you want to store in the type itself.

    // borrowing fields with struct

    // Rust's borrow checker will track ownership permissions at both the struct-level and field-level. For example, if we borrow a field x of a Point structure, then both p and p.x temporarily lose their permissions (but not p.y):

    fn test3() {
        struct Point {
            x: i32,
            y: i32,
        }

        let mut p = Point { x: 0, y: 0 };
        let x = &mut p.x;
        *x += 1;
        println!("{}, {}", p.x, p.y);
    }

    // so we cannot borrow p and p.x here, like :

    struct Point1 {
        x: i32,
        y: i32,
    }

    fn print_point(p: &Point1) {
        println!("{}, {}", p.x, p.y);
    }

    fn test4() {
        let mut p = Point1 { x: 0, y: 0 };
        let x = &mut p.x; // &mut removes read permission from p.x and p but not &
                          // let x = &p.x;
                          // print_point(&p);
        *x += 1;
    }

    struct Point3 {
        x: i32,
        y: i32,
    }

    fn test5() {
        let mut p = Point3 { x: 1, y: 2 };
        let x = &mut p.x;
        let y = &mut p.y; // possible as it does not remove permissions from p.y, only p.x and p
                          // permissions are romved in let x = ... line
        *x += 1;
        *y += 1;
        println!("{} {}", p.x, p.y);
    }
}
