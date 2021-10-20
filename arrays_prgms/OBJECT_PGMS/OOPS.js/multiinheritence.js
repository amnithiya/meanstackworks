class parent{
    m1(){
        console.log("inside parent");
    }
}
class child extends parent{
    m2(){
        console.log("inside m2");
    }
}
class subchild extends child{
    m3(){
        console.log("inside m3");
    }
}

var sb=new subchild()
sb.m1()
sb.m2()
sb.m3()

var ch=new child()
ch.m1()
ch.m2()

var parent=new Parent()
parent.m1()

