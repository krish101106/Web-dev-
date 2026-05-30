let q1="No matter how you loss, there's always some hope."
let q2="The future depends on what you do today."
let q3="Do what you can, with what you have, where you are."
let q4="In the middle of difficulty lies opportunity."
let q5="The journey of a thousand miles begins with one step."



let q=document.querySelector('.text')




let rq=()=>{
    let a=Math.random()
    if(a<=0.20){
        return `${q1}`
    }
    else if(a<=0.40 && a>0.20){
        return `${q2}`
    }
    else if(a<=0.60 && a>0.40){
        return `${q3}`
    }
    else if(a<=0.80 && a>0.60){
        return `${q4}`
    }
    else{
        return `${q5}`
    }
}


let g=document.querySelector('#random')

g.addEventListener("click",()=>{
    q.innerHTML=`<p>${rq()}</p>`
})



g.addEventListener("dblclick",()=>{
    let div=document.createElement('div')
    div.innerHTML=`<p>${rq()}</p>`
    q.after(div)
})