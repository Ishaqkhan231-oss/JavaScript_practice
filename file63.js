// some method

const numbers = [3,5,11,9];
// kya ek bhi number esa hai jo even hai
// it will return true

// const ans = numbers.some((Number)=>Number%2===0);
// console.log(ans);


const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "apple Tv", price: 15000},
    {productId: 3, productName: " macbook class ", price: 250000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000 );

console.log(ans);