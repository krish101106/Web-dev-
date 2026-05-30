const krish=[7,"Krish", "gajjar", false]

// console.log(krish)
// console.log(krish.length)
// console.log(krish.join("-"))

let a=[1,2,3,4,5,6,7]

a.pop()
a.push(8)
a.shift()
a.unshift(4)


delete a[1]

let b=[1,2,3,4,5,6]

// b.forEach((value)=>{
//     console.log(value**2)
// })

let c=b.map((value)=>{
    return value**2
})

const greater = e =>{
    if(e>5){
        return true
    }
    return false
}

const red=(a,b)=>{
    return a+b
}

console.log(b.reduce(red))

// console.log(b.filter(greater))

// console.log(c)

