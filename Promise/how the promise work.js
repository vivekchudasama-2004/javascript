console.log("---starting of the file---")

function readfile(resolve){
    setTimeout(function (){
        console.log("callback based settimeout called");
        resolve()
    } ,3000)
}

function settimeoutPromisified(){

    console.log("settimeout called");
    return new Promise(readfile)
}

const p = settimeoutPromisified()

function callback(){
    console.log("timer is done");
}

p.then(callback)

console.log("---end of the file---")