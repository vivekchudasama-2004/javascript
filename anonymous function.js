function square(a,b){
    return n*n
}
function sumofsomething(a,b,cb){
    const val1=cb(a)
    const val2=cb(b)
    return val1+val2
}
const ans=sumofsomething(4,2,function(n){
    return n*n*n
})
console.log(ans)