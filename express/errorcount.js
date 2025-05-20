const express = require('express')

const app= express()

let erroecount=0;


app.get('/user',function (req,res){
    res.status(200).json({
        name:'jhon'
    });
})

app.post('/user',function (req,res){
    res.status(200).json({
        msg:'create dummy user'
    })
})

app.get('errorCount',function (req,res){
    res.status(200).json({

    })
})

app.use(function(err, req, res, next){
    res.status(404).send({})
    erroecount+=erroecount+1
})

app.listen(3000)