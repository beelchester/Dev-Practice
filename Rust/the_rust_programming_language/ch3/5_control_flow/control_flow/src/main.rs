fn main() {
    let num = 3;

    if num < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    let num2 = 6;

    if num2 % 4 == 0 {
        println!("num2 is divisible by 4");
    } else if num2 % 3 == 0 {
        println!("num2 is divisible by 3"); // true so it will not even check furthur
    } else if num2 % 2 == 0 {
        println!("num2 is divisible by 2");
    } else {
        println!("num2 is not divisible by 4, 3, or 2");
    }
    let condition = true;
    let cond = if condition { 10 } else { 20 };
    // here else is mandatory
    println!("cond is {}", cond);
    // let number = if condition { 10 } else { "ten" }; // error: if and else have incompatible types
    // as the type of cond2 is depends on the type of the arms of the if expression so the type of the arms must be same

    // loops

    // loop {
    // println!("again!"); // infinite loop
    // }
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2; // 20
        }
    };
    println!("The result is {}", result);

    let mut count = 0;
    'counting_up: loop {
        let mut remaining = 10;

        //inner loop
        loop {
            println!("remaining is {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }
        count += 1;
    }
    //The outer loop has the label 'counting_up, and it will count up from 0 to 2. The inner loop without a label counts down from 10 to 9. The first break that doesn’t specify a label will exit the inner loop only. The break 'counting_up; statement will exit the outer loop.

    //while loop

    let mut test_number = 3;

    while test_number != 0 {
        println!("{}", test_number);
        test_number -= 1;
    }
    println!("out of the while loop");

    // for loop
    // looping through a collection like array
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("the value is {}", a[index]);
        index += 1;
    }
    // this is error prone as if we dont mention the index condition properly, it will cause panic,
    // like if we mention index < 6, it will cause panic as the array has only 5 elements
    // so we can use for loop, it is more concise and automatically checks for the index bounds
    // safe and less error prone
    for element in a {
        println!("the for loop value is {}", element);
    }
    // countdown example using for loop

    for num in (1..4).rev() {
        // 1..4 is a range, 1 to 3, 4 is excluded
        println!("{}!", num);
    }
}

/*
control flow: ability to run some code conditionally or repeatedly
if expressions and loops
the block of  code to be executed after the condition is wrapped in curly brackets {} and is called arms of the if expression just like arms in match used in ch2
else statement is optional and if not provided and the condition is false, the program will just skip the if block and move to the next statement
the condition must be a bool
rust will not automatically try to convert non-boolean types to a boolean, so give a boolean expression explicitly

else if: multiple conditions can be checked using else if
if multiple conditions are true, the first block of code that matches will be executed and the rest will be ignored
else if can cause clutter, so when you have many conditions, match expression is better in rust

if can be used in let also

Knowing the type of number (check commented number variable) lets the compiler verify the type is valid everywhere we use number. Rust wouldn’t be able to do that if the type of number was only determined at runtime; the compiler would be more complex and would make fewer guarantees about the code if it had to keep track of multiple hypothetical types for any variable.

loops

The loop keyword tells Rust to execute a block of code over and over again forever or until you explicitly tell it to stop.

break statement can be used to stop the loop
continue statement can be used to skip the rest of the iteration and start a new one
loops can also return values using break
If you have loops within loops, break and continue apply to the innermost loop at that point.
loop labels can be used to break or continue the outer loop from the inner loop

evaluating within the loop and breaking if some condition can be done using loop, if, else and break, instead of this while loop can also be used

safety and conciseness of for loop makes it most used loop in rust
*/
