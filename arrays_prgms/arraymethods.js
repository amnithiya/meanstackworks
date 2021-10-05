//map
//filter
//reduce
//sort
//find
//forEach
 
 // apply a condition on every elements used "filter" method 
//no condition but every elements generate op here used "map" method==>eg:find cube,square
              //map(function)

var arr=[2,3,4,5,6]
//var squares=(num)=>num**2
var squares=arr.map((num)=>num**2)
console.log(squares);

//var cube=(num)=>num**3
var cubes=arr.map((num)=>num**3)
console.log(cubes);

//print even numbers from array
//var isEven=num=>num%2==0

var evens=arr.filter(num=>num%2==0)    //=>used filter
console.log(evens);

//print all numbers >3
var nums=arr.filter(num=>num>3)
console.log(nums);



