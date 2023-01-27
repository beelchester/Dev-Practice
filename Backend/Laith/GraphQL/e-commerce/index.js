const {ApolloServer} = require("apollo-server")
const {products, categories, reviews} = require("./data")

const {typeDefs} = require("./schema")
const {Query} = require("./resolvers/Query")
const {Product} = require("./resolvers/Product")
const {Category} = require("./resolvers/Category")


const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Product,
    Category
  },
  // to provide data to the resolvers we need to use context
  context :{
    products,
    categories,
    reviews
  }
}
)

server.listen({port:3000}).then(({url}) => {
  console.log(`Server ready at ${url}`)
} )