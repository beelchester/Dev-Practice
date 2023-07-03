use std::ops::Range;
fn main() {
    let mut v: Vec<i32> = Vec::new(); // create a new vector, type annotation is needed if not pushing values
                                      // v.push(5); // push a value to the vector, if pushing values, type annotation is not needed, it will be inferred
    let v = vec![1, 2, 3]; // create a new vector with values, no type annotation needed
                           // vec! is a macro for creating a new vector

    // ---------------------
    // Reading elements of vectors
    // two ways to have reference to an element: indexing syntax and get method

    let v = vec![1, 2, 3, 4, 5];

    // vectors are zero indexed
    let third: &i32 = &v[2]; // indexing syntax, will panic if the index is out of bounds
    println!("The third element is {}", third);

    let third: Option<&i32> = v.get(2); // get method, will return None if the index is out of bounds

    match third {
        Some(i) => println!("The third element is {}", i),
        None => println!("There is no third element."),
    }

    // let does_not_exist = &v[100]; // will panic
    let does_not_exist = v.get(100); // will return None

    let first = &v[0]; // immutable borrow
                       // v.push(6); // mutable borrow, cannot borrow as immutable and mutable at the same time
                       // on adding a new element vector can allocate new memory and copy its elements to the new space, if there isn't enough room to put all the elements next to each other, it will allocate a new space on the heap and copy the old elements to the new space, if this happens, the reference to the first element will be pointing to deallocated memory, this is called a dangling pointer, Rust compiler prevents this from happening

    // ---------------------
    // Iterating over the values in a vector

    let v = vec![100, 32, 57];
    for n_ref in &v {
        // n_ref has the type &i32, a reference to each element
        let n_plus_one: i32 = *n_ref + 1; // * is the dereference operator, it gives us the value in n_ref
        println!("{n_plus_one}");
    }

    // mutable reference
    let mut v = vec![100, 32, 57];
    for n_ref in &mut v {
        // n_ref has type &mut i32
        *n_ref += 50;
    }
    println!("{:?}", v); // [150, 82, 107]

    // let v = vec![String::from("Hello ")];
    // let mut s = v[0]; // not allowed to move, as string/vector dont have copy trait
    //                   // only Vec::remove permits moving out of vector
    // s.push_str("world");
    // println!("{s}");

    //---------------------
    // Safely using iterators instead of indices
    // Iterators contain a pointer to data withing the vector

    use std::slice::Iter;
    let mut v: Vec<i32> = vec![1, 2];
    let mut iter: Iter<'_, i32> = v.iter();
    let n1: &i32 = iter.next().unwrap(); // 1
    let n2: &i32 = iter.next().unwrap(); // 2
    let end: Option<&i32> = iter.next(); // None

    // Without needing pointer we can use range
    let mut v: Vec<i32> = vec![1, 2];
    let mut iter: Range<usize> = 0..v.len();
    let i1: usize = iter.next().unwrap();
    let n1: &i32 = &v[i1];
    println!("{:?}", n1); // 1
    let i2: usize = iter.next().unwrap();
    let n2: &i32 = &v[i2];
    println!("{:?}", n2); // 2

    // using enum to store multiple types
    #[derive(Debug)]
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let row: Vec<SpreadsheetCell> = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];

    println!("{:?}", row);

    // pop method
    let mut stack = Vec::new();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    while let Some(top) = stack.pop() {
        // Prints 3, 2, 1
        println!("{top}");
    }
}

/*
Unlike the built-in array and tuple types, the data these collections point to is stored on the heap, which means the amount of data does not need to be known at compile time and can grow or shrink as the program runs.

collection types:
A vector allows you to store a variable number of values next to each other.
A string is a collection of characters.
A hash map allows you to associate a value with a particular key.

Vec<T> is a vector, it can store variable values of the same type.

Like any other struct, a vector is freed when it goes out of scope

When the vector gets dropped, all of its contents are also dropped, meaning the integers it holds will be cleaned up. The borrow checker ensures that any references to contents of a vector are only used while the vector itself is valid.
  */
