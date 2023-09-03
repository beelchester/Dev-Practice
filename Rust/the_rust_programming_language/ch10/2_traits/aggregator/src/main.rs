use aggregator::{NewsArticle, Summary, Test, Tweet}; // to bring the trait and types in scope.
                                                     // aggregator is the crate name

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };

    // println!("1 new tweet: {}", tweet.summarize());

    // 1 new tweet: horse_ebooks: of course, as you probably already know, people

    let article = NewsArticle {
        headline: String::from("Penguins win the Stanley Cup Championship!"),
        location: String::from("Pittsburgh, PA, USA"),
        author: String::from("Iceburgh"),
        content: String::from(
            "The Pittsburgh Penguins once again are the best \
             hockey team in the NHL.",
        ),
    };

    // println!("New article available! {}", article.summarize());
    // New article available! Penguins win the Stanley Cup Championship! by Iceburgh (Pittsburgh, PA, USA)

    let test = Test {
        t1: String::from("test"),
    };

    // println!("Test: {}", test.summarize()); // Test: (Read more...)

    println!("1 new tweet: {}", tweet.summarize()); // 1 new tweet: (Read more from @horse_ebooks...)

    // Returning Types that Implement Traits
    fn returns_summarizable() -> impl Summary {
        Tweet {
            username: String::from("horse_ebooks"),
            content: String::from("of course, as you probably already know, people"),
            reply: false,
            retweet: false,
        }
    } // we can return any type that implements Summary trait. Here we are returning Tweet type.

    let tweet = returns_summarizable();
    println!("1 new tweet: {}", tweet.summarize()); // code calling this doesnt know the exact type of Summary trait.
                                                    // impl trait syntax can be used only when
                                                    // returning a single type.
                                                    // If we want to return either a NewsArticle or a Tweet,
                                                    // it won’t work.
                                                    // we have to use a trait object instead. chapter 17
}

// using trait bounds to conditionally implement methods

use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}

// new function will be available for all the instances of Pair<T> but cmp_display will be available only for the instances of Pair<T> that have types that implement Display and PartialOrd traits.

// We can also conditionally implement a trait for any type that implements another trait
// Implementations of a trait on any type that satisfies the trait bounds are called blanket implementations and are extensively used in the Rust standard library.
// Ex: the standard library implements the ToString trait on any type that implements the Display trait.
// It would look something like this:

// impl<T: Display> ToString for T {
//     // --snip--
// }

// hence we can use to_string method on any type that implements Display trait.

/*
A trait defines functionality a particular type has and can share with other types. We can use traits to define shared behavior in an abstract way. We can use trait bounds to specify that a generic type can be any type that has certain behavior.
It is similar to interfaces in other languages but with some differences.

Trait definitions are a way to group method signatures together to define a set of behaviors necessary to accomplish some purpose.

One restriction to traits is that we can implement a trait on a type only if either the trait or the type is local to our crate. This restriction is part of a property of programs called coherence, and more specifically the orphan rule, so named because the parent type is not present. This rule ensures that other people’s code can’t break your code and vice versa. Without the rule, two crates could implement the same trait for the same type, and Rust wouldn’t know which implementation to use.

The orphan rule prevents this from happening because it won’t compile code that breaks the rule. The rule does have one exception: it’s possible to implement a trait on a type as long as either the trait or the type are local to our crate.

Ex: we can implement Display on Tweet custom type as part of our aggregator crate functionality, because the type is local to our crate.
Display is a trait that is defined in the standard library (external to our crate).

We can also implement Summary on Vec<T> because the trait is local to our crate.
Vec<T> is a type defined in the standard library (external to our crate).

But we cant use Display trait on Vec<T> because the trait is defined in the standard library and the type is not local to our crate.
If both trait and type are not local (external), we cant implement those traits on those types.

 */
