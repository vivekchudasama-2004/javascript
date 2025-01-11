function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function sum (a , b , op){
    return op(a,b)  //operation(value of a , value of b ) we can take another variable also
}

let operation = sum(5 , 8 , divide)
console.log(operation)