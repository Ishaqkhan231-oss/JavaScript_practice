// find method

const myArray = ["Hello","cat","dog","lion"];
// function isLength3(string){
//     return string.isLength3 === 3;
// }

// const ans = myArray.find((String)=>String.length===3);
// console.log(ans);

const users = [
    {userId: 1, userName: "Rahat"},
    {userId: 2, userName: "Ishaq"},
    {userId: 3, userName: "Rahat ishaq"},
    {userId: 4, userName: "Rahat"},
    {userId: 5, userName: "Rahat Rahat"},
];

const myUser = users.find((user)=>user.userId===3);
// const myUser = users.find((user)=>{
//     return user.userId===3});

console.log(myUser);
