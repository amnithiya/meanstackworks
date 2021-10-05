// object define {}
//stored in key,value pairs
//values are accessed by using corresponding key

var employee={id:1000,emp_name:"ram",design:"developer",salary:25000}
console.log(employee["emp_name"]);
console.log(employee["salary"]);        // ivde [] pagaram .keyvalue parajalum run avum

//updating
//update employee salary as 30000
employee["salary"]=30000
console.log(employee);

//chk for gender key is present or not
console.log("gender" in employee);

