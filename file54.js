// callback function 
function myFunc2(name){
    console.log("inside my function 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){

   console.log("hello there Rahat, I am a function and i can ...?") 
   callback("Rahat") ;
   // console.log(a);
    // console.log("hello world");
}

// myFunc([1,3,4,2]);
// myFunc(["1,3,4,2"]);
// myFunc({name: "Rahat Ishaq"});
myFunc(myFunc2);
