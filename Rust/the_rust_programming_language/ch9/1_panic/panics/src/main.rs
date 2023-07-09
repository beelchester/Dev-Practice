fn main() {
    // panic!("crash and burn"); // will crash the program and print the message

    // using a panic! Backtrace

    let v = vec![1, 2, 3];
    v[99]; // will cause a panic and print the backtrace
           // In C accessing invalid index is undefined behaviour it will return anything available
           // at that memory location which is a security risk. It is called buffer overread, a type of buffer overflow
           // which involves reading data from memory locations that are outside of the memory buffer.

    // A backtrace is a list of all the functions that have been called to get to this point of
    // panicking. Backtraces are very useful for debugging because they show the exact lines of
    // code that led to the error.
    // the key to reading the backtrace is to start from the top and read until you see files you wrote
    // RUST_BACKTRACE=1 cargo run
}

/*
Rust groups errors in two major categories: recoverable and unrecoverable errors.
   Result<T,E> handles recoverable errors
   panic! macro handles unrecoverable errors

Recoverable errors are those that are expected and can be handled. For example, if a file is not found, the program can create the file instead of crashing.
Unrecoverable errors are those that are unexpected and cannot be handled. For example, if a program tries to access an index in an array that is out of bounds, the program should crash because this is a bug.

Most programming languages has exceptions to handle errors. Rust does not have exceptions.

A code can cause panic or we can explicitly call the panic! macro to trigger a panic.

By default, these panics will print a failure message, unwind, clean up the stack, and quit. Via an environment variable, you can also have Rust display the call stack when a panic occurs to make it easier to track down the source of the panic.

Unwinding and cleaning up the stack takes time so if you want you can skip it and immediately abort the program without running cleanup code. to do this add in Cargo.toml:
[profile.release]
panic = 'abort'

it will abort in release mode but not in debug mode.
*/
