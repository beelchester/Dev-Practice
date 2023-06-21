package arraysslices

import "testing"

func TestSum(t *testing.T){

    t.Run("collection of 5 size", func(t *testing.T){
        // numbers := [5] int {1,2,3,4,5} // array of fixed size 5

        numbers := [] int {1,2,3,4,5}

        got := Sum(numbers)
        want := 15

        if got != want {
            t.Errorf("got %d want %d given, %v", got,want,numbers)
        }
    })

    t.Run("collection of any size", func(t *testing.T){
        numbers := [] int {1,2,3}

        got := Sum(numbers)
        want := 6

        if got != want {
            t.Errorf("got %d want %d, value %v", got, want, numbers)
        }
    })
}

/*
    Now, here having two separate tests is unnecessary cause we are using slice anyway so it adds overhead when we have lot of tests.

    go test -cover

    testing toolkit, coverage tool
    coverage tool can help identify areas of your code not covered by tests
    TDD -> close to 100% coverage

    on removing second test here it still shows 100% coverage
*/

