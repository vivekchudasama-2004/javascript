let EvenNum=[1,2,3,4,5,6,7,8,9,10]
for (let i=0; i<=EvenNum.length; i++) {
    if (EvenNum[i] % 2  === 0) {
        console.log("EvenNum" + i)
    } else {
        console.log("oddNum" + i)
    }
}