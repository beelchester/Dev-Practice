fn main() {
    // more on borrow checker (validating rules of borrowing)
    let mut vec: Vec<i32> = vec![1, 2, 3];
    let num: &i32 = &vec[2];
    // vec.push(4); // cannot borrow `vec` as mutable because it is also borrowed as immutable
    // println!("Third element is {}", *num);
    // it returns error because we are trying to mutate vec while it is borrowed as immutable

    // why does it happen?

    // vectors have a capacity and to add a new element, it needs to be resized, so it
    // allocates a new memory location and copies the elements from the old memory location to
    // the new one, so the reference to the old memory location is invalid and cleaned, so we cannot use it

    // to prevent such things from happening immutable and mutable references are not allowed at the same time
    // i.e it prevents aliasing (immutable references pointing to the same memory location) and
    // modification(mutating) of the same memory location at the same time
    /*
             key notes:
            The borrow checker in Rust manages permissions on variables' data.
    Variables have three kinds of permissions: Read (R), Write (W), and Own (O).
    By default, variables have read/own permissions (RO) on their data.
    The let mut annotation grants write permission (W) to a variable.
    References can temporarily remove these permissions.
    The permissions are visualized using a diagram.
    When a variable is borrowed, it loses write and own permissions but retains read permission.
    Dereferencing a reference gains read permission.
    Paths lose permissions when they become unused.
    Permissions are defined on paths, which include variables, dereferences, array accesses, and fields.
    Some permissions are mutually exclusive.
    Unused references lose their permissions.
    Paths are anything put on left side of assignment, it can be a variable, a dereference, an array access or a field or combination of these.
              */
    let mut vec: Vec<i32> = vec![1, 2, 3]; // R+W+O permissions
    let num: &i32 = &vec[2]; // R+O permissions, vec's W+O permissions are removed // R permission for *num
    println!("Third element is {}", *num);
    // num and *num dropped, vec's R+W+O permissions are restored
    vec.push(4);
    // vec no longer in use so permissions are removed

    let x = 0; // R+O permissions
    let mut x_ref = &x; // R+W+O permissions, here +W means it can be assigned to another
                        // variable too, *x_ref has R permissions not W means it cant change x's value
                        /*
                           in the example on line 4 the borrow checker prevents us from using vec.push(4) before num, as at that time the permission of vec is only R while this push operation expects it to be R+W
                           hence error message says cannot borrow `vec` as mutable because it is also borrowed as immutable
                        */

    /*
           Mutable references
           immutable references are also called shared references
           mutable references are also called unique references
    */
    let mut vec: Vec<i32> = vec![1, 2, 3];
    let num: &mut i32 = &mut vec[2]; // mutable reference , same permissions as above but
                                     // now *num has W permissions too (R+W) and vec loses all its
                                     // permissions (R too)

    *num += 1; // mutating the value
    println!("Third element is {}", *num); // 4 , after this permissions for num and *num are dropped
    vec.push(4); // R+W+O permissions
    println!("vec is {:?}", vec); // [1, 2, 4, 4]

    // downgrading mutable reference to immutable reference i.e. to read only reference, removing W permission
    let mut vec: Vec<i32> = vec![1, 2, 3];
    let num: &mut i32 = &mut vec[2];
    let num2: &i32 = &*num; // num2 has R permissions not W, num also loses W permissions
    println!("{} {}", *num, *num2);

    // the duration/ code span a path has permissions is called its lifetime
    let mut x = 1;
    let y = &x; // y has R permissions, y lifetime starts here
    let z = *y; // y's permissions are dropped, y lifetime ends here
    x += z;

    // above lifetime is contiguous, but it can be non contiguous too i.e. it can be split into multiple parts
    // like in the control flow below
    fn ascii_capitalize(v: &mut Vec<char>) {
        let c = &v[0];
        if c.is_ascii_lowercase() {
            let up = c.to_ascii_uppercase();
            v[0] = up;
        } else {
            println!("Already capitalized: {:?}", v);
        }
    }
    /*
    The variable c has a different lifetime in each branch of the if-statement. In the then-block, c is used in the expression c.to_ascii_uppercase(). Therefore *v does not regain the W permission until after that line.

    However, in the else-block, c is not used. *v immediately regains the W permission on entry to the else-block.
     */

    // data must outlive all of its references / data must be valid for the entire lifetime of its
    // references / references must be valid for the entire lifetime / no dangling references
    // dangling references are references to invalid memory locations
    // when rust doesnt know the lifetime of a reference, it uses the flow permission to ensure that the reference is valid for the entire lifetime of the function

    fn first(strings: &Vec<String>) -> &String {
        let s_ref = &strings[0];
        return s_ref; // s_ref has R + F permissions
                      // this is safe function because it returns a reference to a valid memory location
                      // This snippet introduces a new kind of permission, the flow permission F. The F permission is expected whenever an expression uses an input reference (like &strings[0]), or returns an output reference (like return s_ref).
                      // the flow permission (F) is used to ensure that references created within a function remain valid and usable throughout their lifetime.
                      // F does not change throughout the body of a function. A reference has the F permission if it's allowed to be used (that is, to flow) in a particular expression
    }
}
