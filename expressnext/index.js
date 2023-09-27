const express = require('express');
const app = express()

// console.log(app);

// app.use("/cat",(req,res)=>{
//     console.log("I am mahesh dalla from cat route");
//     res.send('<h1>Cat Route</h1>');
// })

// app.use("/dog",(req,res)=>{
//     console.log("I am mahesh dalla from dog route");
//     res.send('<h1>Dog Route</h1>');
// })

app.get("/cat" , (req,res)=>{
    console.log("Get request form cat route");
    res.send("Cat's response from cat route")
})

app.get("/dog" , (req,res)=>{
    console.log("Get request form dog route");
    res.send("Dog's response from Dog route")
})



// defualt Route
//default route is represented using the * in the address box.
// app.get("*" , (req,res)=>{
//     console.log("Error");
//     res.send("Error Sahi code likh BC")
// })



// This wil be the default route
app.use("/",(req,res)=>{
    console.log("I am mahesh dalla from error route");
    res.send('<h1>Error</h1>');
})



app.listen(8080 ,()=>{
    console.log("Server connected succesfully at port 8080");
})
