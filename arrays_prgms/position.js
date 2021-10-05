arr1=[10,20,21,22]
arr2=[11,12,20,21]
arr1.sort((no1,no2)=>no1-no2)
arr2.sort((no1,no2)=>no1-no1)
var pos1=0,pos2=0;
var count=0;
while((pos1<arr1.length)&(pos2<arr2.length)){
if(arr1[pos1]==arr2[pos2]){
console.log(arr1[pos1]);
pos1++;
pos2++;
 }
else if(arr1[pos1]<arr2[pos2]){
        pos1++;
    
    }
else if(arr1[pos1]>arr2[pos2]){
        pos2++;

    }
    count++;
}
console.log("iteration",count);