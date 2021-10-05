var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//print number of employees
console.log(employees.length);

//print no of decvelopers
var developer_count=0;
for(let employee of employees){
    if(employee[3]=="developer"){
        developer_count++;
    }
}
console.log("developers=",developer_count);

//print exp of each empolyee?
for(let employee of employees){
    console.log("exp",employee[5]-employee[4]);
}

//print highest salary
var high_salary=0;
for(let employee of employees){
    if(high_salary<employee[2]){
        high_salary=employee[2]
    }
        }
        console.log("max_salary=",high_salary);
    

//print lowest salary
var low_salary=employees[0][2];
for(let employee of employees){
    if(low_salary>employee[2]){
        low_salary=employee[2]
    }
}
console.log("low_salary=",low_salary);

//print all emp names
var employee_names=employees.map((emp)=>emp[1])
console.log(employee_names);

//print developer details
var developers=employees.filter(emp=>emp[3]=="developer")
console.log(developers);

//print name of developer who is tasking highest salary
//print name of highest exp employee
//print total sum of salary group by developer

//print names of ba
var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
console.log(analyst);

//print developers name
var developers_names=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
console.log(developers_names);

//print developer names whose exp >6years
var developers_names=employees.filter(emp=>(emp[3]=="developer")& (emp[5]-emp[4])>6).map(emp=>emp[1])
console.log(developers_names)

//add bonus of 5000 rs for all developer 
var sal=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
console.log(sal);

//sort employee wrt exp asc dsc
employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log(employees);
//dsc
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);
//sort employee wrt salary
employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees);
//sort developers wrt salary
var developers=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(developers);
//asc
var developers=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(developers);