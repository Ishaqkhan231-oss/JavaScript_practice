
// arrow function
// arrow function dont have [this]
// it will get [this] from its sourounding

const user1 = {
    firstName: "Rahat Ishaq",
    age: 19,
    about:()=>{
    console.log(this.firstName, this.age);}
}

user1.about(user1);


