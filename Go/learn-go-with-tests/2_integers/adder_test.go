package integers

import "testing"
import "fmt"

func TestAdder(t *testing.T){
    sum := Add(2,2)
    expected := 4

    if sum != expected {
        t.Errorf("expected '%d' but got '%d'", expected, sum) // %d is used for integers, can just use %v for any type too
    }
}

func ExampleAdd() { // example function, this will be shown in godoc documentation, this represents a test case example
	sum := Add(1, 5)
	fmt.Println(sum)
	// Output: 6 
}

// Output: 6 comment is necessary to execute the example function or else it will just get compiled but not executed
// example function are used to document the code, run go test -v to see the example function output along with the test cases

// godoc -http=localhost:6060 // to run godoc server // http://localhost:6060/pkg/ // to see the documentation
// If you publish your code with examples to a public URL, you can share the documentation of your code at pkg.go.dev.

