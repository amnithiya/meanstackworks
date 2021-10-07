//class decleration=>class classname()

class Person {
    setPerson(name, gender, age) {  //name,gender,age==>loc variables
        this.name = name,
        this.gender = gender,   //this used to call  the current cls obj/instance
        this.age = age          //instance variables==>this.name,this.age
                               //js is interpreter
        
    }
    printPerson() {
        console.log(this.name, this.gender, this.age);
    }
}

//classinte obj create cheyyan=>var refname=new classname()
//obj inside of cls anel used this.property
//obj outside of cls anel used refname.property

var obj1 = new Person();
obj1.setPerson("ram", "male", 25)
console.log(obj1.name);

//duty of setPerson()==>initializing instance variables
//constructor==>initializing instance variables
//in constructr setPerson() ne pagaram constructor kodethamathi
//seperate call cheyyanda obj create cheyyumbo automatically call avum

