const express = require('express');

const app = express();

app.use(express.json())

//or
// const middleware=express.json()
// app.use(middleware)

app.post('/sum',function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a + b
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});