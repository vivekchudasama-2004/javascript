// const arr=[1,2,3,4,5]
//
// let newarr=[]
//
// for (let i=0; i<=arr.length; i++){
//     if(arr[i]%2===0){
//         newarr.push(arr[i])
//     }
// }
//
// console.log(newarr)

//or

const arr=[1,2,3,4,5]


function filterfun(n){
    if (n%2===0){
        return true
    }
    else {
        return false
    }
}

const ans=arr.filter(filterfun);
console.log(ans)
