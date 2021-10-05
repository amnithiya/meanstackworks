var arr=[2,3,4,5,6,7]
//total
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);

//maximum
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

//min
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

