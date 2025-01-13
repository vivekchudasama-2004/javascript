const fs = require("fs");
const constants = require("node:constants");

function readfile(sendthevaluehear){
    fs.readFile("b.txt","utf-8",function (err, data){
        data=data.trim()
        sendthevaluehear(data)
    })
}

const p=new Promise(readfile)

//or

function readfiles(fileName){
    return new Promise(readfile)
}
// const p = readfile();

function callback(content){
    console.log(content)
}

p.then(callback)