fn main() {
    // preventing dangling references with lifetimes... main aim of lifetimes
    /*
                        fn main() {
                        let r;                // ---------+-- 'a
                                              //          |
                        {                     //          |
                            let x = 5;        // -+-- 'b  |
                dangling -> r = &x;           //  |       |
                        }                     // -+       |
                                              //          |
                        println!("r: {}", r); //          |
                    }                         // ---------+

            a' is the lifetime of r, b' is the lifetime of x.
            Rust borrow checker will compare scopes/lifetimes to determine if the reference is valid or not.

        fn main() {
            let x = 5;            // ----------+-- 'b
                                  //           |
            let r = &x;           // --+-- 'a  |
                                  //   |       |
            println!("r: {}", r); //   |       |
                                  // --+       |
        }                         // ----------+

    the above is valid because the lifetime of r is within the lifetime of x.
                    */

    // Generic Lifetimes in Functions

    // let string1 = String::from("abcd");
    // let string2 = "xyz";
    //
    // let result = longest(string1.as_str(), string2);
    // println!("The longest string is {}", result);

    // fn longest(x: &str, y: &str) -> &str {
    //     if x.len() > y.len() {
    //         x
    //     } else {
    //         y
    //     }
    // }
    // Here it will throw error because it doesnt know when reference to x or y will be returned
    // and hence it doesnt know the lifetime of the reference and how the lifetime of the reference relates to each other.
    // so it asks us to annotate the lifetimes of the parameters and return type using generic lifetime annotations.

    // Lifetime annotation syntax
    // &i32        // a reference
    // &'a i32     // a reference with an explicit lifetime
    // &'a mut i32 // a mutable reference with an explicit lifetime
    // convention is to use single lowercase letters, starting with '. 'a,'b,'c etc
    // lifetime annotations dont change how long any of the references live rather they provide info about the relationships of the lifetimes of multiple references to the compiler. It doesnt affect anyone's lifetime
    // it will be specifying that the borrow checker should reject any values that don’t adhere to these constraints

    // Lifetime Annotations in Function Signatures

    fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
        // The function signature now tells Rust that for some lifetime 'a, the function takes two parameters, both of which are string slices that live at least as long as lifetime 'a. The function signature also tells Rust that the string slice returned from the function will live at least as long as lifetime 'a. In practice, it means that the lifetime of the reference returned by the longest function is the same as the smaller of the lifetimes of the values referred to by the function arguments.

        if x.len() > y.len() {
            x
        } else {
            y
        }
    }

    // the generic lifetime 'a will get the concrete lifetime that is equal to the smaller of the lifetimes of x and y. Because we’ve annotated the returned reference with the same lifetime parameter 'a, the returned reference will also be valid for the length of the smaller of the lifetimes of x and y.

    let string1 = String::from("long string is long");

    {
        let string2 = String::from("xyz");
        let result = longest(string1.as_str(), string2.as_str());
        println!("The longest string is {}", result);
    }

    // here the lifetime of result is the same as the smaller of the lifetimes of string1 and string2.
    // i.e string2 in this case so when string2 goes out of scope, result will be invalid.

    // println!("The longest string is {}", result); // this will throw error

    // Thinking in terms of lifetimes

    fn longest1<'a>(x: &'a str, y: &str) -> &'a str {
        x
    }
    // here we dont need to specidy lifetime of y because it doesnt have any relationship with x in
    // this function, as it simply returns x and return type lifetime is same as x.

    // also the lifetime of return value should be same as atleast one of the parameters.
    // fn longest<'a>(x: &str, y: &str) -> &'a str {
    //     let result = String::from("really long string");
    //     result.as_str()
    // }
    // The above gives error as the return value is not related to any of the parameters in terms of lifetime.
    // This is a problem because the lifetime of the reference returned by the longest function is unknown.
}

/*
Lifetimes are the scope for which a reference is valid.
Most of the time, lifetimes are implicit and inferred by the compiler using borrow checker, also types are inferred.
But sometimes we need to annotate types when multiple types are possible, similarly we need to annotate lifetimes when
lifetimes of references could be related in a few different ways.
Rust requires us to annotate the relationships using generic lifetime parameters to ensure the actual references used at runtime will definitely be valid.


 */
