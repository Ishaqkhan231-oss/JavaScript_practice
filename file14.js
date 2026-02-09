// if else condition 

// let age = 19;
// let age = 18;
let age = 22;
if(age>=18){
    console.log("user can play ddlc");
}else{
    console.log('user can play mario');
}

let num = 13;
 if(num%2==0){
    console.log('even');
 }else{
    console.log('odd');
 }



 // ----> falsy values 
// false
// ""
// null
// undefined
// 0 
// let firstName = false ;    
// let firstName = "";
// let firstName = " Ishaq";
// let firstName = null ;
// let firstName ;
// let firstName = 0 ;
// truthy 
// "abc"
// 1 , -1 
// let firstName = 1;
// let firstName = -1;
let firstName = 0;
if (firstName){
    console.log(firstName);
}else{
    console.log("firstName is  kinda empty");
    console.log(typeof firstName);
}