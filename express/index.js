const express=require('express')

function calculate(n) {
    let ans = 0
    for (let i = 0; i <= n; i++) {
        ans += i
    }
    return ans
}

const app=express()

app.get('/' , function (req , res) {
    const n=req.query.n
    const ans=calculate(n)
    res.send('your answer is ' + ans)
})

app.listen(30)