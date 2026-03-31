// set (it is iterable)
// store data
// sets also have its own methods
// No index based access
// Order is not guranted
// unique* item only (no duplicate allowed)

const item = ['item1','item2','item3'];
const numbers = new Set([]);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
// numbers.add(item);// these boths are not allowed
// numbers.add(item);
// numbers.add(['item1','item2']);these boths 
// numbers.add(['item1','item2']); are allowed
// To find any particular value
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// console.log(numbers);
// console.log(numbers[1]); index is not allowed

// for(let number of numbers){
//     console.log(number);
// }

// when to use set
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);

// To find length 
let length = 0;
for(let element of uniqueElements){
    length++;

}
console.log(length);




