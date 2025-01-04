let ans=0;
for(let i=1; i<=100; i++ )
{
    console.log(ans)
    ans=ans+i;
}
console.log(ans)



// let user=['a','b','c','d','d'];
//
// // let totaluser=user.length
// for(let i=0; i<user.length; i++ ){
//     console.log(user[i]);
// }

function greet(user){
    // let eligibale=user.age >=19;
    // return eligibale ,console.log("HI " + user.gender + user.name + " your age : "+user.age);
    if (user.age >=19)
    {
        return true
    }
    else{
        return console.log("not eligible")
    }
}

let user ={
    name: "vivek",
    age : 2,
    gender: "MR."
}

greet(user);