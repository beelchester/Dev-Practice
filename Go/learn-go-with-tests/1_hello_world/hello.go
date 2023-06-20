package main

import (
	"fmt" // format package
)

// const englishHelloPrefix = "Hello, "
// const spanishHelloPrefix = "Hola, "
// const spanish = "Spanish"
// const frenchHelloPrefix = "Bonjour, "

// func Hello(name string) string{ // types come after the variable name
//     return englishHelloPrefix + name
// }

// func Hello(name string) string{ // types come after the variable name
//     if name == "" {
//         name = "World!"
//     }
//     return "Hello, " + name
// }

// grouping constants
const (
    englishHelloPrefix = "Hello, "
    spanishHelloPrefix = "Hola, "
    frenchHelloPrefix = "Bonjour, "
    spanish = "Spanish"
    french = "French"
)

// func Hello(name string, language string)(string){
//     if name == "" {
//         name = "World!"
//     }
//     if language == spanish {
//         return "Hola, " + name
//     }
//
//     if language == "French" {
//         return "Bonjour, " + name
//     }
//
//     return englishHelloPrefix + name
// }

func Hello (name string, language string)(string){
    if name == "" {
        name = "World!"
    }
    return greetingPrefix(language) + name
}

// public function starts with capital letter and private with small letter

func greetingPrefix(language string)(prefix string){ // named return value
    switch language { // switch statement
    case french:
        prefix = frenchHelloPrefix
    case spanish:
        prefix = spanishHelloPrefix
    default:
        prefix = englishHelloPrefix
    }
    return
}

func main() {
    fmt.Println(Hello("World!", "Spanish"))
}
