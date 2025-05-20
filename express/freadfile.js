const fs = require('fs');
const express = require('express');

const app = express();

app.get('/file/:filename', (req, res) => {
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name, 'utf-8', (err, data) => {
        res.json({
            data
        })
    })
})

app.listen(3000);