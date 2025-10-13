function info(name){
    return  new Promise((resolve,reject)=>{
    setTimeout((a)=>{
        console.log("Hello !"+name);
        resolve("Done");
    },2000);
})
}
let d=23;
if(typeof(d)==="number"){
info(d).then((d)=>{
    console.log("Done");
}).catch((e)=>{
    console.log("Error");
})
}
else{
    console.log("Enter a name : (string)")
}

