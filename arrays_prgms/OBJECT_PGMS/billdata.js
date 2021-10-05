var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:10000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]
var sales_report={}
for(let bill of bill_details){
    let bill_date=bill.date
    let bill_amount=bill.amount
    if(bill_date in sales_report){
        sales_report[bill_date]+=bill_amount
    }
    else{
         sales_report[bill_date]=bill_amount
    }
}

//console.log(sales_report);

//sort the sales report based on total_collection  =>25000 17000 10000
Object.entries(sales_report).sort((billamount1,billamount2)=>billamount2-billamount1)
console.log(sales_report);