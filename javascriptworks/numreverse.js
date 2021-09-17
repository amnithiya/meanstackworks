// 123 =>321
//modulas
//floor

var num=123;
while(num!=0){  //123!=0 121=0 1!=0 0!0=0
 let digit=num%10; //digit=123%10=3 digit=12%10=2 digit=1%10=1
 console.log(digit); //3 2 1
 num=Math.floor(num/10)  //123/10=12 12/10=1 1/10=0
}
console.log(res);

// diff bw var and let
// var global
//let block level scope


var num=123;
var res="";
while(num!=0){  //123!=0 121=0 1!=0 0!0=0
 let digit=num%10; //digit=123%10=3 digit=12%10=2 digit=1%10=1
 res+=digit;  //""+3+2+1=321
 num=Math.floor(num/10)  //123/10=12 12/10=1 1/10=0
}
console.log(res);

//cube
var num=123;
var res=0;
while(num!=0){  //123!=0 121=0 1!=0 0!0=0
 let digit=num%10; 
 res=res+(digit**3);
 num=Math.floor(num/10)  //123/10=12 12/10=1 1/10=0
}
console.log(res);


