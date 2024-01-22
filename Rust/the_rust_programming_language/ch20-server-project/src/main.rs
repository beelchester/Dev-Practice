// use std::net; // networking module
use std::{
    io::{prelude::*, BufReader}, // prelude provides common traits to be used in io module like
    // Read, Write neeeded for BufReader
    net::{TcpListener, TcpStream},
};

fn main() {
    // listen for incoming TCP connections on a certain port
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap(); // bind is similar to `new` for
                                                                 // creating instance, in networking, connecting to a port to listen to is known as “binding to a port.”

    for stream in listener.incoming() {
        // incoming is iterator for streams of type TcpStream
        let stream = stream.unwrap(); // unwrap because connection attempt can fail. ex: os limitations on number of connections
        println!("stream: {:?}", stream);

        println!("Connection established!");

        // Read the request from browser
        handle_connection(stream);
    }
    // till now no data is sent back but connection is established on running
    // multiple Connection established is printed because browser makes multiple requests ex for
    // favicon.ico (icon for tab)
    // also it can just be browser trying to reconnect to get the response
}

fn handle_connection(mut stream: TcpStream) {
    let buf_reader = BufReader::new(&stream); // BufReader is a type that wraps any type that implements the Read trait and buffers input from that type.
    let http_req: Vec<_> = buf_reader
        .lines()
        .map(|res| res.unwrap()) // unwrap each res to get String
        .take_while(|line| !line.is_empty())
        .collect(); // take_while is used to read till empty line, collect to collect into vector
                    // The browser signals the end of an HTTP request by sending two newline characters in a row, so to get one request from the stream, we take lines until we get a line that is the empty string

    println!("http_req: {:?}", http_req);
}

/*

 - TCP is the lower-level protocol that describes the details of how information gets from one server to another but doesn’t specify what that information is. HTTP builds on top of TCP by defining the contents of the requests and responses. It’s technically possible to use HTTP with other protocols, but in the vast majority of cases, HTTP sends its data over TCP. We’ll work with the raw bytes of TCP and HTTP requests and responses.
- connecting to port 80 requires administrator privileges (nonadministrators can listen only on ports higher than 1023)
- binding will fail if two programs are trying to listen to the same port
- A single stream represents an open connection between the client and the server. A connection is the name for the full request and response process in which a client connects to the server, the server generates a response, and the server closes the connection.
- details about http request description: https://rust-book.cs.brown.edu/ch20-01-single-threaded.html#a-closer-look-at-an-http-request
 */
