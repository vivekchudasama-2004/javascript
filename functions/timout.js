function gettimer(){
    seconds=new Date().getSeconds()
    min=new Date().getMinutes()
    hour=new Date().getHours()
console.log( "hours :"+hour + "minutes :"+min +"seconds :" +seconds)
}
setInterval(gettimer,1000)


function getnumber(){
    let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for(let i=num.length;i>=0;i--){
        console.log(i);
    }
}
setInterval(getnumber,10000);

let countdown = 30;
const timer = setInterval(() => {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);
