const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/bookingSchema');
const resolvers = require('./resolvers/bookingResolvers');
require('dotenv').config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  // MongoDB connection
  mongoose.connect('mongodb+srv://pranavpandey2309:F1DIb3gSHV7qcUPE@cluster0.1hm1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();