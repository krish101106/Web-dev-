//const a=9
//console.log(a)

let krish={
    name:"krish",
    age: 19,
    handsome: "veryyy much :)"
}

// console.log(krish)
// console.log(krish.age)
// console.log(krish.name)


let rname=null

for(let k in krish){
    console.log(`${krish[k]}`)
}
let a=[1,2,3,4,5];

// for(i of a){
//     console.log(i)
// }

// a.forEach(e => {
//     console.log(e);
// });

let b= a.map(e=>{return e*e})

b.forEach(e=>{console.log(e)})

console.log(b.filter(e=>{return (e>5)}))

console.log(typeof(a))