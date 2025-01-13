function random(resolve){ //resolve is also a function
    resolve() //it will call the resolve function
    setTimeout(resolve, 3000)
}
let p = new Promise(random) //suppose to return u something eventually

//using the eventual value returned by the promise
function call(){
   return  console.log("Hello World")
}

p.then(call)


function wait(resolve){
    setTimeout(resolve, 3000);
}

function settimeoutpromise(){
    return new Promise(wait)
}

function main(){
    console.log("main get called")
}

settimeoutpromise(5000).then(main)





function waitfor3s(resolve){
    setTimeout(resolve, 3000);
}

function callback(){
    console.log("Hello World")
}

waitfor3s(callback)

// or
//
// waitfor3s(function(){
//     console
// });

