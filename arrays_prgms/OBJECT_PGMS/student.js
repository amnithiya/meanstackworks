var students={
    roll:100,
    name:"nikhil",
    course:"bca",
    total:750
}
//print student name
console.log(students.name);

//update total as 800
students.total=800

//chk for grade key is present or not
console.log("grade" in students);

//add new key value pair(grade,a+)
students.grade="A+"
console.log(students);

//add 20 mrks of bonus
students.total+=20
console.log(students);