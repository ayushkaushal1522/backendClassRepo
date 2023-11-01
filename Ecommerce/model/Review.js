const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }
    


})

let Review = mongoose.model('Review',ReviewSchema);
module.exports = Review;