function setTimeoutPromisified(ms){
    let p=new Promise(function (resolve) {setTimeout(resolve, ms)}) //inisialize the promise object
    return p
}

function callback(){
    return console.log("Hello")
}

function callback2(){
    return console.log("World")
}

setTimeoutPromisified(3000).then(callback)
setTimeoutPromisified(5000).then(callback2)

//OR
async function call(){
    await setTimeoutPromisified(1000)
    console.log("hi")
    await setTimeoutPromisified(3000)
    console.log("there")

}
call()
//
// or
//
// function setTimeoutPromisifieds(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
//
// setTimeoutPromisifieds(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisifieds(3000).then(function () {
//         console.log("hello");
//         setTimeoutPromisifieds(5000).then(function () {
//             console.log("hello there");
//         });
//     });
// });
//
//
// //or
//
// function setTimeoutPromise(ms){
//     let p=new Promise(resolve => setTimeout(resolve, ms));
//     return p
// }
//
// setTimeoutPromise(1000)
//     .then(function () {
//         console.log("hi");
//         return setTimeoutPromise(3000);
//     })
//     .then(function () {
//         console.log("hello");
//         return setTimeoutPromise(5000);
//     })
//     .then(function () {
//         console.log("hello there");
//     });
