var st=new Set()
st.add(10)
st.add(10) 
st.add(30)
console.log(st);    //==>not print the duplicate values

//add the list of values
function add(...args){
    return args.reduce((num1,num2)=>num1+num2)
}
console.log(add(10,20,30,40));

//find the max value of the list
function getMax(...args){   //... denotes spread operator
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,20,30));