pub trait Summary {
    // trait definition
    // fn summarize(&self) -> String;

    // default implementation
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
    // default implementation can call other methods in same trait.

    // fn summarize_author(&self) -> String;
    //
    // fn summarize(&self) -> String {
    //     format!("(Read more from {}...)", self.summarize_author()) // on calling summarize(), it will call summarize_author() and use its return value.
    // Note that it isn’t possible to call the default implementation from an overriding implementation of that same method.
    // }
}

// implementation of trait

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    // implementation of trait for NewsArticle
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}
// now we can call summarize() on NewsArticle instance. Means it has behavior of Summary trait.

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    // implementation of trait for Tweet
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
    // fn summarize_author(&self) -> String {
    //     format!("@{}", self.username)
    // }
}

pub struct Test {
    pub t1: String,
}

// impl Summary for Test {} // no implementation of summarize() for Test. It will use default implementation.

// Traits as Parameters
// We can use traits to define functions that accept many different types.

// impl trait syntax
// pub fn notify(item: &impl Summary) {
// notify accepts any type that implements Summary trait.
//     println!("Breaking news! {}", item.summarize());
// }

// trait bound syntax, same as above but more verbose
pub fn notify<T: Summary>(item: &T) {
    // notify accepts any type that implements Summary trait.
    println!("Breaking news! {}", item.summarize());
}

// impl trait syntax is more concise and clearer in simple cases.
// but in complex cases, trait bound syntax is more verbose but clearer. like below:
// pub fn notify(item1: &impl Summary, item2: &impl Summary) {}
// pub fn notify<T: Summary>(item1: &T, item2: &T) {}

// specifying multiple trait bounds with the + syntax
// pub fn notify_multiple(item: &(impl Summary + Display)) {
//     println!("Breaking news! {}", item.summarize());
// }
//
// pub fn notify_multiple2<T: Summary + Display>(item: &T) {
//     println!("Breaking news! {}", item.summarize());
// }

// Clearer Trait Bounds with where Clauses
// fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}

// fn some_function<T, U>(t: &T, u: &U) -> i32
// where
//    T: Display + Clone,
//    U: Clone + Debug,
//    {}
