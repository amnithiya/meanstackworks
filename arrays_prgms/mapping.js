var arr=[2,3,4,6,5,7,8]   //op=[1,2,3,7,5,8,9]
//if num <5 mapp into num-1 else num>5 mapp num+1
var op=[]
for(let num of arr){
    if(num<5){
op.push((num-1))
}
else if(num>5){
  op.push((num+1))  
}
else{
    op.push(num)
}
// using ternary operator ==>num<5?op.push(num-1):num>5?op.push(num+1):op.push(num)
}
console.log(op);

var expenses=[12000,13000,14000,15000,11000,25000]
//print highest exp
//print lowest exp
//num of month exp exceeds 15000
//print avg exp
//without sort and no predefined mthds allowed

//1.
let high_exp=expenses[0];
for(let amount of expenses){
  if(high_exp<amount){
    high_exp=amount

  }
}
console.log(high_exp);


//2.
let low_exp=expenses[0];
for(let amount of expenses){
  if(low_exp>amount){
    low_exp=amount

  }
}
console.log(low_exp);

//3.
let count=0;
for(let amount of expenses){
  if(amount>15000){
    count++;
  }
}
  console.log("exp>15000 count",count);
  
  //4.
  var total_exp=0;
  for(let amount of expenses){
    total_exp+=amount
  }
  console.log(total_exp/expenses.length);


