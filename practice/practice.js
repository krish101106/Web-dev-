
async function blink(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(".")},700)
    })
}
let dots=document.querySelector('.d')


async function main(){
    while(true){
        dots.innerHTML=""

        for(var i=0;i<4;i++){
            const dot = document.createElement('span');
            let d=await blink()
            dot.innerHTML=`${d}` 
            dots.append(dot)
            console.log(i);
        }
        
    }
    

}

main()


