function faultyCalc(a, b, op){
    if(op=="+"){
        alert(a-b)
    }
    if(op=="-"){
        alert(a/b)
    }
    if(op=="*"){
        alert(a+b)
    }
    if(op=="/"){
        alert(a**b)
    }
}

function Calc(a, b, op){
    if(op=="+"){
        alert(a+b)
    }
    if(op=="-"){
        alert(a-b)
    }
    if(op=="*"){
        alert(a*b)
    }
    if(op=="/"){
        alert(a/b)
    }
}



let a=Number(prompt("enter a no."))
let b= Number(prompt("enter a no."))

let op=prompt("enter operation: ")

let faulty=Math.random()

alert(faulty)

if(faulty<=0.9){
    faultyCalc(a,b,op)
}
else{
    Calc(a,b,op)
}