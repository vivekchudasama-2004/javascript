const express = require('express');

const app = express();

//function returns a boolean
function isoldenough(age){
    if (age<=14){
        return true
    }
    else {
        return false
    }
}

app.get('/rider1', (req, res) => {
    if (isoldenough(req.query.age)){
    res.json({
        msg:"tou have successfully booked a ride"
    })
    }
    else{
        res.status(411).json({
            msg:"you are not old enough to book a ride"
        })
    }
})

app.get('/rider2', (req, res) => {
    if (isoldenough(req.query.age)){
        res.json({
            msg:"tou have successfully booked a ride2"
        })
    }
    else{
        res.status(411).json({
            msg:"you are not old enough to book a ride"
        })
    }
})

app.listen(3000);