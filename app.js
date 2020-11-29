const express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const User = require('./models/user')
require('dotenv').config();
// const customMiddleware = (rq,rs,next) => {
//     console.log('welcom to my middleware')
//     next();
// }





// app.use(customMiddleware)
try {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName:'todolist_api',
        user:'Annie',
        pass: 'ZUK1Ks3I3WD7Q2Sy',
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (req,res) =>
    console.log("connected mongoDB"));    
}catch (error) { 
    console.log("could not connect");    
}
// app.get('/',(req,res) => {
//     res.send("First request")
//     console.log('First request')
// });

app.use(express.json())


app.get('/users', async(req,res,next) =>{
    try{
        console.log('get')
        const entries = await User.find()
        res.send(entries) 
    }catch{
          next(error)
    }
        
    
})
app.get('/user',(req,res) => {
    let users = ["annie","tuk","rak","golf","nut"]
    res.send({users: users})
    console.log('First request')
});

app.post("/create_user", async(req,res,next) => {
    console.log(req.body)
    try{
        const myuser = new User(req.body)
        await myuser.save();
        res.send(myuser)
    }catch(err){
        res.send(err)
    }   
    
})

app.listen(3002 , () => {
    console.log("Listening to http://localhost:3002/")
})