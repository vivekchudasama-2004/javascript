const express = require('express')

const app =express()

let numberOfRequestsforuser={};
setInterval(()=>{
    numberOfRequestsforuser={};
},1000)

app.use(function (req,res,next) {
    const  userid=req.header["user-id"];
    if (numberOfRequestsforuser[userid]) {
        numberOfRequestsforuser[userid]+=numberOfRequestsforuser[userid]+1
        if ((numberOfRequestsforuser[userid])>5 ) {
            return res.status(404).send("Too many requests")
        }
    }
    else {
        next()
    }
})



app.listen(3003)