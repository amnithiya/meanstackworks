//bank
//Authenticate
//fundTransfer()
//balanceEnquiry()

class Bank {
    session = {}
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
    // getAccountdetails(){
    //     return this.accounts
    // }
    validateAccountNumber(accno) {
        return accno in this.accounts ? true : false
    }
    authenticate(accno, password) {
        if (this.validateAccountNumber(accno)) {
            let pwd = this.accounts[accno].password;
            if (pwd == password) {
                this.session["user"] = accno // here add the acno of login acc

                //console.log("login success");
                return 1;
            }
            else {
                //console.log("invalid password");
                return -1;
            }
            //user pwd==password?1:0  ==>using trnary operator
        }
        else {
            return 0 //invalid accno
        }
    }
    balanceEnquiry() {
        let balance = this.accounts[this.session["user"]].balance
        return (balance);
    }
    fundTransfer(to_accno, amount) {
        if (this.validateAccountNumber(to_accno)) {
            let user = this.session["user"]
            let bal = this.balanceEnquiry()
            console.log("balance",bal);
            if (bal > amount) {
                this.accounts[user].balance -= amount
                this.accounts[to_accno].balance += amount
                this.accounts[user].transactions.push({ to: to_accno, amount: amount })
                console.log(this.accounts[user]);
            }
            else {
                console.log("insufficient balance");
            }

        }
        else {
            console.log("invalid account number");
        }
    }
    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);
    }
    creditTransactions() {
        let user = this.session["user"]
        console.log(this.accounts[user]);
    }
}
var obj = new Bank()
var user = obj.authenticate(1002, "usertwo")
obj.balanceEnquiry()
obj.fundTransfer(1001, 5000)
