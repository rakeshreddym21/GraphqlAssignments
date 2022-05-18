// const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const {typeDefs}=require("./Schema")
const {Query}=require("./resolvers/Query");
const {db}=require("./db");
const { Tweet } = require('./resolvers/Tweet');

// const app = express();

const server=new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Tweet
    },
    context:{
        db
    },
});


server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
  });
  