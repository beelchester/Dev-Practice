fn main() {
    let m1 = String::from("Hello");
    let m2 = String::from("World");
    // greet1(m1, m2);
    // println!("{} {}", m1, m2); // error: value borrowed here after move, i.e. m1,m2 are moved to
    // greet(), greet() takes ownership of m1,m2 and also drops them
    // after execution
    // to fix this we can destructure the tuple returned by greet()
    // let (md1, md2) = greet2(m1, m2);
    // println!("{} {}", md1, md2); // this works
    // but this method is inconvenient, so we can use references/borrowing instead
    greet3(&m1, &m2); // &m1, &m2 are references to m1,m2, it is a kind of a pointer to m1,m2,
                      // referencing and borrowing are the same thing
                      // Creating a reference is known as borrowing in Rust.
    println!("{} {}", m1, m2); // this works because greet3() borrows m1,m2 instead of taking
                               // ownership, i.e. it borrows the values of m1,m2 instead of moving,
                               // we can say it temporarily gets the ownership of m1,m2
                               // for the duration of its execution only, i.e. for its scope
                               // after execution, m1,m2 are still valid, it is not dropped from
                               // heap memory
                               // in short, greet temporarily has access to m1,m2
                               /*
                               Rules of Borrowing/Rules of References:
                               1. References are immutable by default (check greet 3)
                               2. You can have only one mutable reference to a particular piece of data in a particular scope , it prevents data races (race condition)
                               3. You can have as many immutable references as you want in a particular scope
                               4. You cannot have mutable references while you have immutable references in a particular scope already
                               5. References must always be valid, i.e. they must always point to some data

                               These rules are validated at compile time by the borrow checker.


                                                           */
    //rule 1 to make mutable references, we use &mut
    let mut m3 = String::from("Hello");
    greet4(&mut m3);

    let mut s = String::from("hello");
    // let r1 = &mut s;
    // let r2 = &mut s; // rule 2

    // println!("{r1}{r2}");
    let i1 = &s;
    let i2 = &s; // rule 3
                 // let i3 = &mut s; // rule 4
                 // println!("{}{}{}", i1, i2, i3);
    println!("{}{}", i1, i2); // scope for i1,i2 ends here

    let i3 = &mut s; // possible because scope for i1,i2 ended above already
    println!("{}", i3);

    // dangling References
    // let reference_to_nothing = dangle(); // rule 5

    /*
    dereferencing : getting the value of a reference by using * (asterisk)
     */

    let mut x = Box::new(1); // x is a Box pointer to a heap memory location containing 1
    let a = *x; // a is 1, *x dereferences x, i.e. gets the value of x

    let r1 = &x; // r1 is a reference to x, and x in return is a Box pointer to a heap memory location containing 1
    let b = **r1; // b is 1, **r1 dereferences r1, i.e. gets the value of r1, which is a reference to x, and x in return is a Box pointer to a heap memory location containing 1

    let r2 = &*x; // r2 is a reference to *x, i.e. r2 is a reference to 1
    let c = *r2; // c is 1, *r2 dereferences r2, i.e. gets the value of r2, which is a reference to 1

    // x is in stack, 1 is in heap

    // such dereference operations are not comman instead we use method or dot operator

    let x: Box<i32> = Box::new(-1);
    let x_abs1 = i32::abs(*x); // explicit dereference
    let x_abs2 = x.abs(); // implicit dereference
    assert_eq!(x_abs1, x_abs2);
    // abs means absolute value of a number

    let r: &Box<i32> = &x;
    let r_abs1 = i32::abs(**r); // explicit dereference (twice)
    let r_abs2 = r.abs(); // implicit dereference (twice), automatically done by the compiler to
                          // derefer twice
    assert_eq!(r_abs1, r_abs2);

    let s = String::from("Hello");
    let s_len1 = str::len(&s); // explicit reference
    let s_len2 = s.len(); // implicit reference
    assert_eq!(s_len1, s_len2);
}

// fn dangle() -> &String {
//     let s = String::from("hello");
//     &s // it returns reference to s which is dropped from heap memory after execution
//        // so it is a dangling reference
// }

fn greet1(msg1: String, msg2: String) {
    println!("{} {}", msg1, msg2);
}

fn greet2(msg1: String, msg2: String) -> (String, String) {
    println!("{} {}", msg1, msg2);
    (msg1, msg2)
}

fn greet3(msg1: &String, msg2: &String) {
    // &String is a reference to a String
    // it does not take ownership of values
    println!("{} {}", msg1, msg2);
    // rule 1: references are immutable by default
    // msg1.push('A');
}

fn greet4(msg1: &mut String) {
    // &mut String is a mutable reference to a String
    println!("{}", msg1);
    msg1.push('A');
}
