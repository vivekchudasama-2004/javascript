// function sum(a,b){
//     return parseInt(a) + parseInt(b); //if it is an string it converts into integer
// }
//
// let ans = sum("1",5)
// console.log(ans)


function number(n){
    let ans=0
    for (let i=0;i<=n;i++){
       ans= ans+i
    }
    return ans;
}

let ans = number(5)
console.log(ans);

// //or
//
// function num(n){
//    return n * (n + 1);
// }
//
// let count = num(5)
// console.log(count);


function getdown(num){
    let answer=num;
    for (let i=num; i>=0;i--){
        console.log(i);
    }
}

getdown(3)

const fs = require("fs");

const content = fs.readFileSync("function.js" , "utf-8");
console.log(content);

const content2 = fs.readFile("b.txt","utf-8");
console.log(content2);