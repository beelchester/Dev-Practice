package arraysslices

// func SumAll (x,y [] int) ([] int) {
//     sumX := 0
//     sumY := 0
//     for _,num := range x {
//         sumX += num
//         }
//     for _,num := range y {
//         sumY += num
//         }
//     sum :=[] int {sumX,sumY}
//         return sum
//     }

// func SumAll (numbersToSum ...[]int) []int { // variadic parameter, allows multiples arguments of same type, here multiple slices of type int
//     
//     lengthOfNumbers := len(numbersToSum)
//
//     sums := make([]int, lengthOfNumbers) // creates an empty slice with 0 of starting capacity lengthOfNumbers
//
//     for i, numbers := range numbersToSum {
//         sums[i] = Sum(numbers)
//     }
//
//     return sums
// }

func SumAll (numbersToSum ...[]int) []int {
    var sums[] int
    for _,numbers := range numbersToSum {
        sums = append(sums, Sum(numbers)) // func append(slice []Type, elems ...Type) []Type
    }
    return sums
}

func SumAllTails(numbersToSum ...[] int) ([]int) {

    var sums[]int
    for _,numbers := range numbersToSum {
        if len(numbers) == 0 {
            sums = append(sums, 0)

        } else {
            tail := numbers[1:]
            sums = append(sums, Sum(tail))
        }
    }
    return sums
}
