//hoisting
//type coercion

//multithreading==>oru single prgmine multiple block akki
//single threading==>line by line
//javascript is single thread

//synchronous asynchronus
//synchronous==>oru particular order indavum
//asynchronous==>

//js is sychronous its keep a order

//callstack,m/yhip==>javascript engine component
//js engine,web api==>js runtime environment
//web api fns==>AJAX,Fetch,setTimeout,DOM,setInterval


//callbackqueue
//eventloop==>callstack empty anonn check cheyyum

console.log("line 1");
setTimeout(()=>{
console.log("first time out");
},3000)
setTimeout(()=>{
    console.log("second time out");
},0)
console.log("line 2");

//promise==>future il ulla value ne store cheyyan
//then==>success ne handle cheyyan
//catch==>failure/error ne handle cheyyan
//resolve,reject(res,rej)

var pro=new Promise((resolve,reject)=>{
    let watch_time=0;
    if(watch_time<1){
        reject("session was too bad")
    }
})
pro.then(res=>console.log(res)).catch(error=>console.log(error))