
// const user1 = {
//     firstName: "Rahat",
//     age: 19,
//     about: function(){
//     console.log(this.firstName, this.age);}
// }

// alternate of the above
const user1 = {
    firstName: "Rahat",
    age: 19,
    about(){  // method 
    console.log(this.firstName, this.age);}
}
user1.about();
