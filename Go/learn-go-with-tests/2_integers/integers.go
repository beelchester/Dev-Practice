package integers

// Add takes two integers and returns the sum of them
func Add(x, y int) int { // arguemnts of same type can be grouped
    // here we are not using named return value as it is a simple function
    // return 0 // try to fail the test purposefully first with smallest amount of code to check if it fails as expected
    // return 4  // this will pass the test, have more test cases to check if it works for other cases
    return x + y // works for all cases
}
