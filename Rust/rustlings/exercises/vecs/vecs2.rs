// vecs2.rs
// A Vec of even numbers is given. Your task is to complete the loop
// so that each number in the Vec is multiplied by 2.
//
// Make me pass the test!
//
// Execute `rustlings hint vecs2` or use the `hint` watch subcommand for a hint.

fn vec_loop(mut v: Vec<i32>) -> Vec<i32> {
    for i in v.iter_mut() {
        // iter_mut() provides a mutable reference to each element in the vector
        // TODO: Fill this up so that each element in the Vec `v` is
        // multiplied by 2.
        *i *= 2; // dereference is used here because i is a reference to the value in the vector
    }

    // At this point, `v` should be equal to [4, 8, 12, 16, 20].
    v
}

fn vec_map(v: &Vec<i32>) -> Vec<i32> {
    v.iter()
        .map(|num| {
            // |num| is a closure that takes a reference to each element in the vector,
            // map is an iterator adaptor that applies the closure to each element in the vector

            // TODO: Do the same thing as above - but instead of mutating the
            // Vec, you can just return the new number!
            *num * 2 // as we are not mutating the vector, we can just return the new multiplied
                     // value which will be collected into a new vector by collect()
        })
        .collect() // collect() is an iterator adaptor that collects the results of the iterator
                   // into a collection
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_vec_loop() {
        let v: Vec<i32> = (1..).filter(|x| x % 2 == 0).take(5).collect(); // [2, 4, 6, 8, 10]
        let ans = vec_loop(v.clone());

        assert_eq!(ans, v.iter().map(|x| x * 2).collect::<Vec<i32>>());
    }

    #[test]
    fn test_vec_map() {
        let v: Vec<i32> = (1..).filter(|x| x % 2 == 0).take(5).collect();
        let ans = vec_map(&v);

        assert_eq!(ans, v.iter().map(|x| x * 2).collect::<Vec<i32>>());
    }
}
