// array destructing
const myArray = ["value1","value2","value3","value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myvar1 is = ",myVar1);
// console.log("value of myvar2 is = ",myVar2);
// array distracting in line 9
// short cut in JS to do the above work
let [myVar1, myVar2, ...myNewArray] = myArray;// use , for skipping index
// myVar1 = "value changed";//use it as normal varivale
// let myNewArray = myArray.slice(2);
console.log("value of myvar1 is = ",myVar1);
console.log("value of myvar2 is = ",myVar2);
console.log(myNewArray);