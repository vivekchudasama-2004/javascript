function sum(a,b,futocall)
{
    sumvalue=a+b;
    futocall(sumvalue);
    sumvalue1=a-b;
    futocall(sumvalue1);
}
function diasplaysum(data){
    console.log("reasult of the sum :"  +data)
}
function displaysumpassive(data){
    console.log("sum's result : " +data)
}
const ans=sum(8,9,diasplaysum)
// const ans=sum(8,9,displaysumpassive)

//
// function arithmitic(x,y,type){
//     let add,min,mul
//     if(type===add){
//         add= x+y
//         type(add)
//     }
//     if(type===min){
//         min= x-y
//         type(min)
//     }
//     else {
//         mul= x*y
//         type(mul)
//     }
// }
// function sum(number){
//     console.log('this is a ans of addition'+number.add())
// }
// function type2(number){
//     console.log('this is a ans of sub'+number)
// }
// function type3(number){
//     console.log('this is a ans of mul'+number)
// }
// const answer=arithmitic(5,8,sum)
//


function name(a,b,functioncall,functioncall2){
    name=a+b;
    functioncall(name)
    functioncall2(name)
    // return functioncall2(name)
}
function name2(data){
    console.log('this is name form name2'+data)
}
function name3(data){
    console.log('this is name form name3'+data)
}

const fullname=name(' vivek ','chudasama',name3,name2)
