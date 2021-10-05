function add(num1,num2){
    let res=num1+num2;
    return res
}
console.log(add(10,20));


function mul(num1,num2){
    let res=num1*num2;
    return res
}
console.log(mul(5,4));

//factorial
function factorial(num){
    let res=1;                   // vngi res nte avde fact use cheyyam
    for(let i=1;i<=num;i++){
        res=res*i;
    }
    return res
}
console.log(factorial(5));