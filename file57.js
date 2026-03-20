// map method

// const numbers = [1,2,3,4];
// const square = function(number){
//     return number * number;
// }
// const squareNumber = numbers.map((number, index)=>{
//     return `index: ${index}, ${ number * number}`;
// });
// console.log(squareNumber);

const users = [
    {firstName: "Rahat ", age:19},
    {firstName: "Ishaq", age:20},
    {firstName: "Rahat", age:19},
    {firstName: "Ishaq", age:20}
]
// users.map((user)=>{
//     return user.firstName;
// })
// the above can be write as
const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames)


