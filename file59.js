// reduce
const numbers = [1, 2, 3, 4, 5, 10];

// aim: sum of all the numbers in arrays to 
// understand the reduce method work 

numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); // this code will give the sum of all the above 
// but not print out 
// it will print the result <---
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);// intial value to accumulator , 100
console.log(sum);
// how reduce works 
// accumulator ,  currentValue ,  return
// (100),1             2             3
// 3                   3             6
// 6                   4             10
// 10                  5             15
// 15                  10            25 
const userCart = [ 
    {productId: 1, productName:"mobile",price:29000},
    {productId: 2, productName:"laptop",price:20000},
    {productId: 3, productName:"Tv",price:17000},
]
const totalAmount = userCart.reduce((totalPrice, currentProducts)=>{
    return totalPrice + currentProducts.price;
},0);
console.log(totalAmount);

// totalPrice    currentValue     return
// 0               {}29000          29000
// 29000             20000          49000
// 49000             17000          66000            



