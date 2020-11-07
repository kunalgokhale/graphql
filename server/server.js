const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to db
mongoose.connect('mongodb://admin:admin123@ds135796.mlab.com:35796/graphql', {useNewURLParser: true});
mongoose.connection.once("open",() => {
    console.log("CONNECTED TO DB")
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("LAUNCHING APP...");
    console.log("LISTENING ON PORT 4000");
});