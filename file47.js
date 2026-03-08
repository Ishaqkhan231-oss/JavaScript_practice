// hoisting 
// hello();  //we can call above the function only in JS , it only work incase of function 
// deleration not in func expression case
// function hello(){
//     console.log(" Hello Rahat ,How are you! ");
// }
//  func expression ,not working <----
//  hello();
// const hello =  function (){
//     console.log(" Hello Rahat ,How are you! ");
// }
// arrow function ,not working
//  hello();
// const hello =  () => {
//     console.log(" Hello Rahat ,How are you! ");
// }

// console.log(hello); // but if we write here "let" or "const",it will throw an error not showing undefined
// var hello = "Hello Rahat";
// console.log(hello);