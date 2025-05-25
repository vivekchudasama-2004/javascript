const express = require('express');

const app = express();
let requestCounter = 0;

function requestincrease(req,res,next){
    requestCounter += 1;
    console.log("Total number of requests: " + requestCounter);
    next()
}


function addtion (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a + b
    });
};

app.get('/sub/:a/:b', function (req, res) {
    requestincrease()
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a - b
    });
});

app.get('/add/:a/:b',requestincrease,addtion())

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});