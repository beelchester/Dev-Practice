package iteration

import (
	"fmt"
	"testing"
)

func TestIteration(t *testing.T){
    repeated := Repeat("a", 5)
    expected := "aaaaa"

    if repeated != expected {
        t.Errorf("expected %v but got %q", expected, repeated) // %q is used for strings, can just use %v for any type too
    }
}

func BenchmarkIteration (b *testing.B){ // b is a pointer to a benchmark object
    for i:=0; i<b.N; i++ { // b.N is the number of times the benchmark function is run
        Repeat("a", 1000)
    }
}

// go test -bench=. // run all benchmarks
// 86 ns/op // 86 nanoseconds per operation, time taken to run function
// benchmarks are run sequentially, not in parallel by default

func ExampleIteration (){
    repeated := Repeat("a", 10)
    fmt.Println(repeated)
    // Output: aaaaaaaaaa
}
