const express = require('express');

const app = express();

//function returns a boolean
function isoldenoughmiddleware(req , res , next){
    const age=req.query.age;
    if (age>=14){
        next() //check the condition and call the next middleware
    }
    else {
        return false
    }
}

app.use(isoldenoughmiddleware)

app.get('/rider1' ,(req, res) => {
        res.json({
            msg:"tou have successfully booked a ride"
        })
})

app.get('/rider2',(req, res) => {
        res.json({
            msg:"tou have successfully booked a ride2"
        })
})

app.listen(3000);