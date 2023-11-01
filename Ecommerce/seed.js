const mongoose = require('mongoose');
const Product = require('./model/Product');


let products =[
    {
        name:'Modi ji',
        img:"https://th.bing.com/th/id/OIP.Ym6L5Hk8B1idMuSBoPIT2AHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7",
        price:1500000,
        desc:"bahut  bhadiya gendbaaz"
    },
    {
        name:'Kejriwal',
        img:"https://th.bing.com/th/id/OIP.MAGDunthmts6JLZrZZ00qwHaFd?w=217&h=180&c=7&r=0&o=5&pid=1.7",
        price:150,
        desc:"jheelon ka seher"
    },
    {
        name:'Meloni',
        img:"https://th.bing.com/th/id/OIP.t4_v4UB12Vr61rifjhLeUQHaFo?w=228&h=180&c=7&r=0&o=5&pid=1.7",
        price:550,
        desc:"waah modi ji waah"

    }
]

async function seeddb(){
    await Product.insertMany(products);
    console.log("Data seeded")
}

module.exports = seeddb;