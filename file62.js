// every method
/*
const number = [2,4,6,8,10];

function isEven(number){
    return number % 2 === 0;
}
// const ans = number.every((number)=>number%2===0);
const ans = number.every(isEven);

// callback function --->true/false (boolean )
// every method --->true/false (boolean )
console.log(ans);
*/

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "apple Tv", price: 15000},
    {productId: 3, productName: " macbook class ", price: 250000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);


