// function retruning function 

function myFunc(){
   /* function hello(){
        return "hello world"
    }
    return hello;*/
    return function(){
        return "hello world"
    };
    // return "a";
    // return [1,2,3,4];
    // return {name:"ishaq", age: 19};
}
const ans = myFunc();
// console.log(ans);
console.log(ans());