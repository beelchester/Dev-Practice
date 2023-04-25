fn main() {
    println!("Hello, world!");
}

// cargo new ch1
// cargo new ch1 --vcs=git // to initialize git
// cd ch1
// cargo run

// else main.rs file
// rustc main.rs to compile
// ./main to run

// using cargo to build and run is better and also rust_analyzer need cargo.toml file

// Every rust program must contain main function, it is entry point of program

// cargo is rust package manager and build system
// cargo.toml is manifest file, it is configuration file for cargo, it is like package.json
// cargo build to build
// build files are stored in target/debug
// cargo check to make sure code compiles without building executable, much faster than building
// cargo build --release to build for release, it will be stored in target/release
// plugin cargo-watch can be used to watch for changes and re-execute the binary
