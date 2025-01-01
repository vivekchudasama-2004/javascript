function squar(n){
    ans=n*n
    return ans;
}
function sum(a,b){
    const val=squar(a)
    const val2=squar(b)

    sum2=val+val2
    return sum2;
}
const value =sum(5,5)
console.log(value)

//
// function arithmitic(x,y,type){
//     if(type==="sum"){
//         const value1=sum(x,y)
//         type(value)
//         return type
//     }
//     if(type==="min"){
//         const value=sub(x,y)
//         return value
//     }
// }
// const value1=arithmitic(5,5,value1)
// console.log(value1)

function canvoat(age){
    let votingage=age>=18;
    return votingage
}

user1=canvoat(19)
user2=canvoat(15)
console.log(user1)
console.log(user2)
