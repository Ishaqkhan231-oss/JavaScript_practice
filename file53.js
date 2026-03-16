// param destructuring
// Object,
// react 

const person = {
    firstName: "Rahat Ishaq",
    gender: "female",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.age);//undefined
// }


function printDetails({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);