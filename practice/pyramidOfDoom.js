function first(callback){
    setTimeout(callback,5000)
}

function second(callback){
    setTimeout(callback,5000)
}

function third(callback){
    setTimeout(callback,5000)
}

// first(() => {
//     second(() => {
//         third(() => {
//             console.log("pyramid of doom")
//         })
//         console.log("second")
//     })
//     console.log("first")
// })


let p= new Promise((resolve,reject)=>{
    resolve("resolved yayyyy!!!")
    //reject("not resolved not yeeeyyyyy!!!")
})

p.then((a)=>{console.log(a)}).catch((a)=>{console.log(a)})
