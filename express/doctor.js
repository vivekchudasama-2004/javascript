const express = require('express')

let user=[{
    name:'vivek',
    problem:[{
        health:true
    }],
    names:'jhanvi',
    problem:[{
        health:true
    }],
    names:'sid',
    problem:[{
        health:false
    }],
}]

const app=express()

app.use(express.json())

app.get('/' , function (req , res) {
    const  problems=user[0].problem
    const  numberOfProblems=problems.length
    let numberOfTrue=0
    for (let i=0; i < numberOfProblems; i++) {
        if (problems[i].health) {
            numberOfTrue++
        }
    }
    const numberOfFalse=numberOfProblems-numberOfTrue
    res.json({
        problems,
        numberOfTrue,
        numberOfFalse
    })
})

app.post("/" , function(req ,res){
    console.log(req.body)
    const ishealthy = req.body.ishealthy
    user[0].problem.push({
        health: ishealthy
    })
    res.json({
        msg: "success"
    })
})

app.put('/' , function (req , res) {
  for (let i=0;i<user[0].problem.length; i++){
      user[0].problem[i].health=true
  }
    res.json({
        msg: "success"
    })
})

app.delete('/' , function (req , res) {
    const newprob=[]
    for (let i=0;i<user[0].problem.length; i++){
        if (user[i].problem[i].health) {
            newprob.push({
                health:true
            })
        }
        else {
            res.status(411).json({
                msg:"unhealthy"
            })
        }
    }
    res.json({
        msg: "success"
    })
})

app.listen(3002)