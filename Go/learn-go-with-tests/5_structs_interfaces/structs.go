package structsinterfaces

import "math"

// func Perimeter(width float64, height float64) float64 {
//     return 2 * (width + height)
// }
//
// func Area(width float64, height float64) float64 {
//     return width * height
// }

type Rectangle struct {
    width float64
    height float64
}

type Circle struct {
    radius float64
}

func Perimeter(rectangle Rectangle) float64 {
    return 2 * (rectangle.width + rectangle.height)
}

// func Area(rectangle Rectangle) float64 {
//     return rectangle.width * rectangle.height
// }

/*
Some programming languages allow you to do something like this:
func Area(circle Circle) float64       {}
func Area(rectangle Rectangle) float64 {}
but go does not allow this. Instead, we can use methods to achieve this.
like when we call t.Errorf we are calling the method Errorf on the instance of our t (testing.T)
methods are functions with receivers. They are similar to functions, but they are called by invoking them on an instance of a particular type.
*/

func (r Rectangle) Area() float64 { // (r Rectangle) is the receiver of the Area method, where r is the instance of the Rectangle struct (receiver name, receiver type)
    // convention to use the first letter of the type as the receiver name
    return r.width * r.height
}

func (c Circle) Area() float64 {
    return c.radius * c.radius * math.Pi
}
// here we can use interfaces to generalize the Area method for both Rectangle and Circle structs

type Shape interface { // an interface is a collection of methods
	Area() float64
}

// in go we dont need to explicitly say that a type implements an interface. If the type has the required methods with same types, it implicitly implements the interface

type Triangle struct {
    base float64
    height float64
}

func (t Triangle) Area() float64 {
    return (t.base * t.height) * 0.5
}
