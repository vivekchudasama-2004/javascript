const express = require('express');
const {listen} = require("express/lib/application");

const app = express();

function logger(req,res,next){
    console.log("method"+req.method)
    console.log("host name"+req.hostname)
    console.log("URL"+req.url)
    console.log("time"+new Date())
    next()
}

app.use(logger)

app.get('/sum/:a/:b',function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a + b
    });
    console.log(res.status(200))
});

app.get('/sub/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a - b
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});