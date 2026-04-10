const userMethods = {
     about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>= 18;
     }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
     return user;
};

const user1 = createUser('Rahat ','ishaq','rahat18@gmail.com','19',"my address");
const user2 = createUser('Rahat ','ishaq','rahat189@gmail.com','19',"my address");
const user3 = createUser('Rahat ','ishaq','rahat1818@gmail.com','19',"my address");
console.log(user1.about());
console.log( user3.about());

