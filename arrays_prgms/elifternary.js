var num=0;
//print num is -ve or +ve
if (num>0){
    console.log("+ve");
}
else if(num<0){
    console.log("-ve");
}
else{
    console.log("zero");
}
//using ternary
 num>0?"+ve":num<0?"-ve":"zero"