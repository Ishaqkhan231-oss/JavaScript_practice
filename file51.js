// default parameters

// function addTwo(a,b){
//     // old way
//      if(typeof b === "undefined"){
//         b = 0;
//      }
//     return a+b;
// }
// new way,fefault parameters
function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(9, 9);
console.log(ans);