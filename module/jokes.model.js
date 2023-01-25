const mongoose = require('mongoose');

const SchemaJokes = mongoose.Schema({
    "setup": String,
    "punchline": String
},{timestamps:true});

const Jokes = mongoose.model("Jokes", SchemaJokes);

module.exports = Jokes;