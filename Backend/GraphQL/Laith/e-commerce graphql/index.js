const {ApolloServer} = require("apollo-server")
 
const {db} = require("./db")
const {typeDefs} = require("./schema")
const {Query} = require("./resolvers/Query")
const {Product} = require("./resolvers/Product")
const {Category} = require("./resolvers/Category.js")
const {Mutation} = require("./resolvers/Mutation")

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Mutation,
    Product,
    Category
  },
  // to provide data to the resolvers we need to use context
  context :{
    db
  }
}
)

server.listen({port:3000}).then(({url}) => {
  console.log(`Server ready at ${url}`)
} )