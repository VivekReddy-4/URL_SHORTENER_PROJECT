import express from 'express'
import mongoose from 'mongoose'
import { shortUrl, getOriginalUrl } from './Controllers/url.js';

const app = express()

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://antanagarivivekreddy_db_user:IxjQh3PRKew3cI1W@cluster0.m3wqspi.mongodb.net/",{
  dbName: "NodeJs_Mastery_Course"
})
.then(()=>console.log("MongoDb Connected..!"))
.catch((err)=>console.log(err));

//rendering the ejs file
app.get('/',(req,res)=>{
  res.render('index.ejs',{shortUrl :null})
})

//shortening url Logic
app.post('/short',shortUrl)

//redirect to original url using short code :- dynamic routing
app.get('/:shortCode',getOriginalUrl)

const port=2000
app.listen(port,()=>console.log(`server is running on port ${port}`))