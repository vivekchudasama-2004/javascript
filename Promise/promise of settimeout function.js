function promiseOfSettimeoutFunction(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    })
}

function callback(){
    console.log("the time get pass");
}

promiseOfSettimeoutFunction(3000).then(callback)