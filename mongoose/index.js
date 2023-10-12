const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connecttomongo = async()=>{
    await mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    
    console.log("Connected to MongoDB Here");
    
    
      
    
};

connecttomongo();

//creating a Schema
let movieSchema = new mongoose.Schema({
    name:String,
    year:Number,
    imdb:Number,
    isWatched:Boolean
})

//creating a model
let Movie = mongoose.model('Movie', movieSchema);

let movie1 = new Movie({
    name:"RRR" , year:2022 , imdb:9.1, isWatched:true
})
let movie2 = new Movie({
    name:"KGF" , year:2021 , imdb:10, isWatched:true
})
movie1.save();
movie2.save();
// console.log(movie)


app.listen(8080 ,()=>{
    console.log("server running at port number 8080");
})