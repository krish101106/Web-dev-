
let i = s=>{

    let val1=Math.floor(0+Math.random()*255)
    let val2=Math.floor(0+Math.random()*255)
    let val3=Math.floor(0+Math.random()*255)

    return `rgb(${val1}, ${val2}, ${val3})`
}


let boxs=document.querySelectorAll(".boxs")

boxs.forEach(e => {
    e.style.backgroundColor=i()
    e.style.color=i()
});