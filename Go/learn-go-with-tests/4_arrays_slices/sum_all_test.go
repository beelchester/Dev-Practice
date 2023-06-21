package arraysslices

import (
	"reflect"
	"testing"
)

func TestSumAll(t *testing.T){

    got := SumAll([] int {1,2}, [] int {0,9})
    want := []int{3,9}

    // if got != want { // invalid operation: got != want (slice can only be compared to nil)
    // Go does not let you use equality operators with slices
    if !reflect.DeepEqual(got, want){ // reflect.DeepEqual is not type safe it will even compare different types

        t.Errorf("got %d want %d", got, want)
    }
}

func TestSumAllTails(t *testing.T) {

	checkSums := func(t testing.TB, got, want []int) {
		t.Helper()
		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v want %v", got, want)
		}
	}

	t.Run("make the sums of tails of", func(t *testing.T) {
		got := SumAllTails([]int{1, 2}, []int{0, 9})
		want := []int{2, 9}
		checkSums(t, got, want)
	})

	t.Run("safely sum empty slices", func(t *testing.T) {
		got := SumAllTails([]int{}, []int{3, 4, 5})
		want := []int{0, 9}
		checkSums(t, got, want)
	})
}

// we could have simply created a function called checkSums but here were are assigning funcion to variable as functions are values too
