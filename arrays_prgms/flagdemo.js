var arr=[100,150,75,80,45,40,500,25,50]
//product purchase under 50
var avl_amount=50;
var flag=0; // flag ine pagaram vere nthengilum use cheyya eg:is_availabel(flag use cheyyana alladethum )
for(let price of arr){
    if(price<avl_amount){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("there is no available under 50");
}
else{
    console.log("available");
}


//gcd of (14,21) create a program to find gcd ot two numbers (7)
var num1=21,num2=14;
while(num1>num2){
var gcd=num1%num2;
   num1=num2;
   num2=gcd;
   if(num1%num2==0){
console.log(gcd);
   }
}

