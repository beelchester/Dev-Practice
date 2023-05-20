fn main() {
    // read(x); // unsafe as x is not initialized
    let x = true;
    read(x); // safe
    let a = Box::new([0; 100]);
    let b = a;
    // println!("{:?}", a); // unsafe as a is freed and b is pointing to freed memory // at this
    // point ownership of heap memory is moved from a to b but a might still
    // be pointing to it, still we cannot access it, and if we modify it using
    // ex: is b was string b.push_str(" Jr.");
    // b who is the owner now and if modification is of push then it will
    // create new memory location with more space write the new value to it
    // and delete the old memory location, but a was still pointing to old and
    // now it is pointing to a freed memory (deallocated) location, so it is unsafe if we try to
    // access it, so to
    // avoid it all together rust does not allow to access a after it is moved
}

fn read(x: bool) {
    if x {
        println!("x is true");
    }
}

fn main1() {
    let first = String::from("Ferris");
    let full = add_suffix1(first);
    // println!("{full}, originally {first}"); // unsafe as first is moved to full
}

fn add_suffix1(mut name: String) -> String {
    name.push_str(" Jr.");
    name
}

// One way to avoid moving data is to clone it using the .clone() method. For example, we can
// fix the safety issue with clone and still have first

fn main2() {
    let first = String::from("Ferris");
    let first_clone = first.clone();
    let full = add_suffix2(first_clone);
    println!("{full}, originally {first}");
}

fn add_suffix2(mut name: String) -> String {
    name.push_str(" Jr.");
    name
}
//Observe that at L1, first_clone did not "shallow" copy the pointer in first, but instead "deep" copied the string data into a new heap allocation. Therefore at L2, while first_clone has been moved and invalidated by add_suffix, the original first variable is unchanged. It is safe to continue using first.

