
let adj1="Crazy"
let adj2="Amazing"
let adj3="Hot"

let sname1="Engine"
let sname2="Foods"
let sname3="Garments"

let ename1="Bros"
let ename2="Limited"
let ename3="Hub"

let rname=""

for(let i=0;i<3;i++){
    let r=Math.random()
    //console.log(r)
    if(r<=0.33){
        
        if(i==0){
            rname+=adj1
        }
        else if(i==1){
            rname+=sname1
        }
        else{
            rname+=ename1
        }
    }
    else if(r>0.33 && r<0.66){
        
        if(i==0){
            rname+=adj2
        }
        else if(i==1){
            rname+=sname2}
        else{
            rname+=ename2}
    }

    else{
        
        if(i==0){
            rname+=adj3
        }
        else if(i==1){
            rname+=sname3
        }
        else{
            rname+=ename3
        }
    }
    
}

console.log(rname)