//create a class student setStudent(rol course,stud_name) and printStudent()

class student{
    constructor(rol,course,stud_name){
        this.rol=rol,
        this.course=course,
        this.stud_name=stud_name
    }
    printPerson(){
        console.log(this.rol,this.course,this.stud_name);
    }
}
var obj1=new student(1,"bca","anu");
obj1.printPerson()