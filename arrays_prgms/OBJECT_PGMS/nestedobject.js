var accounts = {
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
function login(acno,password){
    if(acno in accounts){
        let pwd=accounts[acno].password
        if(pwd==password){
            console.log("login success");
        }
        else{
            console.log("invalid password");
        }
    }
    else{
        console.log("invalid account number");
    }
}
login(1001,"userone")

//list transactions off acc=1001
console.log(accounts[1001].transactions);

//print transactions >500
var res=accounts[1001].transactions.filter(transaction=>transaction.amount>500)
console.log(res);

