// maps

// object literal
// key-->string
// key-->symbol
/*
const person = {
    firstName: "Ishaq",
    age:19,
    1: "one"
}
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person['1']);
console.log(person[1]);
for(let key in person){
    console.log(typeof key);
}
*/

// we can add anytype of key using map
// key value pair
// const person = new Map();
// person.set('firstName', 'Ishaq');
// person.set('age',7);
// person.set(1,'one');
// // person.set([1,3,4,,5],'oneThreefourfive');
// person.set({1:'oneDouble'},'oneThreefourfive');
// console.log(person)
// console.log(person.get('firstName'));
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let key of person){
//     console.log(Array.isArray (key));
// }

// for(let [key,value ]of person){
//     // console.log(Array.isArray (key));
//     console.log(key, value);
// }

const person1 = {
    id: 1,
    firstName: "Rahat Ishaq"
}

const person2 = {
    id: 2,
    firstName: "Ishaq khan"
}
const extraInfo = new Map();
extraInfo.set(person1, {age: 19, gender: "Female"});
extraInfo.set(person2, {age: 20, gender: "male"});
// console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);


// const person = new Map([['firstName', 'Ishaq'], ['age','19']]);
// console.log(person);
