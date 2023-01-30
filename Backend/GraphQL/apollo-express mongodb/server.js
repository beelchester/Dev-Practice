const express = require('express');
const {ApolloServer, gql}  = require('apollo-server-express');
const mongoose = require('mongoose');
const Post = require('./models/Post.model');

const typeDefs = gql`
type Query {
    hello: String
    getallposts: [Post]
    getpost(id: ID): Post
}

type Post {
  id: ID
  title: String
  description: String
}

input PostInput {
  title: String
  description: String
}

type Mutation {
  createPost(post: PostInput): Post 
  deletePost(id: ID): Post
  updatePost(id: ID, post: PostInput): Post
}
`

const resolvers = {
    Query: {
      hello : () => 'Hello World',
      getallposts: async () => {
        const posts = await Post.find();
        return posts;
      },
      getpost: async (parent, args, context) => {
        const post = await Post.findById(args.id);
        return post;
      }
    },
    Mutation: {
      createPost: async (parent, args, context) => {
        const post = await Post.create(args.post);
        await post.save();
        return post;
      },
      deletePost: async (parent, args, context) => {
        const post = await Post.findByIdAndDelete(args.id); 
        return post;
      },
      updatePost: async (parent, args, context) => {
        const updates = {}
        if (args.post.title) updates.title = args.post.title;
        if (args.post.description) updates.description = args.post.description;

        const post = await Post.findByIdAndUpdate(args.id, updates, {new: true}); // new: true is to return the updated post 
        // findbyidandupdate is not recommended as it does not run the validators, use save() instead like we did in express projects
        return post;
      }
    
    }
}

async function startServer() {
  const app = express();
  const server = new ApolloServer({typeDefs, resolvers});
  
  await server.start();

  server.applyMiddleware({app}); // on visiting /graphql, we can see the playground by default
  // server.applyMiddleware({app, path: '/truly'}); // on visiting /truly, we can see the playground
console.log("mongodb connected")
  app.use((req,res) => {
    res.send('Hello World');
  } )
  
  mongoose.set('strictQuery', true); // to avoid deprecation warning 
  await mongoose.connect('mongodb://localhost:27017/post_db');
  
  app.listen({port: 4000}, () => {
    console.log(`Server ready at port 4000`);
  } );
}

startServer();