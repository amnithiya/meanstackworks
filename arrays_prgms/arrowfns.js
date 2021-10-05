//Arrow fns
var add=(num1,num2)=>num1+num2
var square=num1=>num1**2
var cube=num1=>num1**3
var div=(num1,num2)=>num1/num2
var mul=(num1,num2)=>num1*num2

var name="arun"
//function isStartWithA(name){
  //  return name[0]=="a"?true:false
//}

var isStartWithA=(name)=>name[0]=="a"?true:false

//num is odd or even
var isEven=(num)=>num%2==0?true:false
var isOdd=(num)=>num%2==0?true:false

var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1

var largestAmongTwo=(num1,num2)=>num1>num2?num1:num2