const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const seeddb = require("./seed");
const productRoutes = require("./routes/productRoutes");




dotenv.config();
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));

const connecttomongo = async()=>{
    await mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    
    console.log("Connected With database");
    
    
      
    
};

// seeddb();

connecttomongo();
//middleware for router
app.use(productRoutes);

let PORT = 8080;
app.listen(PORT ,()=>{
    console.log("server running at port number 8080");
})