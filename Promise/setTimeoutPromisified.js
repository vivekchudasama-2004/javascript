//it returns the object of the promise class
function setTimeoutPromisified(ms){
    let p=new Promise(resolve => setTimeout(resolve, ms)); //inisialize the promise object
    return p
}

function callback(){
    return console.log("Hello World")
}

setTimeoutPromisified(3000).then(callback)


function getfile(ms) {
    let f = new Promise(resolve => setTimeout(resolve, ms)); //inisialize the promise object
    return f
}

let fs = require("fs");

function callbackfile(){
fs.readFile("function.js", "utf-8", getfile);
}

getfile(3000).then(callbackfile)