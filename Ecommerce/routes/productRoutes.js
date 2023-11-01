const Product = require("../model/Product");
const express = require("express");
const router = express.Router();

router.get('/products',async (req,res)=>{
   let products = await  Product.find();
   res.render('products/index.ejs',{products});
})


//exporting the module from here 
module.exports = router;

