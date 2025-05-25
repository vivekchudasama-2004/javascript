const express=require('express')

const app= express()
let a, b;

app.get("/add/:a/:b" , function (req , res){
    a=parseInt(req.query.a)
    b=parseInt(req.query.b)
    res.json({
        answer:a+b
    })
})

app.get('/sub/:a/:b' , function (req , res){
    a=req.query.a
    b=req.query.b
    res.json({
        answer:a-b
    })
})

app.get('/multiply/:a/:b' , function (req , res){
    a=req.query.a
    b=req.query.b
    res.json({
        answer:a*b
    })
})

app.get('/divide/:a/:b' , function (req , res){
    a=req.query.a
    b=req.query.b
    res.json({
        answer:a/b
    })
})

app.listen(3000)