// splice method
// start, delete, insert
// used to delete item from an array
const myArray = ['item1','item2','item3'];

// delete,it will also give the deleted item
// const deltedItem =myArray.splice(1,1);
// console.log("deleted Item",deltedItem);


// insert
// myArray.splice(1,0,'inseted item');
// console.log(myArray);

// insert and delete together
const deletedItem = myArray.splice(1,2, "insertd item1","inserted item2");
console.log("deleted Item",deletedItem);
console.log(myArray);
