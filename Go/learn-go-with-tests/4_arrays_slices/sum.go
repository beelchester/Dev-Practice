package arraysslices



// func Sum(num [5]int) (int) {
func Sum(num []int) (int) {
    sum := 0
    // for i := 0; i < len(num); i++ {
    //    sum += num[i] 
    // }

    // for index,number := range num {
    for _,number := range num {
        sum += number
    }

    return sum
}
