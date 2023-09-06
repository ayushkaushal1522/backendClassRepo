const express = require('express');
const app = express()

//wrong approach of making the routes

// app.get("/r/cat",(req,res)=>{
//     console.log("Cat");
//     res.send('Cat');
// })
// app.get("/r/dog",(req,res)=>{
//     console.log("Dog");
//     res.send('Dog');
// })

// right approach  of making the routes


app.get("/r/:subredits",(req,res)=>{
    let {subredits}  = req.params;
    res.send(`<h1>This is ${subredits} here from GLA</h1>`);

})
app.listen(8080 ,()=>{
    console.log("Server connected succesfully at port 8080");
})
