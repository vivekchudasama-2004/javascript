const fs = require('fs');

function print (err ,  data){
    if (err) throw err;
    else console.log(data)
}

fs.readFile('asyncfunction.js', 'utf-8', print)

fs.readFile('b.txt', 'utf-8', print)

console.log('done')



function timeout(){
    console.log('function hear');
}

console.log('hi there');

setTimeout(timeout, 10000);

console.log('hi ');
// first loop get run and then time out get print because
// for loop take the thread to run because javascript is single threaded language

let c=0;

for (let i=0 ; i<10000000000; i++){
    c=c+i
}
console.log(c);
console.log('expensive operation')
