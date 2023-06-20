package main

import "testing"

// func TestHello(t *testing.T){ // t is a test handler
//     got := Hello()
//     want := "Hello, World!"
//
//     if got != want {
//         t.Errorf("got %q want %q", got, want)
//     }
// }

// func TestHello (t *testing.T){
//     got := Hello("Chris")
//     want := "Hello, Chris"
//
//     if got != want {
//         t.Errorf("got %q want %q", got, want)
//     }
// }

/*
    test should be in same folder as the code
    function name must start with Test
    takes one argument only t *testing.T
    t.Errorf() prints error message
*/

// hello function returning "Hello, World!" if empty string is passed else "Hello, <name>"

func  TestHello(t *testing.T){
    t.Run("saying hello to people", func(t *testing.T){
        got := Hello("Chris","")
        want := "Hello, Chris"

        // if got != want {
        //     t.Errorf("got %q want %q", got, want)
        // }
        assertCorrectMessage(t, got, want)
    })
    t.Run("say 'Hello, World!' when an empty string is supplied", func(t *testing.T){
        got := Hello("", "")
        want := "Hello, World!"

        // if got != want {
        //     t.Errorf("got %q want %q", got, want)
        // }
        assertCorrectMessage(t, got, want)
    })
    t.Run("in Spanish", func(t *testing.T) {
        got := Hello("Elodie", "Spanish")
        want := "Hola, Elodie"
		assertCorrectMessage(t, got, want)
    })

    t.Run("in french", func(t *testing.T) {
        got := Hello("David", "French")
        want := "Bonjour, David"
		assertCorrectMessage(t, got, want)
    })
}

// refactoring ... adding helper function to reduce duplication, increase readability

func assertCorrectMessage(t testing.TB, got, want string){ // helper function
    // TB is an interface that *testing.T and *testing.B both satisfy
    // .B is for benchmarking, .T is for normal tests
    t.Helper() // tells the test suite that this method is a helper method
    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}

/*
Loop:

Write a test
Make the compiler pass  
Run the test, see that it fails and check the error message is meaningful
Write enough code to make the test pass
refactor
*/

/* TDD process
Write a failing test and see it fail so we know we have written a relevant test for our requirements and seen that it produces an easy to understand description of the failure
Write the smallest amount of code to make it pass so we know we have working software
Then refactor, backed with safety of our tests so we know we have well-crafted code that is easy to work with
*/



