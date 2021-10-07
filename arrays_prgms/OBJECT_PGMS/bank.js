class bank{
    createAccount(p_name,acno,ac_type,min_balance){
        this.p_name=p_name,
        this.acno=acno,
        this.ac_type=ac_type,
        this.balance=min_balance
    }
    deposite(amount){
          this.balance =+amount
          console.log(`your acnt ${this.acno} has been credited with amnt ${amount} aval bal ${this.balance}`);
    }
    withdrawal(amount){
        if(this.balance > amount){
            this.balance -=amount
            console.log(`your acnt ${this.acno} has been debited with amnt ${amount} aval bal ${this.balance}`);

        }
        else{
            console.log("transaction failed insufficient balance");
        }

    }
}

var obj1=new bank()
obj1.createAccount("ram",100,"savings",3000)

obj1.deposite(3000)
