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


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`app server running on port${PORT}`)
    })
})

startServer();