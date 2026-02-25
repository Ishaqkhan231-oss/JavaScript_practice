// objects,refrence type
// arrays are good but not sufficient
// for real world data
// object store key value pairs
// object dont have index
// keys also called properties
// -->how to create objects

// const person = {name:"Rahat Ishaq",age:19};
const person = {
    name: "Rahat Ishaq",
    age: 19,
    hobbies: ["Rahat", "Coding", "sleeping"]
}
console.log(person);

//--> how to access data from objects
// console.log(person.name);
// console.log(person["name"]);//keys in JS are string ,by default
// console.log(person["age"]);
// console.log(person.age);
// console.log(person.hobbies);

// -->how to add key value pair to objects
// person.gender = "male";
person ["gender"] = "male";
console.log(person);