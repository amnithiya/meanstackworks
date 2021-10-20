class Employee{
    constructor(eid,e_name,salary,desig){
        this.eid=eid
        this.e_name=e_name
        this.salary=salary
        this.desig=desig

    }
}

var emp1=new Employee(1000,"ram",25000,"developer")
var emp2=new Employee(1001,"ravi",23000,"developer")
var emp3=new Employee(1002,"raju",26000,"ba")

var employees=[];
employees.push(emp1,emp2,emp3)
// for(let emp of employees){
// console.log(emp);
// }

//print developer details
employees.filter(emp=>emp.desig=="developer").forEach(developer=>console.log(developer));

//sort employee objects based on salary
employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(employees);
//mutable==>change cheyyan pattum
//inmutable==>change cheyyan pattilla

//getMax salary
var getMax=employees.reduce((emp1,emp2)=>emp1[3]>emp2[3]?emp1:emp2)
console.log(getMax);


//DOM(Document Object Model)