//datastructures
//for organizing data
//Array


//define?
//is it possible to store same and different type of object/data
//size fixed or not
//represented in[]
//insertion order preserved
//fetching arrray elements index
//array index starting for 0th index
//              0     1     2     3     4     5        
var expenses=[10000,12000,20000,22000,12000,13000]

//jan exp
console.log(expenses[1]);

//add 3000rs more with feb exp
expenses[1]+=3000;
console.log(expenses[1]);

//strict module enable cheyyan=>"use strict"
//semicolon is optional in javascript



//inserting element to end of the array
expenses.push(22000) // arrayname.push() kodethal endigilott add avum

//remove an item from end
expenses.pop()  //pop() is used to deletion


//iterating through array
for(let i=0;i<expenses.length;i++){  //expenses.length use cheytha expenses[i]kodetha array il ulla alla elementsum print cheyyam
    console.log(expenses[i]);
}
for(let amount of expenses){  // amount of use cheytha iterationil direct value print avum
    console.log(amount);
}

// find total exp
var total=0;
for(let amount of expenses){
    //total+=amount
    total=total+amount;
}
console.log(total);

//print all exp <15000
for(let amount of expenses){
    console.log(expenses[amount]);
}


