let counter=0;

function count (){
    counter++;
    console.log(counter);
}

setInterval(count,1000)

//or


let counter = 0;


const updateCounter = () => {
    counter++;
    console.log(counter);
};

setInterval(updateCounter, 1000);
