const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers

    })


    await server.start();

    server.applyMiddleware({
        app
    });

    console.log(`use graghql at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`app server running on port${PORT}`)
    })
})
