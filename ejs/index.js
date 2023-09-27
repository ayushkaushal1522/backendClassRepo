const express = require("express");
const app = express();
const path = require('path')

// configuration needs to be done while usng templates like ejs
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));
let arr = ['ayush','kaushal','striver']
app.get("/",(req,res)=>{
    let randomnumber = Math.floor(Math.random()*10)
    res.render('index',{randomnumber})
})
app.get('/home',(req,res)=>{
    // res.send('<h1>Hello I am home</h1>')
    res.render('home',{arr})
})
app.get("/information",(req,res)=>{
    res.render('information')
})

app.listen(8080,()=>{
    console.log("server connected at port 8080");
})