function hello(resolve){
    return setTimeout(resolve, 3000)
}

let p = new Promise(hello)

function callback(){
    console.log("Hello World")
}

p.then(callback)

// or


function k() {
    let p = new Promise(function (resolve) {
        resolve("hi there")
    });
    return p
}

function main(){
    k().then(function (value) {
        console.log(value)
    })
}

main()
