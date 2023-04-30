// rust is statically typed language means it must know the types of all variables at compile time
// two subsets of types: scalar and compound
// scalar types: integers, floating-point numbers, booleans, characters
// scalar types represent a single value
//
// integer types: i8, u8, i16, u16, i32, u32, i64, u64, i128, u128
//  Signed and unsigned refer to whether it’s possible for the number to be negative—in other words, whether the number needs to have a sign with it (signed) or whether it will only ever be positive and can therefore be represented without a sign (unsigned)
//Each signed variant can store numbers from -(2^(n - 1)) to 2^(n - 1) - 1 inclusive, where n is the number of bits that variant uses. So an i8 can store numbers from -(2^7) to 2^7 - 1, which equals -128 to 127. Unsigned variants can store numbers from 0 to 2^n - 1, so a u8 can store numbers from 0 to 2^8 - 1, which equals 0 to 255.
// isize and usize types depend on the kind of computer your program is running on: 64 bits if
// you’re on a 64-bit architecture and 32 bits if you’re on a 32-bit architecture.
// in general, Rust defaults to i32
// integer literals can be expressed in decimal, hex, octal, binary and byte (u8 only) it can have _ as separator for readability, it allows suffix of type like u8
// The primary situation in which you’d use isize or usize is when indexing some sort of collection.
// intefer overflow occurs when the value is too large or too small to store in the specified type
// of integer variable
// compiling in debug mode will cause the program to panic if there is integer overflow
// panic is when the program exits with an error; by default, when a panic occurs, the program starts unwinding, which means Rust walks back up the stack and cleans up the data from each function it encounters
// if we compile in release mode, Rust does not include checks for integer overflow that cause
// panics instead it will perform two's complement wrapping, i.e. 256 becomes 0, 257 becomes 1 and so on
// there are various methods that can be used for handling integer overflow

// floating-point types: f32, f64
// f32 is single precision and f64 is double precision
// default is f64 because on modern CPUs it’s roughly the same speed as f32 but is capable of more precision
// floating-point numbers are represented according to the IEEE-754 standard

// numeric operations
// addition, subtraction, multiplication, division, remainder
// +, -, *, /, %

// boolean type: bool
// two possible values: true and false
// one byte in size

// character type: char
// char literals are specified with single quotes, as opposed to string literals, which use double quotes
// char literals are four bytes in size and represent a Unicode Scalar Value, which means they can represent a lot more than just ASCII
// Unicode Scalar Values range from U+0000 to U+D7FF and U+E000 to U+10FFFF inclusive

// snake case not_floored camel case notFloored
fn main() {
    // scalars

    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // Results in 0 as these are integers hence floored
    let not_floored = 2 as f32 / 3 as f32; // Results in 0.6666666666666666

    // remainder
    let remainder: u32 = 43 % 5;
    let check: bool = true;

    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';

    // compound types

    let tup: (i32, f64, u8) = (500, 6.4, 1); // tuple
    let (x, y, z) = tup; // destructuring
    println!("{x}, {y}, {z}");
    println!("{}, {}, {}", tup.0, tup.1, tup.2); // accessing tuple elements using dot notation // 500, 6.4, 1
}

/*
compound types: tuples and arrays
comopund types can group multiple values into one type

tuple type: a general way of grouping together a number of values with a variety of types into one compound type
tuples have a fixed length: once declared, they cannot grow or shrink in size
in code
The variable tup binds to the entire tuple, because a tuple is considered a single compound element.
To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value
This is called destructuring, because it breaks the single tuple into three parts.
comparing xyz with each tup element is pattern matching and it is used to destructure a tuple value
accessing tuple elements using dot notation according to their index
The tuple without any values has a special name, unit. This value and its corresponding type are both written () and represent an empty value or an empty return type. Expressions implicitly return the unit value if they don’t return any other value.
 */
