var arr=[2,4,6,3] // [13,11,9,12]
var total=0;
for(let num of arr){
    total+=num
}
var op=[]
for(let num of arr){
    let res=total-num;
    op.push(res)
}
console.log(op);

var arr=[1,2,3,4] //sum=6(2,4) sum=5(2,3)(1,4) sum=7(3,4) 
var elem_pair=6
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==elem_pair){
console.log(`element pair ${arr[i]} ${arr[j]}`);
break;
        }
    }
}
var elem_pair=5
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==elem_pair){
console.log(`element pair ${arr[i]} ${arr[j]}`);
break;
        }
    }
}
var elem_pair=7
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==elem_pair){
console.log(`element pair ${arr[i]} ${arr[j]}`);
break;
        }
    }
}