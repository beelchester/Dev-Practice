package iteration

func Repeat (character string, times int) string {
    // return "" //fail
    // return "aaaaa" //pass but not good
    // var repeated string = "" // explicit type
    repeated := "" // implicit type, type inference, short declaration
    for i:=0; i<times; i++ {
        repeated += character // Add AND operator
    }
    return repeated
}
