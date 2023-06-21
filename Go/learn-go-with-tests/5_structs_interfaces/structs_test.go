
package structsinterfaces

import "testing"

func TestPerimeter(t *testing.T) {
    // got := Perimeter(10.0, 10.0)
    got := Perimeter(Rectangle{10.0, 10.0})
    want := 40.0
    if got != want {
        t.Errorf("got %.2f, want %.2f", got, want) // %f is a placeholder for a float, while %.2f tells Go to format the float to 2 decimal places
    }
}

// func TestArea(t *testing.T) {
//
// 	t.Run("rectangles", func(t *testing.T) {
// 		rectangle := Rectangle{12, 6}
// 		// got := Area(rectangle)
//         got := rectangle.Area()
// 		want := 72.0
//
// 		if got != want {
// 			t.Errorf("got %g want %g", got, want)
// 		}
// 	})
//
// 	t.Run("circles", func(t *testing.T) {
// 		circle := Circle{10}
// 		// got := Area(circle)
//         got := circle.Area()
// 		want := 314.1592653589793
//
// 		if got != want {
// 			t.Errorf("got %g want %g", got, want)
// 		}
// 	})
//
// }
//
// func TestArea(t *testing.T) {
//
// 	checkArea := func(t testing.TB, shape Shape, want float64) {
// 		t.Helper()
// 		got := shape.Area()
// 		if got != want {
// 			t.Errorf("got %g want %g", got, want)
// 		}
// 	}
//
// 	t.Run("rectangles", func(t *testing.T) {
// 		rectangle := Rectangle{12, 6}
// 		checkArea(t, rectangle, 72.0)
// 	})
//
// 	t.Run("circles", func(t *testing.T) {
// 		circle := Circle{10}
// 		checkArea(t, circle, 314.1592653589793)
// 	})
//
// }

// Table driven tests, where we can define a list of test cases that can be tested in a loop

// func TestArea(t *testing.T) {
//
//     areaTests := []struct { // anonymous struct, where we define the fields of the struct inline 
//         shape Shape // we used Shape interface as the type of the field, so we can use both Rectangle and Circle structs
//         want  float64
//     }{
//         {Rectangle{12, 6}, 72.0},
//         {Circle{10}, 314.1592653589793},
//         {Triangle{12, 6}, 36.0},
//         /* 
//         optionally, we can name the fields of the structs 
//         {shape: Rectangle{width: 12, height: 6}, want: 72.0},
//         {shape: Circle{Radius: 10}, want: 314.1592653589793},
//         {shape: Triangle{Base: 12, height: 6}, want: 36.0},
//         */
//     }
//
//     for _, tt := range areaTests { // tt is the test case
//         got := tt.shape.Area()
//         if got != tt.want {
//             t.Errorf("got %g want %g", got, tt.want)    
//         }
//     }
// }

// advantages of table driven tests:
// - you can add more test cases without writing more code
// - easy to find bugs in test cases

// They are a great fit when you wish to test various implementations of an interface, or if the data being passed in to a function has lots of different requirements that need testing.

func TestArea(t *testing.T) {

	areaTests := []struct {
		name    string
		shape   Shape
		hasArea float64
	}{
		{name: "Rectangle", shape: Rectangle{width: 12, height: 6}, hasArea: 72.0},
		{name: "Circle", shape: Circle{radius: 10}, hasArea: 314.1592653589793},
		{name: "Triangle", shape: Triangle{base: 12, height: 6}, hasArea: 36.0},
	}

	for _, tt := range areaTests {
		// using tt.name from the case to use it as the `t.Run` test name
		t.Run(tt.name, func(t *testing.T) {
			got := tt.shape.Area()
			if got != tt.hasArea {
				t.Errorf("%#v got %g want %g", tt.shape, got, tt.hasArea) // # in %#v will print out the particular shape in the error message
			}
		})

	}

}
