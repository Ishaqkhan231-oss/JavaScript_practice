Rahat// new keyword
/*
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user1 = new createUser("Ishaq", 10);

// new keyword 
// 1) it create empty object,And this value becomes lik this.
// this = {}
// 2.) return this
// 3.) Object.create(createUser.prototype);

user1.about();*/

// new keyword

// __proto__
// offical ecmascript documentation
// [[prototype]]
// constructor function
// C is a convention in createUser
function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
};
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return "Ordinary";
}

const user1 = new CreateUser('Rahat_1 ', 'ishaq', 'ishaq9094@gmail.com', '19', "my address");
const user2 = new CreateUser('Rahat_2 ', 'ishaq', 'ishaq9094@gmail.com', '19', "my address");
const user3 = new CreateUser('Rahat_3 ', 'ishaq', 'ishaq9094@gmail.com', '19', "my address");
console.log(user1);
// console.log(user1.about());
// console.log( user3.about());
// console.log(user1.is18());



