const express = require('express');
const app = express()

// console.log(app);

app.use((req , res)=>{
    console.log("Hello Everyone");
    // console.log(req);
    res.send("Ayush kaushal is an industrious boy")
})



app.listen(8080 ,()=>{
    console.log("Server connected succesfully at port 8080");
})
