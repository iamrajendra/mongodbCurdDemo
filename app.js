const express  = require('express');
const app  = express();
const mongoose  = require('mongoose');
require('dotenv/config')
const bodyParser = require('body-parser');
// middle ware
app.use(bodyParser.json());

// imports routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);


// connect to db here
mongoose.connect(process.env.DB_CONNECTION
,{userNewUrlParser:true}, ()=>{
console.log("connected to database");
});

//listening
app.listen(3000);