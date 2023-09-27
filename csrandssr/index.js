const express = require("express");
const app = express();
const path = require('path')


let todos = ["bhakk bsdk" , "bhakk BC" ,"L lag gaye"]


app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'))
app.use("/", express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// app.get("/",(req,res)=>{
//     res.send("<h1>Hello Everyone</h1>")
// })

app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.post("/todos",(req,res)=>{
    // console.log(req.body.todo);
    let {todo} = req.body;
    todos.push(todo);
    res.json({msg:'post request chal bgai meri'})

})



app.listen(8080,()=>{
    console.log('server connected at port 8080');
})