/*

ownership is a discipline that Rust uses to manage memory. In short, it’s a set of rules that the compiler checks at compile time. This ensures the safety of rust

like the read function example in interpreted languages everytime an variable is read it checks if it is initialized or not, if not it raises error with an exception, this check at everytime costs performance
but in rust it is checked at compile time itself

unsafe code in assembly language will immediately cause undefined behaviour and crash the program

in the if expression if the condition is not bool if rust have not provided error at compile time, it will cause undefined behaviour and crash the program
these undefined behaviours are called memory safety bugs, these can include os level bugs like segmentation fault, buffer overflows, dangling pointers, etc. The code can also run without crashing and anyone noticing whats wrong it results in potential vulnerabilty if malicious actor creates the right input and gain access

Foundational goal of rust is to never have undefined behaviour i.e memory safety bugs
undefined behaviours are especially dangerous for low-level languages with direct memory access, a report states that around 70% of reported security vulnerabilty are causd by memory corruption

secondary goal is to prevent these undefined behaviours at compile time itself instead of runtime, this results in catching bugs at compile time instead of production and decreased runtime bug checks causing increase in performance.

rust cannot prevent all memory safety bugs, but it can prevent most of them unlike other languages which has less protection

In Rust, the ownership discipline is a key feature that provides memory safety and prevents common bugs that can arise from accessing memory incorrectly. The basic idea of ownership is that each piece of memory in a Rust program is owned by a single variable or data structure, and that ownership can be transferred between variables or structures using Rust's move semantics.

When a variable or data structure owns a piece of memory, it is responsible for managing that memory and ensuring that it is freed when it is no longer needed. This is done through Rust's automatic memory management system, which uses a technique called "RAII" (Resource Acquisition Is Initialization) to ensure that memory is freed when the owning variable or data structure goes out of scope.

The ownership discipline also provides other benefits, such as preventing data races and other forms of concurrency bugs. Because each piece of memory can only be accessed by a single owner at a time, it is not possible for multiple threads to access the same memory simultaneously and cause data races.

In addition, Rust's ownership discipline also enables efficient memory management and eliminates the need for garbage collection, which can improve the performance of Rust programs.

In rust, variables can live in frames (/stack frames). A frame is a mapping from variable names to values. When a function is called, a new frame is created and pushed onto the stack. When the function returns, the frame is popped off the stack and destroyed. This is called stack allocation.
popping off is called deallocation (or freeing or dropping) of the function's frame.
This sequence of frames is called a stack because the most recent frame added is always the next frame freed.


When an expression reads a variable, the variable's value is copied from its slot in the stack frame.
fn main() {
let a = 5;
let mut b = a;
b += 1;
}

The value of a is copied into b, and a is left unchanged, even after changing b.

Copying data can take up lot of memory.
To transfer access to data without copying rust has pointers. Pointer is a value that describes a location in memory. A common way to make pointer is to allocate memory in heap. Heap is a separate region of memory where data can live indefinitely i.e. it is not deallocated if any function is returned. It is no tied to any specific stack frame.

rust has a construct called Box which is a pointer to a heap allocated value. Box is used to put a value on the heap and return a pointer to it. Box is a smart pointer which is a pointer with additional metadata and capabilities.
fn main() {
let a = Box::new([0; 1_000_000]);
let b = a;
}

b copies the pointer to that heap allocated value. The value is not copied.

Rust does not permit manual memory management of allocating and deallocating memory. Instead, it uses a technique called "RAII" (Resource Acquisition Is Initialization) to ensure that memory is freed when the owning variable or data structure goes out of scope.
Stack frames are automatically managed by rust. When a function is called, Rust allocates a stack frame for the called function. When the call ends, Rust deallocates the stack frame.
If rust allowed manual memory management this could lead to potential bugs like if b pointer to heap memory is freed and after that accessing value of b's heap value would attempt to access invalid memory, which could cause the program to crash. Or worse, it could not crash and return arbitrary data. Therefore this program is unsafe.

Rust also automatically deallocate heap memory allocation
fn main() {
    let a_num = 4;
l1    make_and_drop(); l3
}

fn make_and_drop() {
    let a_box = Box::new(5); l2
}

At L1, before calling make_and_drop, the state of memory is just the stack frame for main. Then at L2, while calling make_and_drop, a_box points to 5 on the heap. Once make_and_drop is finished, Rust deallocates its stack frame. make_and_drop contains the variable a_box, so Rust also deallocates the heap data in a_box. Therefore the heap is empty at L3.
so it also deallocated heap memory allocation when stack function frame is deallocated when it goes out of scope (i.e when it returns).

Now in this example
let a = Box::new([0; 1_000_000]); l1
let b = a; l2

if the function containing this code returns i.e. goes of out scope then how would the heap memory be deallocated as it has two variables binded (pointing) at it. Will rust try to free box's heap memory twice? no, To avoid this concept of ownership is used.
at l1 the box is OWNED by a
at l2 the statement let b=a; MOVES the ownership of box from a to b
b owns the boxed array. Therefore when the scope ends, Rust deallocates the box only once on behalf of b, not a.

Box deallocation principle (fully correct): If a variable owns a box, when Rust deallocates the variable's frame, then Rust deallocates the box's heap memory.

A move is just a copy of the pointer (not data)

The point to note here is that ownership only exists at compile-time. During the actual execution of the program (run time), a move is just a copy operation, and there is no difference between the original variable and the moved variable in terms of their content or state. Rust ensures that the ownership rules are followed at compile-time, which in turn, guarantees memory safety during the execution of the program.

When a Box value is moved from one variable to another in Rust, the ownership of the heap-allocated memory is transferred to the new variable, but the memory location and contents of the Box value remain the same. Therefore, both the old and the new variable will point to the same heap-allocated memory until that memory is deallocated.

Collections Use Boxes
Boxes are used by Rust data structures1 like Vec, String, and HashMap to hold a variable number of elements.

main1 function execution
At L1, the string "Ferris" has been allocated on the heap. It is owned by first.
At L2, the function add_suffix(first) has been called. This moves ownership of the string from first to name. The string data is not copied, but the pointer to the data is copied.
At L3, the function name.push_str(" Jr.") resizes the string's heap allocation. This does three things. First, it creates a new larger allocation. Second, it writes "Ferris Jr." into the new allocation. Third, it frees the original heap memory. first now points to deallocated memory.
At L4, the frame for add_suffix is gone. This function returned name, transferring ownership of the string to full.

Ownership is primarily a discipline (set of rules) of heap management:

All heap data must be owned by exactly one variable.
Rust deallocates heap data once its owner goes out of scope.
Ownership can be transferred by moves, which happen on assignments and function calls.
Heap data can only be accessed through its current owner, not a previous owner.

 1 These data structures don't use the literal Box type. For example, String is implemented with Vec, and Vec is implemented with RawVec rather than Box. But types like RawVec are still box-like: they own memory in the heap.
2 In another sense, ownership is a discipline of pointer management. But we haven't described yet about how to create pointers to anywhere other than the heap. We'll get there in the next sectio

/
 */
