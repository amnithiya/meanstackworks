var num1=0,num2=3,num3=5;
if((num1>num2) & (num1>num3)){
    if(num2>num3){
        console.log(num1,num2,num3);
    }
else{
    console.log(num1,num2,num2);
}
}
else if((num2>num1)&(num3>num2)){
    if(num1>num3){
        console.log(num2,num1,num3);
    }
    else{
        console.log(num2,num3,num1);
    }
}
