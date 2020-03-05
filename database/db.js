const mongoose = require('mongoose');

//const mongoDB = "connection string. Make sure your usename and password are correct, and that you've updated the name of the database. Don't use special characters in your password.";
const mongoDB='mongodb+srv://ceciliafloquet:cpsc2600langara@cluster0-jcnbm.mongodb.net/hello-mongodb?retryWrites=true&w=majority';

mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true});

let db = mongoose.connection;

db.on('error', ()=>console.log("Error connecting to database"));

module.exports = db;