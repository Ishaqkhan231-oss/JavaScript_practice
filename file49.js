// lexical scope
const myVar = "value1";
function myApp() {

    function myFunc() {
        // const myVar = "value59";
        const myFunc2 = () => {
         console.log("inside myFunc:", myVar);
        }
        myFunc2();
     }



    // Tow function not explined
    // const myFunc2 = function () { }
    // const myFunc3 = () => { }
    console.log(myVar);
    myFunc();
} 
myApp();