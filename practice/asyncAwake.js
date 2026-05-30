async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(455)}, 5000)
    })
    
}

async function fetchData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data =await x.json()

    return data
}

async function main(){
    console.log("loaded the file");
    console.log('loding the data');
    let a=await fetchData()
    console.log(a);
    console.log(`processed`);

}

main()

