// nested destructring
const users = [
    { userId: 1, firstName: "Rahat Ishaq", gernder: "female" },
    { userId: 2, firstName: " Ishaq khan", gernder: "male" },
    { userId: 3, firstName: "Rahat Ishaq ", gernder: "female" },
]

// const [user1,user2,user3] = users;
// console.log(user3);
// getting specific data from the objects
const [{firstName: user1firstName, userId}, ,{gernder}] = users;
console.log(userId);
console.log(user1firstName);
console.log(gernder);