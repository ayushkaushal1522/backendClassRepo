const express = require('express');
const app = express()
const path = require('path')
const methodOverride = require("method-override")
const { v4: uuid } = require('uuid');
// console.log(app);

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,'public')))

let comments = [
    {
        id:uuid(),
        username:"Mahesh",
        description:"dalllaaaa"
    },
    {
        id:uuid(),
        username:"puneet",
        description:"aaj kal ke nalle birojgaar"
    },
    {
        id:uuid(),
        username:"Arpit",
        description:"Hum pe toh hai he naa"
    },
    
]

// Restful Routing
// read - > displaying all the comments
app.get("/",(req,res)=>{
    res.send("<h1>Mein aa gaya mere bhai</h1>");
})
app.get("/comments",(req,res)=>{
    res.render("index",{comments})
})

app.get("/comments/new",(req,res)=>{
    res.render("new");
})
//to actually add the comment
app.post("/comments",(req,res)=>{
    const {username , comment} = req.body;
    const obj={
        username:username,description:comment,id:uuid()
    }
    comments.push(obj);
    res.redirect("/comments")
})

//show the single/particular comment
app.get("/comments/:commentid",(req,res)=>{
    const {commentid} =req.params;
    let foundcomment = comments.find((item)=>{
        return item.id==commentid
    })
    res.render("show",{foundcomment});
})

app.get("/comments/:commentid/edit",(req,res)=>{
    const {commentid} =req.params;
    let foundcomment = comments.find((item)=>{
        return item.id==commentid
    })
    res.render("edit",{foundcomment});

})

// to actually edit the comment
app.patch("/comments/:commentid",(req,res)=>{
    const {commentid} =req.params;
    let foundcomment = comments.find((item)=>{
        return item.id==commentid
    })
    let {comment} = req.body;
    foundcomment.description = comment;
    res.redirect("/comments")

})


//delettin a comment
app.delete("/comments/:commentid",(req,res)=>{
    const {commentid} =req.params;
    let newarray = comments.filter((item)=>{return item.id != commentid});
    console.log(newarray);
    comments = newarray
    res.redirect("/comments")
})


app.listen(8080 ,()=>{
    console.log("Server connected succesfully at port 8080");
})
