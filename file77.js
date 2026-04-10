const user = {
    firstName: "Rahat",
    lastName: "ishaq",
    email: "rahat_ishaq343@gmail.com",
    age:20,
    address: "House Number, Colony, pincode, state",
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
     is18: function(){
        return this.age>= 18;
     }
}
const aboutUser = user.about();
console.log(aboutUser);
// function (that function create objects)
// add key value pair
// object ko return kary ga
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return this.age>= 18;
     }
     return user;
};

const user1 = createUser('Muhammad ishaq','khan','ishaq9094@gmail.com','19',"my address");
console.log(user1);
const is18 = user.is18();
const about = user.about();
console.log(about); 
console.log(is18);

