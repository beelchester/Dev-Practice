pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

#[cfg(test)] // cfg (configure) attribute, tells Rust to compile and run the test code only when we run cargo test
mod tests {
    // module
    use super::*; // brings outer scope into the inner scope, like add, Rectangle here
                  // anything we declare in the outer scope is available in the inner scope

    #[test] // test attribute, declaring it_works as a test functions
            // attribute is a metadata about some piece of rust code
    fn it_works() {
        // let result = add(2, 3); //  assertion failed  (left == right), left: `5`, right: `4`
        // in some progamming languages left and right are called expected and actual. The sequence
        // of left right in rust doesnt really matter.
        let result = add(2, 2);
        // assert_eq!(result, 4); // assert_eq! macro compares two values (==)
        // assert_ne!(result, 5); // assert_ne! macro compares two values (!=)
        // use assert_ne when we’re not sure what a value will be, but we know what the value definitely shouldn’t be
        // The assert_eq! and assert_ne! macros use == and != operators; they require types with PartialEq and Debug traits, which are usually implemented by primitive types and standard library types, but need to be manually implemented for custom structs and enums.
        // we can manually do this by adding #[derive(PartialEq, Debug)] annotation to the struct definition

        // adding custom error message
        // the third argument in assert, assert_eq, assert_ne macros is an optional custom error message
        // It is passed along to format! macro, which means we can pass format string syntax as well
        assert_eq!(result, 4, "Expected 4, but got {}", result);
    }

    // #[test]

    // fn another() {
    //     panic!("Make this test fail"); // panic! macro will cause the test to fail
    // }

    #[test]
    fn larger_can_hold_smaller() {
        let larger = Rectangle {
            width: 10,
            height: 10,
        };

        let smaller = Rectangle {
            width: 5,
            height: 5,
            // height: 15, // error
        };

        // assert!(larger.can_hold(&smaller)); // assert! macro, if it receives false, it calls the panic! macro
        assert!(!smaller.can_hold(&larger)) // pass as !false is true
    }
}

/*
Tests can be useful to evaulate the code and make sure it works as expected.

The bodies of test functions typically perform these three actions:
1. Set up any needed data or state.
2. Run the code you want to test.
3. Assert the results are what you expect.

cargo test

Tests fail when something in the test function panics. Each test is run in a new thread, and when the main thread sees that a test thread has died, the test is marked as failed.

The assert! macro, provided by the standard library, is useful when you want to ensure that some condition in a test evaluates to true. We give the assert! macro an argument that evaluates to a Boolean. If the value is true, nothing happens and the test passes. If the value is false, the assert! macro calls panic! to cause the test to fail
 */
