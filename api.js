    let p=new Promise((res,rej)=>{
       setTimeout(()=>{
       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response=>response.json())
       .then(data => res(data)) 
      .catch(err => rej(err)); 
       },1000
    )
    })
    p.then((res)=>{
        console.log(res);
    }).catch(e=>{
        console.log(e)
    }).finally(()=>{"end of the code"});
async function fetchapi() {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json();
        data.map((user)=>{
            console.log(user.name);
            
        })
    }
    catch(e){
        console.log(e);
    }
}
fetchapi();