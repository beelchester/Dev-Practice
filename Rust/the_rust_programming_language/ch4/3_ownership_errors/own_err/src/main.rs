fn main() {
    // do not return reference to local variable from function as it will be dropped after the
    // function call, so the reference will be pointing to nothing
    // return directly the value instead of reference
    // ------------------------------------------------------------
    // let mut name = String::from("John");

    // fn join(mut name: String) {
    //     // owning in function if unnecessary, dont use to avoid such
    //     // conditions , It is very rare for Rust functions to take ownership of heap-owning data structures like Vec and String
    //     name.push_str(" Doe");
    // }
    // join(name);
    // println!("{}", name);
    // ------------------------------------------------------------

    // let mut name = String::from("John");
    //
    // fn join(name: &mut String) -> String {
    //     name.push_str(" Doe");
    //     name.to_string()
    // }
    // let new = join(&mut name);
    // println!("{}", new); // John Doe
    // println!("{}", name); // John Doe

    // this is fine but it mutates the orginal name value, suppose we dont want to mutate the
    // original value using immutable reference and then cloning the value is the best way to do
    // it. note that we are only taking immutable reference here not the ownership so we keep
    // ownership of the value with the original variable name and clone (deep copy) the value to
    // another variable which the function will return
    // This is the ideal solution if we dont want to mess with original value

    let name = String::from("John");

    fn join(name: &String) -> String {
        let mut new = name.clone();
        new.push_str(" Doe");
        new
    }

    let new = join(&name);
    println!("{}", new); // John Doe
    println!("{}", name); // John

    // ------------------------------------------------------------
    // new example

    // here's a function that gets a reference to the largest string in a vector, and then uses it while mutating the vector

    // fn add_big_strings(dst: &mut Vec<String>, src: &[String]) {
    //     let largest: &String = dst.iter().max_by_key(|s| s.len()).unwrap(); // 1
    //     for s in src {
    //         if s.len() > largest.len() {
    //             dst.push(s.clone()); //2
    //         }
    //     }
    // }

    // at 1 the write permision from dst is removed as it, while at 2 write permission is required
    // unsafe because Because dst.push(..) could deallocate the contents of dst, invalidating the reference largest.

    // To fix the program, the key insight is that we need to shorten the lifetime of largest to not overlap with dst.push(..). One possibility is to clone largest
    fn add_big_strings(dst: &mut Vec<String>, src: &[String]) {
        let largest: String = dst.iter().max_by_key(|s| s.len()).unwrap().clone();
        for s in src {
            if s.len() > largest.len() {
                dst.push(s.clone());
            }
        }
    }
    // this is possible but not performant as we are cloning the largest string which is not needed

    // here's the ideal solution
    // copy out the length of largest, since we don't actually need the contents of largest, just its length.
    fn add_big_strings1(dst: &mut Vec<String>, src: &[String]) {
        let largest_len: usize = dst.iter().max_by_key(|s| s.len()).unwrap().len();
        for s in src {
            if s.len() > largest_len {
                dst.push(s.clone());
            }
        }
    }

    // ------------------------------------------------------------
    // another example

    let v: Vec<i32> = vec![0, 1, 2];
    let n_ref: &i32 = &v[0];
    let n: i32 = *n_ref;

    let v: Vec<String> = vec![String::from("Hello world")];
    let s_ref: &String = &v[0];
    // let s: String = *s_ref; // error because String does not implement Copy trait while i32 does

    // The issue is that the vector v owns the string "Hello world". When we dereference s_ref, that tries to take ownership of the string from the vector. But references are non-owning pointers — we can't take ownership through a reference. Therefore Rust complains that we "cannot move out of [...] a shared reference".
    // s_ref is just a reference but s is trying to get the ownership using s_ref which is not possible

    // this is unsafe because if s had ownership and when it gets dropped it will drop the
    // value too which will make s_ref a dangling pointer

    // Rust says that the type i32 implements the Copy trait, while String does not implement Copy
    // if a value does not own heap data, then it can be copied without a move
    // exception : mutable reference
    // ex:
    let mut n = 0;
    let a = &mut n;
    let b = a;
    // &mut i32 is not a copyable type
    //  a cannot be used after being assigned to b. That prevents two mutable references to the same data from being used at the same time.

    //  to solve the above problem we can avoid ownership as we dont need it
    let v: Vec<String> = vec![String::from("Hello world")];
    let s_ref: &String = &v[0];
    println!("{s_ref}!");

    // another solution, if ownership is required make a clone of the value
    let v: Vec<String> = vec![String::from("Hello world")];
    let mut s: String = v[0].clone();
    s.push('!');
    println!("{s}");

    // another solution use Vec::remove to move string out of the vector
    let mut v: Vec<String> = vec![String::from("Hello world")];
    let mut s: String = v.remove(0);
    s.push('!');
    s.push('!');
    println!("{s}");

    // Fixing a Safe Program: Mutating Different Tuple Fields

    let mut name = (String::from("Ferris"), String::from("Rustacean"));
    let first = &name.0; // removes W+O permission from name.0 and name but not from name.1
                         // let first = &mut name; // error because it removes W+O permission from name.0 and name.1 and
                         // name
    name.1.push_str(", Esq.");
    println!("{first} {}", name.1);

    // logically same as above but using function

    fn get_first(name: &(String, String)) -> &String {
        &name.0
    }

    let mut name = (String::from("Ferris"), String::from("Rustacean"));
    // let first = get_first(&name); // here we are directly taking immutable reference of name
    //                               // not name.0 so W+O permissions are removed from name,
    //                               // name.0 and name.1 so we cannot mutate name.1. rust thinks
    //                               that name.1 might also get mutated in the function, it doesnt
    //                               understand the intent of the function
    // name.1.push_str(", Esq."); //
    // println!("{first} {}", name.1);

    // to fix this we can take immutable reference of name.0

    let first = get_first_new(&name.0);

    fn get_first_new(name: &String) -> &String {
        name
    }

    // for arrays (safe program)

    let mut a = [0, 1, 2, 3];
    let x = &mut a[0];
    // let y = &a[1]; // error because creating reference to a[0] means we cannot create reference to a[1]
    // as it might be mutated through a[0], atleast thats what rust thinks even if it is not true

    // println!("{x},{y}");

    // to fix solve this we can use unsafe code by ourselves which are raw pointers, but we should
    // not do that unless we are sure that it is safe to use. In our scenario we can use
    // split_first_mut function (which uses unsafe blocks to implement)

    let mut a = [0, 1, 2, 3];
    let (x, rest) = a.split_first_mut().unwrap();
    let y = &rest[0];
    println!("{x},{y}");
}
