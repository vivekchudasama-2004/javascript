const fs=require("fs");
//filesystem module
fs.readFile("hello.txt","utf-8",function (err,data){
    console.log(data)
})
