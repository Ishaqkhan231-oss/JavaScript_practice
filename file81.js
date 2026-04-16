
function hello(){
    console.log("Hello Ishaq");
}

// hello();
// JS function ===> function + Object 
// console.log(hello.name);
// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);


// console.log(hello.prototype); // {}


// only function provide prototype property 
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "song song ";
};
console.log(hello.prototype.sing());


