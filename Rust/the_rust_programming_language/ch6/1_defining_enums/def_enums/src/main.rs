#[derive(Debug)] // to print enum values using {:?}, it needs to be derived from Debug trait
enum IpAddrKind {
    // possible values of Ip Address
    // can be only one of these
    V4,
    V6,
}

fn main() {
    // creating instances of each variant of IpAddrKind
    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;
    // these two are of type IpAddrKind
    route(four);
    route(six);

    //----------------------------

    // using enum to store data
    // below is using struct to deine IpAddr and enum for IpAddrKind

    struct IpAddr {
        kind: IpAddrKind,
        address: String,
    }

    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("..."),
    };
    let loopback = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("..."),
    };

    // heres the equivalent using just an enum

    enum IpAddr2 {
        V4(String),
        V6(String), // V6 has a String value associated with it
    }

    let home2 = IpAddr2::V4(String::from("..."));
    let loopback2 = IpAddr2::V6(String::from("...")); // function call that takes string as argument and returns instance of IpAddr type
                                                      // as a result of defining an enum, Rust automatically creates a constructor function for each variant
                                                      // like here IpAddr2::V6(string) is the constructor function for V6 variant

    // we attached each variant of the enum directly to a String value rather than an extra struct
    // consise and less repetitive

    //----------------------------
    // each variant in enum can have different types and amounts of associated data

    enum IpAddr3 {
        V4(u8, u8, u8, u8),
        V6(String),
    }

    let home3 = IpAddr3::V4(127, 0, 0, 1);
    let loopback3 = IpAddr3::V6(String::from("::1"));
    // we can store any type of data in each variant even structs or enums

    enum test {
        test1,
        test2,
        test3,
    }
    struct test2 {
        test: test,
    }
    enum IpAddr4 {
        V4(test),
        V6(test2),
        Quit,                    // no associated data
        Move { x: i32, y: i32 }, // anonymous struct
    }

    //----------------------------
    // one similarity between structs and enums is that we can define methods on enums as well

    enum Message {
        Quit,
        Move { x: i32, y: i32 },
        Write(String),
        ChangeColor(i32, i32, i32), // tuple
    }

    impl Message {
        fn call(&self) {
            // &self will be the instance of the enum that we call the method on
            // like here m is the instance of Message enum and hello is argument value
            println!("call");
        }
    }

    let m = Message::Write(String::from("hello"));
    m.call();

    //----------------------------
    // Option enum

    // Option<T> is defined by standard library as follows:
    // enum Option<T> {
    //    Some(T),
    //    None,
    //    }
    //    T is generic type parameter
    //    Option<T> is defined in the prelude so we don't need to bring it into scope explicitly,
    //    we can use Some and None directly instead of Option::Some and Option::None
    //    Option enum defines that a value could be something or it could be nothing
    //    like first element of non empty list or None if the list is empty
    //      Rust doesn't have null feature but it has an enum that can encode the concept of a value being present or absent
    //      it does not use null because it is too error prone
    //      instead it uses an enum that encodes the concept of a value being present or absent

    let some_number = Some(5); //type of some_number is Option<i32>
    let some_string = Some("a string"); //type of some_string is Option<&str>
    let absent_number: Option<i32> = None; //type of absent_number is Option<i32>
                                           // None requires explicit type anotation, it cant be inferred

    let x: i8 = 5;
    let y: Option<i8> = Some(5);

    //let sum = x + y; // error: mismatched types

    let sum = x + y.unwrap(); // unwrap returns the value inside the Some variant, but if the variant is None, it will panic
                              // any time we have a value of type Option<T>, we need to tell Rust what we want to do if we have a Some(T) value or None value
                              // we can use match expression to decide what to do based on which variant of Option<T> we have
                              // Any value which is not of type Option<T> we can presume that the value is not null
}

fn route(ip_kind: IpAddrKind) {
    println!("ip_kind: {:?}", ip_kind);
}

/*
   enum defines possible values. Ex: struct defines rectangle's width and height values. enum defines rectangle's possible shapes along with square and circle.
*/
