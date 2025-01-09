function arithmiticCallback(a,b,calling){
    return calling(a,b)
}
function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
const ans=arithmiticCallback(5,7,sum)
console.log(ans)

