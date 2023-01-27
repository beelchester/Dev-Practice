const { gql } = require('apollo-server')
exports.typeDefs = gql` 
  type Query { 
    hello: String
      # products : [Product!]!
      products (filter : ProductFilterInput) : [Product!]!
    product (id : ID!) : Product  
    categories : [Category!]!
    category (id:ID!) : Category
     }

  type Product {
    id : ID!
    name : String!
    description : String!
    quantity : Int!
    price : Float!
    onSale : Boolean!
    category : Category
    reviews : [Review]
  }

  input ProductFilterInput {
    onSale : Boolean
    avgRating : Int
  }

  type Category {
    id : ID!
    name: String!
    products (filter: ProductFilterInput) : [Product!]!
  }

  type Review {
    id : ID!
    title : String!
    date : String!
    comment : String!
    rating : Int!
    productId : ID!
    }
`
