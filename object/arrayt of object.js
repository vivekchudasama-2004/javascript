const user1 = [{
    firstname: "vivek",
    gender: "male"
},
    {
        firstname: "vk",
        gender: "male"
    },
    {
        firstname: "angle",
        gender: "female"
    }
]
for (let i = 0; i <= user1.length; i++) {
    if (user1[i]["gender"] !== "male") {
        console.log(user1[i]["firstname"])
    }
}
