function isEven(num){
    return num%2==0?true:False
}

//let isEven=(num)=>num%2==0?true:false;  ==>arr


//prime num bw low,upp
function primeNums(low,upp){
    for(let i=low;i<=upp;i++){
        var flag=0;
        for(let j=2;j<=i;j++){
            flag++;
            break;
        }
    }
if(flag==0){
    console.log(i);
}
}
console.log(primeNums(4,25));

//create a fn that will return largest number among two numbers

function largestAmongTwo(num1,num2) {
    return num1>num2?num1:num2
    
}
console.log(largestAmongTwo(10,20));
