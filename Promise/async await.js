function setTimeoutPromisified(ms){
    let p=new Promise(function (resolve) {setTimeout(resolve, ms)}) //inisialize the promise object
    return p
}

async function call(){
    console.log("---start of await---")
    await setTimeoutPromisified(1000)
    console.log("hi")
    await setTimeoutPromisified(3000)
    console.log("there")
    await setTimeoutPromisified(10000)
    console.log("!!!")
    console.log("end of the await")
}

console.log("---outside the await---")
call()