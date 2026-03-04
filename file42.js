// objects inside array
// very useful in real world application

const users = [
    {userId: 1, firstName: "Rahat1 Ishaq", gender: "male"},
    {userId: 2, firstName: "Rahat---2 Ishaq ", gender: "male"},
    {userId: 3, firstName: " Rahat______3 Ishaq ", gender: "male"},

]
for(let user of users){
    console.log(user.firstName);
}