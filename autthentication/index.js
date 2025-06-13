const express = require('express')

const app = express()

app.use(express.json())

const users=[]

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


app.post('/signup' , (req , res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password,
    })

    res.json({
        msg:"You are signed up"
    })
})

app.post('/signin' , (req , res)=>{
    const username=req.body.username;
    const password=req.body.password;

    let userfound=null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            userfound = users[i];
        }
    }

    if (userfound) {
        userfound.token= generateToken();
        res.json({
            token: generateToken(),
            msg:"You are signed in"
        })
    }
    else {
        res.status(400).json({
            msg:"invalid username and password"
        })
    }

})

app.get('/me' , (req , res)=>{
    const token = req.headers.token;
    let user=users.find(user => user.token == token)
    if (user) {
        res.send({
            username: user.username,
            password: user.password
        })
    }
    else {
        res.status(403).json({
            msg:"unauthorized user"
        })
    }
})

app.listen(3000)
