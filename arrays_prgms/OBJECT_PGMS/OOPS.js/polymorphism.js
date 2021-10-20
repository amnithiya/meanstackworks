function add(num1){
    return num1+20
}
function add(num1,num2){
    console.log("here");
    return num1+num2
}
function add(num1,num2,num3){
    console.log("3 param method");
    return num1+num2+num3
}
console.log(add(10,100));
console.log(add(100));


//fn overloading==>same fn name diff no of parameters  (here wrkdonly recently implemented mthds )
//method overloading
