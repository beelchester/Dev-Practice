use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new(); // create a new empty hash map
    scores.insert(String::from("Blue"), 10); // insert a key-value pair into the hash map
    scores.insert(String::from("Yellow"), 50);
    // key: String value: i32

    let score = scores.get("Blue"); // get a value from the hash map, it returns an Option<&V>
    println!("score is {:?}", score); // score is Some(10)
    println!("score is {}", score.unwrap()); // score is 10

    let team_name = String::from("Yellow");
    let score = scores.get(&team_name).copied().unwrap_or(0); // copied() returns a copy of the value, if it exists
                                                              // unwrap_or() returns the value if
                                                              // it exists, else returns the
                                                              // default value passed to it, here 0
    println!("score is {}", score); // score is 50

    for (key, value) in &scores {
        println!("{key}: {value}");
    }
    // arbitrary order, meaning any order
    // Blue: 10
    // Yellow: 50

    // ----------------------------
    // For types that implement the Copy trait, like i32, the values are copied into the hash map. For owned values like String, the values will be moved and the hash map will be the owner of those values, as demonstrated in Listing 8-22.

    let field_name = String::from("Favorite color");
    let field_value = String::from("Blue");
    // let field_value = 10; // i32

    let mut map = HashMap::new();
    map.insert(field_name, field_value);
    // field_name and field_value are invalid at this point, try using them and
    // see what compiler error you get!
    // println!("{}", field_value); // valid if field_value is of type i32 as it follows copy trait
    // but no string

    // ----------------------------
    // Updating a Hash Map
    // Overwriting a Value

    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Blue"), 25);

    println!("{:?}", scores); // {"Blue": 25}

    // Adding a key or value only if key isnt present

    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);

    scores.entry(String::from("Yellow")).or_insert(50); // if Yellow key is not present, create a new key-value pair with key Yellow and value 50

    println!("{:?}", scores); // {"Blue": 10, "Yellow": 50}

    // Updating a Value Based on the Old Value
    // here we count the number of times each word appears in some text
    let text = "hello world wonderful world";

    let mut map = HashMap::new();

    for word in text.split_whitespace() {
        // split_whitespace() splits a string into substrings at whitespace
        // [hello, world, wonderful, world]
        let count = map.entry(word).or_insert(0); // initial count 0 and add 1
        *count += 1;
    }

    println!("word count: {:?}", map); // {"world": 2, "hello": 1, "wonderful": 1}
}

/*
HashMap<K, V> stores a mapping of keys of type K to values of type V.
as out of other two common collections, this is often less used hence we need to import it using use std::collections::HashMap;
It stores data on heap. all keys must have same type and all values must have same type, but keys and values can be of different types.

Each unique key can only map to one value at a time. but multiple keys can map to same value.
So values can be duplicated but keys cannot.

Hash map in rust uses hash function called SipHash that can provide resistance to Denial of Service (DoS) attacks.
It is not the fastest hashing algorithm available, but the trade-off for better security that comes with the drop in performance is worth it.
we can use a different hash function by specifying a different hasher, according to our need.
 */
