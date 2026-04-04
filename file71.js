// methods
// function inside object

 function personInfo(){
        // console.log(this.firstName);
        console.log(`person name is ${this.firstName} and age is ${this.age}`);

    }

const person1 = {
    firstName: "Rahat Ishaq",
    age:19,
    about:personInfo
    // about: function(){
        // console.log(this.firstName);
        // console.log(`person name is ${this.firstName} and age is ${this.age}`);

    // }
}
const person2 = {
    firstName:"Rahat2 Ishaq",
    age: 19,
    about:personInfo
}
const person3 = {
    firstName:"Muhammad ",
    age: 20,
    about:personInfo
}
const person4 = {
    firstName:"Rahat ishaq3  ",
    age: 18,
    about:personInfo
}
person1.about();
person3.about();
person4.about();


