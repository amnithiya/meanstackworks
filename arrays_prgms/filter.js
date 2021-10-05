var names=["ajay","arun","akash","revin","bijoy"]
//print all names strat with a
var a_names=names.filter(name=>name[0]=='a')
console.log(a_names);

var arr=[2,3,4,5,6,7]
//print all odd numbers
var odd_num=arr.filter(num=>num%2 !=0)
console.log(odd_num);

//print squares of all even numbers
var even_square=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(even_square);


