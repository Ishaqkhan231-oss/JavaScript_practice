
const user1 = {
    firstName: "Rahat ishaq",
    age: 19,
    about: function(){
        console.log(this.firstName, this.age);
    }

}

// dont do this mistake
// user1.about();
// const myFunc = user1.about;
// myFunc();
// ye oper ham ny es tarah kiya ha,that are below

// const myFunc = function(){
//         console.log(this.firstName, this.age);
//     }
// myFunc();

// to solve this issue, do this
const myFunc = user1.about.bind(user1);;
myFunc();



