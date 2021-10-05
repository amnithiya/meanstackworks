arr1=[10,20,21,22]
arr2=[11,12,20,21]
//print common elements from this array(20,21)
count=0;
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1===num2){
            console.log("common element",num1);
        }
        count++;
    }
}
console.log(count);

arr=[10,11,12,13,14,11] //search for 15 inthis array element not found element found
var element=15,flag=0;
for(let num of arr){
if(num==element){
    flag+=1;
    break;
}
}
if(flag==0){
    console.log("element not found");
}
else{
    console.log("element found");
}


arr=[10,11,12,11,10] //find duplicate elements 10,11
for(let i=0;i<=4;i++){
    for(let j=i+1;j<=4;j++){
if(arr[i]==arr[j]){
        console.log("duplicate elements",arr[i]);
}
    }
        }
    
    