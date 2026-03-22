// sorting
// const userNames = ['Rahat Ishaq','aabc','aadc', 'radio', 'Ishaq', 'Muhammad','ABCR']
// userNames.sort();
// console.log(userNames);

const numbers = [5,9,400,1200,3000];// it consider it as a string
// ["5","9","1200","410","3000"] JS use ASCII code to sort string
// [53 ,57 , 49   , 52  , 51];
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
 
numbers.sort((a,b)=>{
    return a-b;
    // return b-a;
});

// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// how the above method works 
// 1200 ,410
// a-b--->790
// a-b ---->(if positive greater than 0,then do this)
// swapp 'a' and 'b'
// 410,1200.  And continue the process
// voice versa for negative results
// 5,9
// a,b ,remains a,b
// 5,9


// === Price lowToHigh, HighToLow ====
const products = [
    {productId:1, productsName: "p1",price: 300},
    {productId:2, productsName: "p2",price: 3000},
    {productId:3, productsName: "p3",price: 200},
    {productId:4, productsName: "p4",price: 8000},
    {productId:5, productsName: "p5",price: 500},
    {productId:6, productsName: "p6",price: 3040},
]

// lowtohigh
const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});

const HighToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(HighToLow);

