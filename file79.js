const userMethods = {
     about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>= 18;
     },
    sing: function(){
        return 'ordinary';
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}, also create chain
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
     return user;
};

const user1 = createUser('Muhammad ishaq','khan','ishaq9094@gmail.com','19',"my address");
const user2 = createUser('Muhammad ','khan','ishaq9094@gmail.com','19',"my address");
const user3 = createUser('Muhammad R','khan','ishaq9094@gmail.com','19',"my address");
console.log(user1);
console.log(user1.about());
// console.log( user3.about());
// console.log(user1.sing());