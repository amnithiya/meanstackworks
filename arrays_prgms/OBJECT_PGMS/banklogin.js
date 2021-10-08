//bank
//Authenticate
//fundTransfer()
//balanceEnquiry()

class Bank{
    session={}
 accounts = {
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1001, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
     },
}
getAccountdetails(){
    return this.accounts
}
authenticate(accno,password){
   if(accno in this.accounts){
       let pwd=this.accounts[accno].password;
        if(pwd==password){
            this.session["user"]=accno // here add the acno of login acc
            console.log(this.session);
            //console.log("login success");
            return 1;
        }
        else{
            //console.log("invalid password");
            return 0;
        }
     //user pwd==password?1:0  ==>using trnary operator
   } 
   else{
       return -1 //invalid accno
   }
}
balanceEnquiry(accno){
  let balance=this.accounts[this.session["user"]].balance
  console.log(balance);
}
fundTransfer(to_accno,amount){
    let user=this.accounts[this.session["user"]]
    console.log(user);
  if(to_accno in this.accounts){
      if(user[this.accounts] >amount){
          this.accounts[user].balance-=amount
          this.accounts[to_accno].balance+=amount
        }
        else{

        }
    
  }
  else{
      console.log("invalid account number");
  }
}
}
var obj=new Bank()
var user=obj.authenticate(1001,"userone")
obj.balanceEnquiry()
