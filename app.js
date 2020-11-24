const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();// const PORT = process.env || 3000

// mongoose.connect(
//     process.env.MONGO_URL,
//     { useNewUrlParser:true})
//     .then(() => {
//     console.log('Connected to mongo')
   
// });

try {
    mongoose.connect( process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
}catch (error) { 
    console.log("could not connect");    
}



app.listen(3000)