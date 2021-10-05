//push()
//pop()
//sort()
//asc order=>10(num1),11(num2)==>num1-num2
//desc =>10(num1),11(num2)==>num2-num1
//var arr=[10,11,13,14,12,100,2,3]
//arr.sort((num1,num2)=>num1-num2)
//console.log(arr);


//            0  1  2  3  4  5
    var arr=[10,11,13,14,12,15]
    var element=13;
    var low=0,upp=arr.length-1;
    while(low<upp){
        mid=Math.floor((low+upp)/2);
        if(element<arr[mid]){
            upp=mid-1;
        }
        else if(element>arr[mid]){
             low=mid+1;
        }
        else if(element==arr[mid]){
            flag=1;
            break;
        }
    }
    //if(flag==0){
    //  console.log("element not found");
    //}
    //else{
    //   console.log("element found");
    //}

console.log(flag==0?"element not found":"element found");