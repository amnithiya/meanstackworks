//chk given num iss odd or even
// num=15 if num divisible by 3 print fiz,if num is divisible by 5 print buz, if num is divisible by 15 print fizbuz
// second largest number from three numbers without predefined method and array
//sort these three numbers in ascending order
//swap two number;



 // 1.odd or even
 //ternary operator
 // // ternary perator=condition?true:false
 var num=10;
var res=num%2==0?"even":"odd"
console.log(res)


//2.print buz
 
var num=15;
if(num%15==0){   //15%3==0
    console.log("fizz buz");
}
else if(num%5==0){  //5%5==0
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}

// or
var num=15;
var res="";//res=""
if(num%3==0){
    res+="fizz"; //res=""+"fizz"
}
if(num%5==0){
    res+="buz"; //res=fiz+buz
}
console.log(res); //fizbuz


// 4.sort
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


//5.swap

var a=10,b=5;
 let temp;
 temp=a;
 a=b;
 b=temp;
 console.log(`the value of a after swapping: ${a}`);
 console.log(`the value of b after swapping: ${b}`);







