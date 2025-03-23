const arr = [1,2,3,4,5]

let newarr=[]

for (let i =0;i<=arr.length-1;i++){
    newarr.push(arr[i]*2)
}

console.log(newarr)

//or

function transform (i){
    return i*2
}

const ans = arr.map(transform)
console.log(ans)


//or

// const ans = arr.map(function transform (i){
//     return i*2
// })
//
// const ans = arr.map(transform)
// console.log(ans)