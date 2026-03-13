// block scope vs function scope


// let and const are block scope
// var is function scope

//Below is a Block 
// {
//     let firstName = "Ishaq";//with const,let, not accesible from out side
// }
// console.log(firstName);// we cant access outside of the block
/*
{
    var firstName = "Ishaq";
     console.log(firstName);
}

{
    var firstName = "khan";
    console.log(firstName);
}
*/
// if(true){
//     // let firstName = "Ishaq 123";
//     var firstName = "Ishaq 123";
//     console.log(firstName);
// }
// console.log(firstName);

function myApp(){
    if(true){
        // let firstName = "M_Ishaq";
        var firstName = "M_Ishaq";//var is a func scope
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();