const express = require('express')
const app = express()

app.get('/' , function (req , res) {
    res.send('hello world !!!!')
})
app.get('/asd' , function (req , res) {
    res.send('hello world !!!!')
})
app.listen(3001)