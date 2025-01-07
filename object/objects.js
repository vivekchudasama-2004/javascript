const user1 ={
    firstname:"vivek",
    gender:"male",

    firstname2:"sahil",
    gender2:"female",
}
console.log(user1["firstname"])
console.log(user1['firstname2'])

arrays
const person1 =['vivek','sahil','mihir']
const gender =['male', 'female', 'male']
for(let i=0;i<=person1.length;i++) {
    if (gender[i] === 'female') {
        console.log(person1[i])
    }
}


function greet(user){
    console.log("HI " + user.gender + user.name + " your age : "+user.age);
}

let user ={
    name: "vivek",
    age : 21,
    gender: "MR."
}

greet(user);

function user1(users) {
    users.forEach(function(user) {
        if (user.age < 19) {
            console.log("Hello: " + user.name + " your age is: " + user.age);
        } else {
            console.log(user.name + " is above 18");
        }
    });
}

const users = [{
    name: "vivek",
    age: 21,
    gender: "male"
}, {
    name: "jhanvi",
    age: 21,
    gender: "female"
}];

user1(users);
