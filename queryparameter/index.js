const express = require('express');
const app = express()

app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {firstname , lastname} = req.query;
    res.send(`<h1>My firstname is ${firstname} and the my lastname is ${lastname}</h1>`);
})




app.listen(8080 ,()=>{
    console.log("Server connected succesfully at port 8080");
})
