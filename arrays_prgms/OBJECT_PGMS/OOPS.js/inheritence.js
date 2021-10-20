//parent class child class
class parent{
    phone(){
        console.log("have redmi 10pro max");
    }
}
class child extends parent{    //extends used to inherit the parent class
phone(){
    super.phone()      //super==> used to refer the parent class
    console.log("iphone 12");
}
}
var child=new child()
child.phone()

//method overriding==>overriding vngi there must be a is a relnship(child parent ne inherit cheyyanam,methodinte resolution same ayirikyanam)