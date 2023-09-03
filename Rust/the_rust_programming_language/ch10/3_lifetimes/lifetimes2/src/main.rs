// so far  we have used structs that hold values of only owned type.
// now we will hold references to data owned by something else.
// To do this we also need to specift its lifetime, using lifetime annotations.

struct ImportantExcerpt<'a> {
    part: &'a str,
    // instance of ImportantExcerpt cant outlive the reference it holds in its part field
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'"); // Call me Ishmael
    let i = ImportantExcerpt {
        part: first_sentence,
    };
    // instance i is valid as long as novel is valid.
    // As part holds reference to first_sentence which holds reference to novel.
    // If novel/first_sentence goes out of scope before i then i will be invalid.
    println!("{}", i.part); // Call me Ishmael

    // Lifetime Elision

    // fn first_word(s: &str) -> &str {
    // here we dont need to specify lifetime of s because it is inferred by compiler.
    // In earlier versions of rust(pre 1.0) we had to specify lifetime of s as 'a like below
    // fn first_word<'a>(s: &'a str) -> &'a str {}
    // This is called lifetime elision.
    // Lifetimes on function or method parameters are called input lifetimes, and lifetimes on return values are called output lifetimes.
    // For inference the compiler follows 3 rules called lifetime elision rules:
    // 1. Each parameter that is a reference gets its own lifetime parameter.
    // 2. If there is exactly one input lifetime parameter, that lifetime is assigned to all output lifetime parameters.
    // 3. If there are multiple input lifetime parameters, but one of them is &self or &mut self because this is a method, the lifetime of self is assigned to all output lifetime parameters.

    // But it doesnt always infer lifetime in some cases it will give error and we have to specify lifetime explicitly.
    // 1. Ex:
    // The function fn foo(x: &i32, y: &i32) would get two lifetime parameters and become fn foo<'a, 'b>(x: &'a i32, y: &'b i32).
    // 2. Ex:
    // fn foo<'a>(x: &'a i32) -> &'a i32

    // fn longest(x: &str, y: &str) -> &str {}
    // In the above function after first rule
    // fn longest<'a, 'b>(x: &'a str, y: &'b str) -> &str {}
    // but for the second rule it doesnt have a single input so second rule is invalid.
    // for the third rule it doesnt have self as it is a function not method so third rule is invalid.
    // Hence we will get error and we have to specify lifetime explicitly.

    // Lifetime Annotations in Method Definitions

    // lifetime implementation are a type of generics so below we used <>
    impl<'a> ImportantExcerpt<'a> {
        fn level(&self) -> i32 {
            3
        }
        // it is not referncing to anything, and we dont have to annotate lifetimes.
        // below the third rule is applied.
        // It will apply first rule and then third rule, so output lifetime will be same as self lifetime.
        // fn announce_and_return_part(&self, announcement: &str) -> &str {
        // the above will be like below for compiler:
        fn announce_and_return_part(&'a self, announcement: &str) -> &'a str {
            println!("Attention please: {}", announcement);
            self.part
        }
    }

    // static lifetime
    // 'static is the lifetime that lasts for the entire duration of the program.
    // all string literals have 'static lifetime as they are stored in binary of program and hence they are always available.
    let s: &'static str = "I have a static lifetime.";

    // putting generic type parameters, trait bounds, and lifetimes all in one function!

    use std::fmt::Display;

    fn longest_with_an_announcement<'a, T>(x: &'a str, y: &'a str, ann: T) -> &'a str
    where
        T: Display,
    {
        println!("Announcement! {}", ann);
        if x.len() > y.len() {
            x
        } else {
            y
        }
    }

    println!("{}", longest_with_an_announcement("asd", "asjl", "hi"))
}
