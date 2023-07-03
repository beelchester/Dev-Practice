fn main() {
    let mut s = String::from("hello");
    s.push_str(", world!"); // push_str() appends a literal to a String
    println!("{}", s); // This will print `hello, world!`

    // converting to string

    let data = "initial contents"; // string literal, &str
    let s = data.to_string();
    // the method also works on a literal directly:
    let s = "initial contents".to_string();
    let s = String::from("initial contents");
    // the above two are equivalent, matter of style and preference

    // as strings are UTF-8 encoded, we can include any properly encoded data in them
    let hello = String::from("السلام عليكم");
    let hello = String::from("Dobrý den");
    let hello = String::from("Hello");
    let hello = String::from("שָׁלוֹם");
    let hello = String::from("नमस्ते");
    let hello = String::from("こんにちは");
    let hello = String::from("안녕하세요");
    let hello = String::from("你好");
    let hello = String::from("Olá");
    let hello = String::from("Здравствуйте");
    let hello = String::from("Hola");

    //---------------------------
    // updating a string

    // appending to a string with push_str and push
    let mut s = String::from("foo");
    s.push_str("bar");
    println!("s is {}", s); // s is foobar

    let mut s1 = String::from("foo");
    let s2 = 'd';
    s1.push(s2); // push takes a single character and adds it to the String
    println!("s1 is {}", s1); // s1 is food

    //concatenation with the + operator or the format! macro

    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // note s1 has been moved here and can no longer be used
                       // we can only add &str to string, not two strings
                       // &s2 is &String not &str but rust uses deref coercion to turn &s2 into &s2[..]
                       // which is a slice of the whole string and is of type &str
                       // s2 is valid s1 is not, after this
                       // heres concatenation funciton
                       // fn add(self, s: &str) -> String {
                       // it needs ownership of s1, here's how this funcion works:
                       // 1. add takes ownership of s1,
                       // 2. it appends a copy of the contents of s2 to s1,
                       // 3. and then it returns back ownership of s1.
                       // s1 will reallocate memory if its capacity is not enough

    println!("s3 is {}", s3); // s3 is Hello, world!

    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    // let s = s1 + "-" + &s2 + "-" + &s3; // this is ugly and not practical
    // rust has a better way using format! macro
    // here as we can see s1 is moved and all others are of
    // type/ coerced to &str
    // println!("s is {}", s); // s is tic-tac-toe

    let s = format!("{s1}-{s2}-{s3}");
    println!("s is {}", s); // s is tic-tac-toe

    // format! does not take ownership of any of its parameters, it only uses references

    // also push_str does not take ownership of the parameter, it only uses a mutable reference
    // ex: let mut s1 = String::from("hello");
    //   s1.push_str(", world"); // s1 is still valid here
    // ----------------------------

    //Rust does not allowing string indexing.

    //String contains UTF-8 encoded data, so indexing by looking at the bytes will not always return valid values of representation.
    //Ex: नमस्ते , म contains 3 bytes if we try to access it through indexing we will only get its first byte which is not valid representation of म. Hence rust does not allow this.
    //It might work where string has each character of one byte, but it is not the case with all UTF-8 encoded strings.

    let hello = "Здравствуйте"; // contains 2 bytes each

    //indexing one byte at a time will not be valid, rust code will not compile
    //instead we can use slicing
    let s = &hello[0..4]; // s is Зд, first 4 bytes
                          // but we have to be careful with slicing as range might not be valid

    // best way to iterate over string is to use chars method
    for c in "नमस्ते".chars() {
        println!("{}", c); // prints each char on a new line
    }

    // alternatively we can use bytes method to iterate over each byte
    for b in "Зд".bytes() {
        println!("{b}");
    }
    // 208
    // 151
    // 208
    // 180
}

/* str is a string slice, usually seen in its borrowed form &str.
    It is a reference to some UTF-8 encoded string data stored elsewhere.
Like string literals are string slices as they are stired in the binary of the program.
str is immuratable and UTF-8 encoded.

String is a heap allocated string. It is growable, owned, mutable and UTF-8 encoded.

A lot of the functionality of String comes from the fact that it is a wrapper over a Vec<T>.

string methods: contains, replace, split, trim, to_lowercase, to_uppercase, etc.
*/
