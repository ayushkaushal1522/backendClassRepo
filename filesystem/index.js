let fs = require("fs");
//this fs is the object whibch may have a lot of object.
let data1 = "Ayush kaushal is an industrious boy";
let data2 = "Ha Ha Ha Ha";
fs.writeFile("abc.txt" ,data1 ,{
    encoding:"utf-8",
    flag:'w'
} , (error)=>{
    if(error) throw error;
    console.log("File written Successfully")
})


fs.writeFile("def.txt" ,data2 , 
    (error)=>{
    if(error) throw error;
    console.log("File written Successfully")
})

//options is marzii daalo yaa fir na daalo
fs.readFile("abc.txt" ,{
    encoding:"utf-8",
    flag:'r'
} ,(error , data)=>{

    if(error) throw error;
    console.log(data);

        
})


fs.readFile("def.txt" ,{
   
} ,(error , data)=>{

    if(error) throw error;
    console.log(data.toString());

        
})

fs.appendFile("abc.txt" , "file ystem is updated" , {} ,(error)=>{


        if(error) throw error;
        console.log("File Updated Successfully");
})

// fs.unlink("abc.txt" ,(error)=>{

//     if(error) throw error;
//     console.log("File deleted successfully.")

// })