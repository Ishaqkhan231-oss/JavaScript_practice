// how to iterate object 
const person = {
    name: "Rahat Ishaq",
     age: 19,
    "person hobbies": ["coding", "Traveling", "Studying"]

}
// -->two ways to do so 
// for in loop

for(let key in person){
    console.log(`${key} : ${person[key]}`);
    // console.log(key," : ", person[key]);
}
// object.keys
// console.log(typeof(Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person);
// }