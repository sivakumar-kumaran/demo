/* callback functions are using function as a parameter.
first using map,it will return a array copy/receive the array ; */

function add(n){
    return n*n;
}
    let person=[1,2,3];
    let b=person.map(add);
    console.log(b);
    
//filter function 
function yesno(n){
    if(n%2!=0)
        return true;
    else return false;
}
let a=[1,2,3,4,5];
let b1=a.filter(yesno);
console.log(b);

let arr1=[1,25,35,2,90];
let arr2=arr1.filter(n=>n%5==0);
console.log(arr2);
//map and reduce will return a array. but reduce will return a single value;

let brr1=[1,2,3,4,5];
let brr2=brr1.reduce((a,b)=>{
    return a*b;
},1)
console.log(brr2); 

// sum of even triple numbers
let crr1=[1,2,3,4,5,6];
let crr2=crr1.map(n=>n*n*n);
let crr3=crr2.filter(n=>n%2==0)
let crr4=crr3.reduce((n,n1)=>{return n+n1;},0);
console.log(crr4);

 
// destructed array usig rest opeator  && spread opertors
// rest opertor used for split array values to assign variable .
// spread operator used for ... merge 2 arrays 
let drr1=[1,2,3,4,5];
const c=[0,10,...drr1,6,7];
console.log(c);
let p1 ={
    name:"siva"
}
let p2={
    name:"kumar"
}
let p3=[p1.name+"siva"+p2.name];
console.log(p3); 

// promises
// then-> success
// console.log -> micro task || macro task onlu execute only fter the micro task
const per= new Promise((res,rej)=>{
    setTimeout(()=>{
        const s=false;
        if(s)
            res("resolved successfully!");
        else
            rej("try again");
    },2000)
})
per.then((d)=>{
    console.log(d);
}).catch((e)=>{
 console.log(e);
})

//API
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