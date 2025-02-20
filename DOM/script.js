// const input = document.querySelector('input');
// console.log(input.value);
// name = document.querySelector("button").innerHTML
let ctr= 0
function addtodo(){
    let Element1 = document.querySelectorAll('h4')[1]  //[1] is the index of the element
    Element1.innerHTML = ctr
    console.log(ctr)
    ctr = ctr + 1
}

setInterval(addtodo,1000)

