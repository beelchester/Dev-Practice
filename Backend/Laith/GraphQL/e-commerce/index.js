const {ApolloServer, gql} = require("apollo-server")

const typeDefs = gql` 
  type Query { 
    hello: String
    # by default it also takes null (nothing) as a value along with the type i.e. here a string
    # to make the below strictly a int, we can add a ! after the type
    # fingers : Int! # ! means the value is required
    # price : Float
    # isHappy : Boolean
    # hey : [String] # this means hey is an array of strings
    # nums : [Int!]! # this means nums is an array of ints, and the data in array is required
    # byes : [String!]! # this means byes is an array of strings, and the data in array as well as the array itself is required
    products : [Product!]!
    # variable query
    product (id : ID!) : Product # this means the product query will take a name as an argument and return a product having that name
   }
  #  heres how we can use variable query in sandbox
  #  query {
  #  product(id : 1) {
  #    name
  #    description
  # } 
  # }


  #  object type
  type Product {
    id : ID!
    name : String!
    description : String!
    quantity : Int!
    price : Float!
    onSale : Boolean!
  }
`
// the above code is used to define the schema of the server

// scalars are the basic types in graphql like String, Int, Float, Boolean, ID
// ID is a special scalar type that is used to represent a unique identifier, usually used as the primary key for a database table
// another type is object, which is used to represent a complex object

const products = [
  {
    id : '1-e',
    name : "Product 1",
    description : "This is product 1",
    quantity : 10,
    price : 100.50,
    onSale : true
  },
  {
    id : "2-e",
    name : "Product 2",
    description : "This is product 2",
    quantity : 20,
    price : 200.50,
    onSale : false
  }
]

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World" //return null
    },
    // fingers: () => {
    //   return 10
    // },
    // price: () => {
    //   return 100.50
    // },
    // isHappy: () => {
    //   return false
    // },
    // hey: () => {
    //   return ["hey", "hello", "hi"]
    // },
    // nums : () => {
    //   return [1,2,3,4,5]
      // return [] //possible to return an empty array
    // },
    // byes : () => {
    //   return ["bye", "see ya", "cya"]
      // return null //not possible
    // }
  
  products : () => {
  return products
  },
  product : (parent, args, context, info) => {
    const productId = args.id
    const product = products.find((product) => {
      return product.id === productId
    }
    )
    if(!product) {
      // return null
      throw new Error(`Product with id ${productId} not found`);
    }
    return product
}}}
//resolvers are used to define the behaviour of the server, in this case, the behaviour of the hello query

const server = new ApolloServer({
  typeDefs,
  resolvers
}
)

// default port is 4000
// server.listen().then(({url}) => { 
//   console.log(`Server ready at ${url}`)
// })

server.listen({port:3000}).then(({url}) => {
  console.log(`Server ready at ${url}`)
} )