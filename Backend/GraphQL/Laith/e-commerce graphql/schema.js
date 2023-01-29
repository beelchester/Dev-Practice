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

     type Mutation {
      addCategory (input :addCategoryInput!) : Category!
      addProduct (input : addProductInput!) : Product!
      deleteCategory (id : ID!) : Boolean!
      deleteProduct (id : ID!) : Boolean!
      deleteReview (id : ID!) : Boolean!
      updateProduct (id : ID!, input : updateProductInput!) : Product!
      updateCategory (id : ID!, input : updateCategoryInput!) : Category!
      updateReview (id : ID!, input : updateReviewInput!) : Review!
     }

      input updateReviewInput {
      title : String
      comment : String
      rating : Int
      }

      input updateCategoryInput {
      name : String
      }

      input updateProductInput {
      name : String
      description : String
      quantity : Int
      price : Float
      onSale : Boolean
      categoryId : ID
      }

      input addProductInput {
      name : String!
      description : String!
      quantity : Int!
      price : Float!
      onSale : Boolean!
      categoryId : ID!
      }

     input addCategoryInput {
      name : String!
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
