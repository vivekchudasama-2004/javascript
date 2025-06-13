const express = require('express')

const jwt=require('jsonwebtoken')

const JWT_SECRET = "USER_APP";
const app = express()
user=[]

app.use(express.json())

//returning html file by backend server so frontend and backend  hosted in same domain

app.get("/",function (req,res){
    res.sendFile("/index.html", {root: __dirname})
})
function auth(req, res, next) {
    const token = req.headers.authorization;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username; // changing the request object if we change it hear then it update the header of next middleware in chain
       next()
    }
    else{
        res.json({
            error:"Invalid token"
        })
    }
}
function logger(req,res,next){
    console.log(req.method+"request method")
    next()
}

app.use(logger)

app.post('/signup',(req , res)=>{
    const username = req.body.user;
    const password = req.body.password;

    user.push({
        username:username,
        password:password,
    })

    res.json({
        msg: 'User created successfully',
    });

    user.find(user => {
        if (user.username == username) {
            return "this user name already exists";
        }
    })

})

app.post('/signin',(req , res)=>{
        const username = req.body.user;
        const password = req.body.password;

       let founduser= null;

       for(let i=0; i<user.length; i++){
           if(user[i].username == username && user[i].password == password){
               founduser = user[i];
           }
       }
       if (!founduser){
           res.json({
               msg: 'User not found',
           })
       }
       else {
           const token = jwt.sign({
               username:founduser.username
           }, JWT_SECRET)
           res.json({
               token :  token
           })
       }
})

app.get('/me',auth,(req , res)=>{
    // const token = req.headers.token // jwt
    // const decodedInformation = jwt.verify(token, JWT_SECRET);  // {username: "harkirat@gmail.com"}
    // const username = decodedInformation.username
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username)  {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }

})

app.listen(3000)
