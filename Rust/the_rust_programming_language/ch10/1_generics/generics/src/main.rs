// struct Point<T> {
struct Point<T, U> {
    x: T,
    y: U,
}

impl<T, U> Point<T, U> {
    // we can also implement methods on structs with generic types.

    // we could also implement methods on Point<T> rather than Point<T, U> if
    // struct was Point<T>

    // fn x(&self) -> &T {
    fn x(&self) -> &T {
        &self.x
    }
    fn y(&self) -> &U {
        &self.y
    }
}

// we  can also specify constraints on generic types when defining a method.
// suppose we only want to implement methods on Point<i32> or Point<f32, f32> instances.

impl Point<f32, f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65]; // 100
    println!("The largest number is {}", largest(&number_list));
    let char_list = vec!['s', 'm', 'a', 'z']; // z
    println!("The largest char is {}", largest(&char_list));
    let bool_list = vec![true, false, true, false, true]; // true
    println!("The largest bool is {}", largest(&bool_list));

    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
    // let wont_work = Point { x: 5, y: 4.0 }; // error: mismatched types
    // in this case we can use different types for x and y.
    // Point<T,U>
    let wont_work = Point { x: 5, y: 4.0 }; // works

    println!("wont_work.x = {}", wont_work.x());
    println!("wont_work.y = {}", wont_work.y());

    // println!("distance = {}", integer.distance_from_origin()); // error: no method named `distance_from_origin` found for struct `Point<{integer}, {integer}>` in the current scope
    println!("distance = {}", float.distance_from_origin());

    let y = mystery(5);
    println!("y = {}", y); // y = 5 always, mystery() returns the same value as it takes. as it is generic over type T.
                           // and it cant be changed inside function code block as we dont know the type of T.
}

// fn largest<T>(list: &[T]) -> &T {
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];

    for item in list {
        if item > largest {
            // error: binary operation `>` cannot be applied to type `&T`
            // because we don't know that the type T implements the trait std::cmp::PartialOrd
            // so we can't compare the values of two instances of type T.
            // Rust doesn’t know at compile time what type we will pass into the largest function,
            // so it doesn’t know whether this code will work. Hence it throws an error. unlike c/c++.
            // also it doesnt have core methods like .toString() in java.
            // to fix this we need to restrict the generic type T to types that implement the PartialOrd trait.
            // to do so we add the trait bound syntax to our generic type parameter definition.
            // like this: fn largest<T: PartialOrd>(list: &[T]) -> &T {}
            // This function will now compile because we’ve specified that T can be any type that implements the PartialOrd trait.
            largest = item;
        }
    }

    largest
}

fn mystery<T>(x: T) -> T {
    x
}

/*
Steps to reduce duplication in the code:
1. Identify duplicate code.
2. Extract the duplicate code into the body of the function and specify the inputs and return values of that code in the function signature.
3. Update the instances of duplicated code to call the function instead.

Like the fuction allows us to use abstract values similarly generics allow us to abstract over types.

We use generics to create definitions for items like function signatures or structs, which we can then use with many different concrete data types.

fn largest<T>(list: &[T]) -> &T {} // <T> is needed to tell the compiler we’re defining a generic type.
                                   // we call it as the function largest is generic over some type T.

enum also can be generic.

enum Option<T> {
    Some(T),
    None,
}
enum Result<T, E> {
    Ok(T),
    Err(E),
}

using generics doesnt slow down the code execution. Rust accomplishes this by performing monomorphization of the code that is using generics at compile time.
Monomorphization is the process of turning generic code into specific code by filling in the concrete types that are used when compiled.
The compiler looks at all the places where generic code is called and generates code for the concrete types the generic code is called with.

let integer = Some(5);
let float = Some(5.0);

monomorphized code of above would be:

enum Option_i32 {
    Some(i32),
    None,
}
enum Option_f64 {
    Some(f64),
    None,
}

It is same as doing duplicates by hand in terms of performance. but it is more convenient and maintainable.
  */
