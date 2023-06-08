fn main() {
    // Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection. A slice is a kind of reference, so it is a non-owning pointer.

    let s = String::from("hello world");

    let hello: &str = &s[0..5];
    let world: &str = &s[6..11];
    let s2: &String = &s;

    println!("{hello} {world} {s2}"); // hello world hello world

    let len = s.len();

    let slice = &s[0..2];
    let slice = &s[..2]; // same as above

    let slice = &s[3..len];
    let slice = &s[3..]; // same as above

    let slice = &s[0..len];
    let slice = &s[..];

    // String slice range indices must occur at valid UTF-8 character boundaries.

    let s = "Hello, world!"; // &str is a string literal, it is a string slice of string stored in the binary

    // slices can be used on other types too like arrays and vectors

    let a = [0, 1, 2, 3, 4];
    let slice = &a[1..3]; // slice is of type &[i32]
}
