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

