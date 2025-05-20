const express = require('express')

const app=express()

let requescount=0

app.use(function (req,res,next){
    requescount=requescount+1
    next()
})

app.get(function (req,res,next){
    res.status(200).json({
        name:'jhon'
    })
})

app.post('user',(req,res)=>{
    res.status(200).json({
        msg:'create dummy user'
    })
})

app.get('requestCount',(req,res)=>{
    res.status(200).json({
        requestCount
    })
})

app.listen(3000)
