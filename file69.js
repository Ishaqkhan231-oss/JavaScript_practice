// clone using object.assign
/*
const obj = {
    key1: "value1",
    key2: "value2"
}
const obj2 =obj;
obj.key3 = "value";

console.log(obj);
console.log(obj2);*/
// To avid this issue we have to make a new object in memory 

const obj = {
    key1: "value1",
    key2: "value2"
}
// const obj2 ={...obj};
const obj2 = Object.assign({}, obj);
obj.key3 = "value";
console.log(obj);
console.log(obj2);


