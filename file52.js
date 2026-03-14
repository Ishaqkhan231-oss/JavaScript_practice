// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `, c);
// }

// myFunc(10,5,4,3,5,6,7);

function addAll(...numbers){
   let total = 0;
   for(let number of numbers){
    total = total + number;
   }
   return total;
}
const ans = addAll(1,2,3,4,5,6);
console.log(ans);