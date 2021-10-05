var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]
// print number of items in shop
console.log(products.length);
// print number of available items
let aval_stock=0;
    for(let item of products){
    if(item[3]>0){
        aval_stock++;
    }
}
  console.log(aval_stock);
    

// print all product names only
var products_names=products.map((pro)=>pro[1])
console.log(products_names);

//print all available products
var aval_items=products.filter(item=>item[3]>0)
console.log(aval_items);

//print out of stock product name
var out_items=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_items);

//add offer 5rs for all products whose stock >50
var offer_product=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
console.log(offer_product);

//sort the products stock wise in descending order
products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);

//desending order of price
products.sort((item1,item2)=>item2[2]-item1[2])
console.log(products);

//ascending order
products.sort((item1,item2)=>item1[3]-item2[3])
console.log(products);
products.sort((item1,item2)=>item1[2]-item2[2])
console.log(products);

//highest price
var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_product);

//lowest price
var lowcost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(lowcost_product);

//search the treat item 
var search_item=products.find(item=>item[1]=="treat")
console.log(search_item);

//can i purchase item for <10 rs ? boolean trueor false some()
 var is_available=products.some(item=>item[2]<10)
 console.log(is_available);

 //<30rs
 var is_available=products.some(item=>item[2]<30)
 console.log(is_available);

//print pro names using foreach
 products.map(item=>item[1]).forEach(names=>console.log(names));

 //print products rs>30rs
 products.filter(item=>item[2]>30).forEach(item=>console.log(item));